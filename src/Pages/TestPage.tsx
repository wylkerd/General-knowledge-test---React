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
    function shuffleArray(array: any) {
        let currentIndex = array.length,  randomIndex;

        // While there remain elements to shuffle...
        while (currentIndex !== 0) {

            // Pick a remaining element...
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex--;

            // And swap it with the current element.
            [array[currentIndex], array[randomIndex]] = [
            array[randomIndex], array[currentIndex]];
        }

        return array;
    }
    
    const handleToggle = (value: any) => () => {
        setSelected({ checked: value });
      };

    const questions = testQuestions?.results.length > 0 ? testQuestions?.results.map((question, index) => {

        let all_answers = question.incorrect_answers.concat(question.correct_answer) ;
        all_answers = shuffleArray(all_answers);
        question.all_answers = all_answers;
        return (
            <div className="">
                    <Typography component="h1" variant="h4">
                    {question.question}
                    </Typography>
                    <List>
                        {/* {[0, 1, 2, 3].map(value => (
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
                                // primary={alts.alternatives[value]}
                                primary={all_answers[value]}
                            />
                            </ListItem>
                        ))} */}
                        {question.all_answers.map((value, i) => (
                            <ListItem
                            key={i}
                            role={undefined}
                            button
                            onClick={handleToggle(i)}
                            className=""
                            >
                            <FormControlLabel
                                    control={<Radio />}
                                    checked={selected.checked === i}
                                    tabIndex={-1} 
                                    label={""}                        
                                />
                            <ListItemText
                                // primary={alts.alternatives[value]}
                                primary={value}
                            />
                            </ListItem>
                        ))}
                    </List>
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