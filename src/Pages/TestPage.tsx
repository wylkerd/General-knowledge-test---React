import React, { useEffect, useState } from "react";
import axios from 'axios';
import HeaderComponent from "../Components/HeaderComponent";
import { IQuestions } from "../Components/interface/Entity";
import * as Data from '../Data/Data';
import { Container, CssBaseline, FormControlLabel, List, ListItem, ListItemText, Radio, Typography } from "@mui/material";

export default function TestPage() {
    const counter = useState(window.location.pathname.split('/')[2]);
    const [testQuestions, setTestQuestions] = useState<IQuestions>({ response_code: 0, results: [] });
    const [loaded, setLoaded] = useState(false);
    const [selected, setSelected] = useState({checked: 0});

    const buscar = (counter: number) => {
        if (!loaded)
        Data.getAllQuestions<IQuestions>(counter).then(values => {
            let total = values.total != null ? values.total : 0;
            setTestQuestions(values.data);
            setLoaded(true);
            return values;
        });
    }

    useEffect(() => {
        let amount = parseInt(counter[0]);
        setLoaded(true);
        buscar(amount);
    },[counter])

    useEffect(() => {
        
    }, [testQuestions])
    
    const handleToggle = (value: any) => () => {
        setSelected({ checked: value });
      };

    const questions = testQuestions?.results.length > 0 ? testQuestions?.results.map((question, index) => {
        return (
            <tr key={index}>
                <td className="">{question.category}</td>
                <td className="">{question.difficulty}</td>
                <td className="">{question.type}</td>
                <td className="">{question.question}</td>
                <td className="">{question.correct_answer}</td>
                <td className="">{question.incorrect_answers}</td>
            </tr>
        )
    }) : [];

    return (
        <>
            <HeaderComponent/>
            {/* <table id="test">
                <thead>
                    <tr>
                        <th>Category</th>
                        <th>Difficulty</th>
                        <th>Type</th>
                        <th>Question</th>
                        <th>Correct Answer</th>
                        <th>Incorrect Answers</th>
                    </tr>
                </thead>
                <tbody>
                    {questions.length <= 0 ? <tr><td>Nenhum dado encontrado</td></tr> : questions}
                </tbody>
            </table> */}

            <Container component="main" maxWidth="xs">
                <CssBaseline />
                <div className="">
                    <Typography component="h1" variant="h4">
                    Qual foi o seu primeiro bixo de estimação?
                    </Typography>
                    <form className="" noValidate>
                    <List>
                        {[0, 1, 2, 3, 4].map(value => (
                            <ListItem
                            key={value}
                            role={undefined}
                            button
                            onClick={handleToggle(value)}
                            className=""
                            >
                            <FormControlLabel
                                    control={<Radio />}
                                    checked={selected.checked === value}
                                    tabIndex={-1} 
                                    label={""}                        
                                />
                            <ListItemText
                                primary={`This a a multiline answers, please work please please`}
                            />
                            </ListItem>
                        ))}
                        </List>
                    </form>
                </div>
            </Container>
        </>
    );
}