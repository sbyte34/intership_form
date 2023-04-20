const express = require("express");
const app = express();
const path = require("path");
// const cors = require('cors');
const port = process.env.PORT|| 8010;
// public static path
const staticpath=path.join(__dirname,"./public");
app.use(express.static(staticpath));
// app.use(
//     cors({origin: ['http://localhost:8010', 'https://script.google.com/macros/s/AKfycbzn6mDP9mFj-_e6d5OQz7wKm47GK48wjTgJUm89HH_QbRKsCEEyVPWSp2SJTqcE3Eubew/exec']})
//   );

app.get("/",(req,res)=>{
    res.send("")
    res.sendFile(path.join(staticpath+'/index.html'))
})
app.get("/about",(req,res)=>{
    res.sendFile(path.join(staticpath+'/about.html'))
})




















app.listen(port,(req,res)=>{
    console.log(`connect on port, ${port}`);
})