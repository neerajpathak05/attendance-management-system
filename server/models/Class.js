import mongoose from "mongoose";

const classSchema = new mongoose.Schema(
{
    className:{
        type:String,
        required:true
    },

    semester:{
        type:Number,
        required:true
    },

    section:{
        type:String,
        required:true
    }

},
{
    timestamps:true
}
);

export default mongoose.model("Class",classSchema);