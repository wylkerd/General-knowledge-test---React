import React, { useState } from 'react';
import { Button, Container, Typography } from '@mui/material'
import { Link } from'react-router-dom';
import HeaderComponent from '../Components/HeaderComponent';

export default function InitialPage() {
    const counter = useState(window.location.pathname.split('/')[2]);

    return (
        <>
            <Container>
                <HeaderComponent/>
                <Typography variant="h6" textAlign="center">Deseja inicar o teste?</Typography>
                <Container style={{'alignContent':'center', 'textAlign':'center', 'marginTop': '1.5rem'}}>
                    <Link to={`/test/${String(counter[0])}`} style={{ textDecoration: 'none' }}><Button variant="contained" color="success" style={{'marginRight':"0.5rem"}}>Start</Button></Link>
                    <Link to="/" style={{ textDecoration: 'none' }}><Button variant="outlined" color="warning">Cancel</Button></Link>
                </Container>
            </Container>
        </>
    );
}