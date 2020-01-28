const express = require('express');
const app = express();

app.get('*',(req,res)=>{
    res.write("alish")
    res.end();
});

const port = process.env.port  || 8085;
app.listen(port,() =>{
   console.log(`server started at port ${port}`);

});