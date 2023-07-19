const express = require('express');//getting express
const serverConfig = require('./configs/server.config')
const app = express();//bring express in use (where app variable is a central charator and act like security guard)
app.listen(serverConfig.PORT,()=>{
    console.log('server is started on the port number :: '+ serverConfig.PORT);
}); //starting the server at port number 3333 and invoke a anonymous arrow function to print 'server is strted' 