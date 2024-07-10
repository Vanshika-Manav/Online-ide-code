import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

function QuestionDetail() {
  const { id } = useParams();
  const [question, setQuestion] = useState(null);

  useEffect(() => {
    const fetchQuestion = async () => {
      try {
        console.log(`Fetching question with  FRONTEND ID: ${id}`);
        const response = await axios.get(`http://localhost:1234/questions/${id}`);
        console.log('question getted');
        console.log(`Question details:`, response.data);
        setQuestion(response.data);
      } catch (error) {
        console.error('Error fetching question details', error);
      }
    };

    fetchQuestion();
  }, [id]);

  if (!question) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h3>{question.problem_statement}</h3>
      {question.problem_description}
      <h4>Level</h4>{question.level}

      {/* <pre>{question.sample_code}</pre> */}
    </div>
  );
}

export default QuestionDetail;
