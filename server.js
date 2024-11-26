const express = require("express")
const mongoose = require("mongoose")
const dotenv = require("dotenv");
dotenv.config();
const cors = require("cors");
const app = express();
const path = require("path");


if(process.env.NODE_ENV === "local"){
  app.use(cors({
    origin: 'http://localhost:3000',
    credentials: true
  }))
} else {
  app.use(cors({
    credentials: true
  }))
}


if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, './frontend/dist/')))
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, './', 'frontend', 'dist', 'index.html'))
  })
}

const dbConnect = async()=>{
  try {
    if(process.env.NODE_ENV === "local"){
      await mongoose.connect(process.env.LOCAL_DB_URL);
      console.log("Local database is Connected..."); 
    } else {
      await mongoose.connect(process.env.MONGODB_URL);
      console.log("Production database is Connected..."); 
    }
  } catch (error) {
    console.log("Database connection failed", error);
    
  }

}
dbConnect();
const PORT = process.env.PORT;
app.get("/", (req, res) => {
  res.send("<h1>Hello World!</h1>");
});
app.listen(PORT, ()=> {
  console.log(`Port is Running on ${PORT}!`);
  
})