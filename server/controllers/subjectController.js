import Subject from "../models/Subject.js";

// Add Subject
export const addSubject = async(req,res)=>{

    try{

        const {subjectName,subjectCode,semester}=req.body;

        const subject=await Subject.create({
            subjectName,
            subjectCode,
            semester
        });

        res.status(201).json({
            success:true,
            subject
        });

    }catch(error){

        res.status(500).json({
            success:false,
            message:error.message
        });

    }

};

// Get Subjects
export const getSubjects=async(req,res)=>{

    try{

        const subjects=await Subject.find();

        res.json({
            success:true,
            subjects
        });

    }catch(error){

        res.status(500).json({
            success:false,
            message:error.message
        });

    }

};

// Delete Subject
export const deleteSubject=async(req,res)=>{

    try{

        await Subject.findByIdAndDelete(req.params.id);

        res.json({
            success:true,
            message:"Subject Deleted"
        });

    }catch(error){

        res.status(500).json({
            success:false,
            message:error.message
        });

    }

};