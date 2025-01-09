import {UserModel} from "../db/models/user-schema.js";
import { hashing } from "../utils/encrypt.js";
export const userController = {
    async login(request , response){
        const userInfo = request.body;
        try{
            const doc = await UserModel.findOne({'email':userInfo.email}).exec();
            console.log('doc is',doc);
        if(doc && doc._id){
            const plainPassword = userInfo.password;
            const dbPassword = doc.password ;
           if(hashing.matchPassword(plainPassword , dbPassword)){
                response.json({message:'Welcome '+doc.name});
           }
           else{
            response.json({message:'Invalid userid or password'});
           }
        }
        else{
            response.json({message:'Invalid userid or password'});
        }
        }
        catch(err){
            console.log('Login Error',err);
            response.json({message:'Problem in Login'});
        }
    },
    
    async register(request , response){
        const userInfo = request.body;
        userInfo.password = hashing.passwordHash (userInfo.password);
        const doc =  await UserModel.create(userInfo);
        try{
        if(doc && doc._id){
        response.json({message:'Register Successfully'});
        }
        else{
        response.json({message:'Problem in register'});
        }
    }
    catch(err){
        console.log('Register Error',err);
        response.json({message:'Problem in register'});

    }

    },
    profile(request , response){
        const userName = request.params.username;
        console.log('All Params',userName);
        response.json({message:userName + 'Profile'});

    },
    changePassword(request , response){
        response.json({message:'Change Password'});

    },
    removeAccount(request , response){
        response.json({message:'account deleted'});
    }

}