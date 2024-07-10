import React from 'react';
import '../css/login.css'
import { useRef , useState } from 'react';
import TextField from '@mui/material/TextField';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import { apiClient } from '../../../shared/services/api-client.js';

const Register = () => {
        const [message , setMessage] = useState('');
        const emailRef =  useRef();
       const nameRef =  useRef();
       const phoneRef =  useRef();
       const passwordRef =  useRef();
     const doRegister = async () => {
       const userInfo = {
        'email':emailRef.current.value,
        'name':nameRef.current.value,
        'phone':phoneRef.current.value,
        'password':passwordRef.current.value
       }
       try{
        const response = await apiClient.post(process.env.REACT_APP_REGISTER,userInfo);
        setMessage(response.data.message);
        console.log('response is ',response);
        console.log('userInfo',userInfo);
       }
       catch(err){
        setMessage('Register Fail ...');
        console.log('Error is ',err);
       }
      
    }
  return (
   
    <Container className='font-register'>
    <p>{message}</p>
    <TextField inputRef={emailRef} id="standard-basic" type="email" label="Email" variant="standard" /><br></br><br></br>
    <TextField inputRef={nameRef} id="standard-basic" label="Name" variant="standard" /><br></br><br></br>
    <TextField inputRef={phoneRef} id="standard-basic" label="Phone" variant="standard" /><br></br><br></br>
    <TextField inputRef={passwordRef} id="standard-basic"  type="password" label="Password" variant="standard" /><br></br><br></br>
    <Button onClick={doRegister} id='register' variant="contained">Register</Button>
    </Container>
  )
}

export default Register
