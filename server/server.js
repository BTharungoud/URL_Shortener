const express = require('express');
// const cors = require('cors');

const app = express();

const port = 5000;

app.get('/',(req,res)=>{
    res.send('sucessfully created server');
});

app.listen(port,()=>{
    console.log(`Server running at http://localhost:${port}`);
})