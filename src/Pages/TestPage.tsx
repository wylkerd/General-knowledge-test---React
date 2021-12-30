import React, { useEffect, useState } from "react";
import axios from 'axios';
import HeaderComponent from "../Components/HeaderComponent";
import { IAllAlternatives, IQuestions } from "../Components/interface/Entity";
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

    // Função para randomizar array
    function shuffleArray(arr: any) {
        // Loop em todos os elementos
        for (let i = arr.length - 1; i > 0; i--) {
                // Escolhendo elemento aleatório
            const j = Math.floor(Math.random() * (i + 1));
            // Reposicionando elemento
            [arr[i], arr[j]] = [arr[j], arr[i]];
        }
        // Retornando array com aleatoriedade
        return arr;
    }
    
    const handleToggle = (value: any) => () => {
        setSelected({ checked: value });
      };

    // const questions = testQuestions?.results.length > 0 ? testQuestions?.results.map((question, index) => {
    //     return (
    //         <tr key={index}>
    //             <td className="">{question.category}</td>
    //             <td className="">{question.difficulty}</td>
    //             <td className="">{question.type}</td>
    //             <td className="">{question.question}</td>
    //             <td className="">{question.correct_answer}</td>
    //             <td className="">{question.incorrect_answers}</td>
    //         </tr>
    //     )
    // }) : [];

    const questions = testQuestions?.results.length > 0 ? testQuestions?.results.map((question, index) => {
        let alts: IAllAlternatives = { alternatives: [] };
        alts.alternatives = question.incorrect_answers;
        alts.alternatives.push(question.correct_answer);
        alts = shuffleArray(alts);
        return (
            <div className="">
                    <Typography component="h1" variant="h4">
                    {question.question}
                    </Typography>
                    <form className="" noValidate>
                        <List>
                            {[0, 1, 2, 3].map(value => (
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
                                    primary={alts.alternatives[value]}
                                />
                                </ListItem>
                            ))}
                        </List>
                    </form>
                </div>
        )
    }) : [];

    return (
        <>
            <HeaderComponent/>
            <Container component="main" maxWidth="xs">
                <CssBaseline />
                {questions.length <= 0 ? <div>Nenhum dado encontrado</div> : questions}
            </Container>
        </>
    );
}