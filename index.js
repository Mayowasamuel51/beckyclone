const express = require('express');
const app = express()


app.get('/', function(req,res){
    console.log('WORKING ON THE HOME PAGE ')
})


app.get('/form', function(req,res){
    console.log('WORKING ON THE FORM PAGE ')
})


app.listen(8000,()=>{
    console.log('server is running')
})