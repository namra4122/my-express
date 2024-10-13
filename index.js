const express = require('express');

app = express();

PORT = 1234

app.use('/',(req,res)=>{
    res.send('APP IS RUNNING')
    console.log("app is running");
})


app.listen(PORT,()=>{
    console.log(`app running on ${PORT}`);
})