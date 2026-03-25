import mongoose from "mongoose";
import User from "../models/user.model.js";
import bcrypt from "bcryptjs";
export const signUp = async (req,res,next) => {
    const session = await mongoose.startSession();
    session.startTransaction(); //elkezd kumunikálni az adatbauisal!!!

    try {
        //Creat new user
        const {name,email,password} = req.body;
        // chech if the user already exits=>
        const existingUser = await User.findOne({email});
        if(existingUser) {
            const error = new Error("User already exits");
            error.status = 409;
            throw error;
        }
        //hash password=>
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password,salt);
        const newUser = await user.create([{name,email,password:hashedPassword}],{session});
        await session.commitTransaction();

    } catch (error) { //error handeling=>
        await session.abortTransaction();
        session.endSession();
    }
};
export const signIn = async (req,res,next) => {};
export const signOut = async (req,res,next) => {};