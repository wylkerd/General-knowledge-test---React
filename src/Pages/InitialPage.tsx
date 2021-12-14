import React, { useEffect, useState } from 'react';
import { Button, Container, Divider, Typography } from '@mui/material'
import CounterComponent from '../Components/CounterComponent';
import { FcIdea } from "react-icons/fc";

export default function InitialPage() {
    const [amount, setAmount] = useState(Number(window.sessionStorage.getItem('counter')));
    useEffect(() => {console.log(amount);}, [amount]);
    
    return (
        <>
            <Container>
                <Typography variant="h2" textAlign="center" alignItems="center" marginTop="1.5rem">Teste seu conhecimento <FcIdea/></Typography>
                <Divider />
                <br/><br/>
                <Typography variant="h6" textAlign="center">Selecione a quantidade de perguntas...</Typography>
                <div style={{'textAlign': 'center', 'marginTop': '2rem'}} onClick={() => setAmount(Number(window.sessionStorage.getItem('counter')))} ><CounterComponent/></div>
                { amount > 0 ? <div style={{'textAlign': 'center', 'marginTop': '1.5rem'}}><Button variant='contained'>Avançar</Button></div> : 
                    <div style={{'textAlign': 'center', 'marginTop': '1.5rem'}}><Button variant='contained' disabled>Avançar</Button></div> }
            </Container>
        </>
    );
}