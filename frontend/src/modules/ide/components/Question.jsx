import React from 'react';
import { apiClient } from '../../../shared/services/api-client.js';
import Button from '@mui/material/Button';
import { fetchDataFromMongoDB } from '../services/fetchdata.js';



const Question = () => {
    // const getQues = async  ()=>{
    //     try{
    //         const response = await apiClient.get(process.env.REACT_APP_CODE_URL,JSON.stringify());
    //         console.log('Response is',response);
    //     }
    //     catch(err){
    //         console.log('Error during code submission',err);
    //     }   
    //}
  return (
    <div>
<Button onClick={fetchDataFromMongoDB()} variant="standard">List of problem statements </Button>
    </div>
  )
}

export default Question
