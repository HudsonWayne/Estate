import express from "express";

const router = express.Router()

router.post("/register", (req,res)=>{
    console.log("router works!")
})

router.get("/login", (req,res)=>{
    console.post("router works!")
})

router.get("/logout", (req,res)=>{
    console.post("router works!")
})






export default router;