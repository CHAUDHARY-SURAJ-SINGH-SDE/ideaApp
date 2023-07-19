const express = require('express');//getting express
const app = express();//bring express in use (where app variable is a central charator and act like security guard)
app.listen(3333,()=>{
    console.log("server is started");
}); //starting the server at port number 3333 and invoke a anonymous arrow function to print 'server is strted' 