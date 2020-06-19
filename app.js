import express from "express";
import morgan from "morgan"
import helmet from "helmet"
import cookieParser from "cookie-parser"
import bodyParser from "body-parser"
import { userRouter } from "./router"

const app = express();


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

app.use("/user", userRouter)

export default app;