import React from "react";
import { useEffect, useState } from "react";
import { Button, ButtonGroup, Container } from '@mui/material'

function CounterComponent()  {
    const [counter, setCounter] = useState(0);
    const displayCounter = counter > 0 || counter === 0;

    const handleIncrement = () => {
        setCounter(counter + 1);
    };

    const handleDecrement = () => {
        setCounter(counter - 1);
    };

    useEffect(() => {
        window.sessionStorage.setItem('counter', counter);
    },[counter]);
  
    return (
        <Container style={{'alignContent':'center'}}>
            <ButtonGroup size="small" aria-label="small outlined button group">
                <Button onClick={handleIncrement}>+</Button>
                {displayCounter && <Button disabled>{counter}</Button>}
                {counter != 0 ? displayCounter && <Button onClick={handleDecrement}>-</Button> : <Button disabled>-</Button>}
            </ButtonGroup>
        </Container>
    );
}

export default CounterComponent;