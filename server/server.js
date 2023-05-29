const express = require('express');
// const cors = require('cors');

const app = express();

const port = 5000;

app.get('/',(req,res)=>{
    res.send('sucessfully created server');
});

app.get('/i',(req,res)=>{
    let obj=[
        {
            endPoint:'/i/google',
            url: 'https://www.google.com'
         },
         {
            endPoint:'/i/github',
            url: 'https://www.github.com'
         }
    ];
    res.send(obj);
    
})

app.get('/i/google',(req,res)=>{
    res.send('https://www.google.com');
})


app.get('/i/github',(req,res)=>{
    res.send('https://www.github.com');
})

app.get('/r/google',(req,res)=>{
    res.redirect('https://www.google.com');
})

app.get('/r/github',(req,res)=>{
    res.send('https://www.github.com');
})

app.listen(port,()=>{
    console.log(`Server running at http://localhost:${port}`);
})