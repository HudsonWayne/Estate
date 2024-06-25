import bcrypt from "bcrypt";
import prisma from "../lib/prisma.js";



export const register = async (req, res)=>{
    const {username, email, password} = req.body;

    const hashedPassword = await bcrypt.hash(password, 10)


    console.log(hashedPassword)

//Create a new user and save it to DB
    const newUser = await prisma
    // ({username, email, password: hashedPassword});

}

export const login = (req, res)=>{
    
}

export const logout = (req, res)=>{
    
}