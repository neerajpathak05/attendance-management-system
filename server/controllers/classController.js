import Class from "../models/Class.js";

// Add Class
export const addClass = async (req,res)=>{

    try{

        const {className,semester,section}=req.body;

        const existing=await Class.findOne({
            className,
            semester,
            section
        });

        if(existing){

            return res.status(400).json({
                success:false,
                message:"Class Already Exists"
            });

        }

        const newClass=await Class.create({
            className,
            semester,
            section
        });

        res.status(201).json({
            success:true,
            newClass
        });

    }catch(error){

        res.status(500).json({
            success:false,
            message:error.message
        });

    }

};

// Get Classes
export const getClasses=async(req,res)=>{

    try{

        const classes=await Class.find();

        res.json({
            success:true,
            classes
        });

    }catch(error){

        res.status(500).json({
            success:false,
            message:error.message
        });

    }

};

// Delete Class
export const deleteClass=async(req,res)=>{

    try{

        await Class.findByIdAndDelete(req.params.id);

        res.json({
            success:true,
            message:"Class Deleted"
        });

    }catch(error){

        res.status(500).json({
            success:false,
            message:error.message
        });

    }

};