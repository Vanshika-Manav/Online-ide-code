import { sampleData } from "./quesData.js";
import { QuesModel } from "../models/ques-schema.js";


export const questionList = async () => {
    await QuesModel.insertMany(sampleData);
    console.log('Data Successfully inserted');

}
//questionList();








