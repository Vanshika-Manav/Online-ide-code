import { QuesModel } from "../db/models/ques-schema.js";
import { sampleData } from "../db/loadData/quesData.js";
import { CodeModel } from "../db/models/code-schema.js";
export const ideController = {
    async uploadquestions(request, response){
        try{
            await QuesModel.create(sampleData);
            //console.log(response.body);
            response.json(QuesModel);
            console.log('Data Successfully inserted');
        }
        catch(error){
            console.log('Data alraedy inserted');
        }
    },
    async questions(request,response){
        try{
        const questions = await QuesModel.find({});
        response.json(questions);
        console.log('problems fetched Successfully');
        }
        catch(err){
            console.log("problems can't fetched");
        }
    },
    async question(request,response){
       
        try {
            const id = request.params.id;
            console.log(`Backend received ID: ${id}`); // Log the ID received
        
            // if (!mongoose.Types.ObjectId.isValid(id)) {
            //   return response.status(400).json({ message: 'Invalid ID format' });
            // }
        
            const question = await QuesModel.findById(id);
            if (!question) {
              return response.status(404).json({ message: 'Question not found' });
            }
            response.json(question);
          } catch (err) {
            console.error(err.message);
            response.status(500).json({ message: err.message });
          }
    },
    async submit(request, response){
            try {
                const { ref_quesid, problem_solution } = request.body;
                const codeSubmitted = new CodeModel({
                    ref_quesid,
                    problem_solution
                  });
                  await codeSubmitted.save();
                  response.status(201).json(codeSubmitted);
                } catch (error) {
                  console.error('Error during code submission:', error);
                  response.status(500).json({ error: 'Server error' });
                }              
    },
}