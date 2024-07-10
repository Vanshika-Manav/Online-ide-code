import logo from './logo.svg';
import './App.css';
import { QuestionPage } from './modules/ide/pages/QuestionPage.jsx';
import UserPage from './modules/user/pages/UserPage.jsx';
import { Typography } from '@mui/material';
import { BrowserRouter as Router, Route, Switch, Navigate, Routes } from 'react-router-dom';
import Login from './modules/user/components/Login.jsx';
import React from 'react';
import { useState } from 'react'; 
function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(true);
  return (
    <Router>
    <Routes>
        <Route exact path="/" element={isAuthenticated ? <Navigate to="/dashboard" /> : <Login/>}/>
        <Route path="/dashboard" element={isAuthenticated ? <UserPage /> : <Navigate to="/" />}/>
        <Route path="/home" element={isAuthenticated ? <QuestionPage /> : <Navigate to="/" />}/>
    </Routes>
</Router>
  );
}

export default App;
