const express = require("express");
const noteRouter = require("./routes/noteRoutes");
const userRouter = require("./routes/userRoutes");
const mongoose = require("mongoose");
require('dotenv').config();
const cors = require("cors")

const app = express();
app.use(express.json());

app.use("/users", userRouter);
app.use("/note", noteRouter);
app.use(cors);

app.get("/",(req, res)=>{
    res.send("Notes REST API.");
})

const PORT = process.env.PORT || 5000;

mongoose.connect(process.env.MONGO_URL)
.then(()=>{
    app.listen(PORT, (err)=>{
        if(err) throw err;
        console.log("Server started on port: "+ PORT);
    })
})
.catch((err)=>{
    console.log(err);
})
