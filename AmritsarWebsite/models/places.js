import mongoose from "mongoose";

const placesSchema = new mongoose.Schema(
    {
        name:{
            type:String,
            required:true,
        },
        info:{
            type:String,
            required:true,
        },
        rating:{
            type:Number,
            required:true,
        },
        link:{
            type:String,
            required:true,
        }
    }
);

const places = mongoose.model("places",placesSchema);

module.exports =places;