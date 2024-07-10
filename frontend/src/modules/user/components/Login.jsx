import React from 'react';
import '../css/login.css';
import axios from 'axios';
import { useRef , useState } from 'react';
import TextField from '@mui/material/TextField';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import { apiClient } from '../../../shared/services/api-client';
import { QuestionPage } from '../../ide/pages/QuestionPage.jsx';
import { BrowserRouter as Router, Route, Switch, Navigate } from 'react-router-dom';


const Login = () => {
    const [ message , setMessage ] = useState('');
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    const emailRef = useRef();
    const passwordRef = useRef();
    const doLogin = async () => {
       const userInfo = {
        'email':emailRef.current.value,
        'password':passwordRef.current.value
       }
       try{
        const response = await apiClient.post(process.env.REACT_APP_LOGIN,userInfo);
        setMessage(response.data.message);
        setIsAuthenticated(true);
        try{
          const response = await axios.post('http://localhost:1234/uploadquestions');
          console.log(response);
        }
        catch(error){
          console.log(error);
          console.log("Questions not inserted to database...");
        }

       }
       catch(err){
        setMessage('Login failed');
        console.log('error is ', err);
       }
      
    }
  return (
    <div>
    {isAuthenticated ? (<Navigate to ='/home'/>) :(<div><Container className='font-login'>
    <p>{message}</p>
    <TextField inputRef={emailRef} id="standard-basic" label="Email" variant="standard" /><br></br><br></br>
    <TextField inputRef={passwordRef} id="standard-basic"  type="password" label="Password" variant="standard" /><br></br>
    <Button onClick={doLogin} id='login' variant="contained">Login</Button>
    </Container></div>)
    }
    </div>
)
}

export default Login
