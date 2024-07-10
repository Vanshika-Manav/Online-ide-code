// import logo from './logo.svg';
import './App.css';
import { QuestionPage } from './modules/ide/pages/QuestionPage.jsx';
import UserPage from './modules/user/pages/UserPage.jsx';
import { BrowserRouter as Router, Route, Navigate, Routes } from 'react-router-dom';
import Login from './modules/user/components/Login.jsx';
import React from 'react';
import { useState } from 'react'; 
import QuestionList from './modules/ide/pages/QuestionList.js'
function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(true);
  // setIsAuthenticated(true);
  return (
    <Router>
    <Routes>
        <Route exact path="/" element={isAuthenticated ? <Navigate to="/dashboard" /> : <Login/>}/>
        <Route path="/dashboard" element={isAuthenticated ? <UserPage /> : <Navigate to="/" />}/>
        <Route path="/home" element={isAuthenticated ? <QuestionList /> : <Navigate to="/" />}/>
        {/* <Route path="/question" element={isAuthenticated ? <QuestionPage /> : <Navigate to="/" />}/> */}
        <Route path="/question/:id" element={<QuestionPage/>} />

    </Routes>
</Router>
  );
}

export default App;
