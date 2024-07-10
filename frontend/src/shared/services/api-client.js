//network calls 9HTTP/HTTPS calls)
import axios from 'axios';
import 'dotenv/config';
// import { MongoClient } from 'mongodb';
//HTTP call (HTTP methods)
//GET - read
//POST - write(insert)
//PUT - update
//Delete - remove
//CRUD Operations
export const apiClient ={
    async get(REACT_APP_MONGO_URL,data){



    },
    async post(URL , data){
        try{
            const response = await  axios.post(URL , data);
            return response;
        }
        catch(err){
            throw err;
        }
    

    },
    Put(){

    },
    remove(){

    },
}