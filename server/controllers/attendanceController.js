import Attendance from "../models/Attendance.js";

// Add Attendance
export const markAttendance = async(req,res)=>{

    try{

        const attendance=await Attendance.create(req.body);

        res.status(201).json({
            success:true,
            message:"Attendance Marked",
            attendance
        });

    }catch(error){

        res.status(500).json({
            success:false,
            message:error.message
        });

    }

};

// Get Attendance

export const getAttendance = async (req, res) => {

    try {

        const attendance = await Attendance.find()

            .populate({
                path: "student",
                populate: {
                    path: "user"
                }
            })

            .populate({
                path: "teacher",
                populate: {
                    path: "user"
                }
            })

            .populate("subject");

        res.json({
            success: true,
            attendance
        });

    } catch (error) {

        res.status(500).json({
            success: false,
            message: error.message
        });

    }

};

// Delete Attendance
export const deleteAttendance=async(req,res)=>{

    try{

        await Attendance.findByIdAndDelete(req.params.id);

        res.json({
            success:true,
            message:"Attendance Deleted"
        });

    }catch(error){

        res.status(500).json({
            success:false,
            message:error.message
        });

    }

};