import mongoose from "mongoose";

const attendanceSchema = new mongoose.Schema(
{
    student:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Student",
        required:true
    },

    subject:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Subject",
        required:true
    },

    teacher:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Teacher",
        required:true
    },

    date:{
        type:Date,
        default:Date.now
    },

    status:{
        type:String,
        enum:["Present","Absent"],
        default:"Present"
    }

},
{
    timestamps:true
}
);

export default mongoose.model("Attendance",attendanceSchema);