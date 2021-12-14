import React, { useState } from 'react';
import { Button, ButtonGroup, Container, Typography } from '@mui/material'
import { Link } from 'react-router-dom';
import HeaderComponent from '../Components/HeaderComponent';

export default function InitialPage() {
    const [counter, setCounter] = useState(0);
    const displayCounter = counter > 0 || counter === 0;

    const handleIncrement = () => {
        setCounter(counter + 1);
    };

    const handleDecrement = () => {
        setCounter(counter - 1);
    };

    
    return (
        <>
            <Container>
                <HeaderComponent/>
                <Typography variant="h6" textAlign="center">Selecione a quantidade de perguntas...</Typography>
                <div style={{'textAlign': 'center', 'marginTop': '2rem'}}>
                <Container style={{'alignContent':'center'}}>
                    <ButtonGroup size="small" aria-label="small outlined button group">
                        {counter !== 0 ? displayCounter && <Button onClick={handleDecrement}>-</Button> : <Button disabled>-</Button>}
                        {displayCounter && <Button disabled>{counter}</Button>}
                        <Button onClick={handleIncrement}>+</Button>
                    </ButtonGroup>
                </Container>
                </div>
                { counter > 0 ? <div style={{'textAlign': 'center', 'marginTop': '1.5rem'}}><Link to={`/confirmation/${String(counter)}`} style={{ textDecoration: 'none' }}><Button variant='contained'>Avançar</Button></Link></div> : 
                <div style={{'textAlign': 'center', 'marginTop': '1.5rem'}}><Button variant='contained' disabled>Avançar</Button></div> }
            </Container>
        </>
    );
}