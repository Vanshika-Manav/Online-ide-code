const URL = 'mongodb+srv://admin:admin123@mycluster.9l5zpro.mongodb.net/userdb?retryWrites=true&w=majority&appName=MyCluster'
import mongoose from "mongoose";
const promise = mongoose.connect(URL,{ useNewUrlParser: true, useUnifiedTopology: true });
promise.then(data=>{
    console.log('Database connected...');
}).catch(err=>{
    console.log('Error occured DB Connection',err);
})
export default mongoose;