import { SchemaTypes } from "mongoose";
import mongoose from "../connection.js";

const Schema = mongoose.Schema;
const quesSchema = new Schema({
    'id':{type:SchemaTypes.Number, required:true , unique:true},
    'problem_statement':{type:SchemaTypes.String , required:true},
    'problem_description':{type:SchemaTypes.String, required:true},
    'sample_code':{type:SchemaTypes.String},
    'level':{type:SchemaTypes.String}
});
export const QuesModel = mongoose.model('questions',quesSchema);

