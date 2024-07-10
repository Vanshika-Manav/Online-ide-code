import React from 'react';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Register from '../components/Register.jsx';
import Login from '../components/Login.jsx';
import "../css/login.css";
import "../css/userPage.css"


const UserPage = () => {
  return (
    <>
    <div id='main'>
    <h2 className='dynamic-heading'>WELCOME to our ONLINE CODE IDE </h2>
       <Container>
        <Grid container spacing={2}>
        <Grid item xs={6}>
          <Login/>
        </Grid>
        <Grid item xs={6}>
          <Register/>
        </Grid>
        </Grid>
        </Container>
        </div>
    </>
   
  )
}

export default UserPage

