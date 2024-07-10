//Entry file
//const express = require('express');
//this above syntax is of common js.
//to use import export feature of ecma6 set type as module in package.json
//by default type is commonjs
import express from "express";
import { userRoutes } from "./routes/user-routes.js";
import { ideRoutes } from "./routes/ide-routes.js";
import cors from 'cors';
const app = express();
app.use(cors());//cors middleware
app.use(express.json())//json data fetch (next)
app.use('/',userRoutes);
//app.use('/',ideRoutes);
//last middleware 404 - for handling invalid requests
app.use((request , response , next)=>{
    response.json({message:'Invalid URL'});
})
const server = app.listen(1234,(err)=>{
    if(err){
        console.log('server crash',err);
    }
    else{
        console.log('server up and running',server.address().port);
    }
});