import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Button } from '@mui/material';
import { BrowserRouter as  Navigate } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import '../../user/css/userPage.css';



function App() {
  const [questions, setQuestions] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {

    const fetchQuestions = async () => {
      try {
        const response = await axios.get('http://localhost:1234/questions');
        console.log(response); // Check the response structure
        if (Array.isArray(response.data)) {
          setQuestions(response.data);
        } else {
          console.error('API response is not in the expected format:', response.data);
        }
      } catch (error) {
        console.error('Error fetching data', error);
      }
    };

    fetchQuestions();
  }, []);

  return (
    <div className="App">
      <h3 className='dynamic-heading2'>QUESTIONS LIST</h3>
      <ol>
        {questions.map(question => (
          <li key={question._id}>
          <h2><Button onClick={() => navigate(`/question/${question._id}`)} id='ques-button'>
                <h4>{question.problem_statement}</h4>
              </Button></h2>
          </li>
        ))}
      </ol>
    </div>
  );
}

export default App;
