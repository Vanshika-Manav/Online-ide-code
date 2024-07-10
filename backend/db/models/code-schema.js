
import { SchemaTypes } from "mongoose";
import mongoose from "../connection.js";
const Schema = mongoose.Schema;
const codeSubmittedSchema = new mongoose.Schema({
  code_id: {
    type: Schema.Types.ObjectId,
    auto: true
  },
  ref_quesid: {
    type: Schema.Types.ObjectId,
    ref: 'questions',
    // required: true
  },
  problem_solution: {
    type: String,
    required: true
  },
  submittedAt: {
    type: Date,
    default: Date.now
  }
}, { collection: 'codesubmitteds' });
export const CodeModel = mongoose.model('CodeSubmits',codeSubmittedSchema);


