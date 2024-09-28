import mongoose from "mongoose";

export const connection = async()=>{
    // console.log(url);
    
    return mongoose.connect("mongodb+srv://sweetysharma:1234@Cluster0.u0n8s.mongodb.net/exploreamritsar?retryWrites=true&w=majority&appName=Cluster0");
}


