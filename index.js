import express from "express";
import morgan from "morgan"
import helmet from "helmet"
import cookieParser from "cookie-parser"
import bodyParser from "body-parser"
const app = express();

const PORT = 4000;

const handleListening = () => {
    console.log(`Listening on: http://localhost:${PORT}`)    
}

const handleHome = (req,res) => res.send("home");
const handleProfile = (req,res) => res.send("Profile")
const consoleLogReq = (req,res,next) => {
    console.log(res)
    next()
}

app.use(helmet());
app.use(morgan("dev"))
app.use(cookieParser())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))
app.use(consoleLogReq)
 
app.get("/", handleHome)

app.get("/profile", handleProfile)

app.listen(PORT, handleListening)