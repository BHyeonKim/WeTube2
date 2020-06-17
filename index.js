import express from "express";
const app = express();

const PORT = 4000;

const handleListening = () => {
    console.log(`Listening on: http://localhost:${PORT}`)    
}

function handleHome(req, res){
    console.log(req)
    res.send("Hi from Home")
}

function handleProfile(req,res){
    res.send("You are on my profile")
}

app.get("/", handleHome)

app.get("/profile", handleProfile)

app.listen(PORT, handleListening)