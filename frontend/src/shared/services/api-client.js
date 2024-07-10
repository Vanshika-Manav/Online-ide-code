//network calls 9HTTP/HTTPS calls)
import axios from 'axios';
//HTTP call (HTTP methods)
//GET - read
//POST - write(insert)
//PUT - update
//Delete - remove
//CRUD Operations
export const apiClient ={
    async get(URL,data){
        try{
            const response = await  axios.get(URL , data);
            return response;
        }
        catch(err){
            throw err;
        }

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