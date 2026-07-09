import mongoose from "mongoose";

const subjectSchema = new mongoose.Schema(
{
    subjectName:{
        type:String,
        required:true
    },

    subjectCode:{
        type:String,
        required:true,
        unique:true
    },

    semester:{
        type:Number,
        required:true
    }
},
{
    timestamps:true
}
);

export default mongoose.model("Subject",subjectSchema);