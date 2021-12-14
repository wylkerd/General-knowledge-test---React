import React from 'react';
import { Button, Container, Divider, Typography } from '@mui/material'
import CounterComponent from '../Components/CounterComponent';

export function InitialPage() {
    return (
        <>
            <Container>
                <Typography variant="h2" textAlign="center">Teste seu conhecimento</Typography>
                <Divider />
                <br/><br/>
                <Typography variant="h6" textAlign="center">Selecione a quantidade de perguntas...</Typography>
                <div style={{'textAlign': 'center', 'marginTop': '2rem'}}><CounterComponent/></div>
                <div style={{'textAlign': 'center', 'marginTop': '1.5rem'}}><Button variant='contained'>Avançar</Button></div>
            </Container>
        </>
    );
}