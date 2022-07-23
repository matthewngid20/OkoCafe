var express = require('express');
const connection = require('./config/database');
var cors = require('cors')
var app = express()
app.use(cors())

app.listen(3307, ()=>{
    console.log("app listening to 3307");
    connection.connect((error) => {
        if(error){
            console.log(error);
        }else{
            console.log("DB connection succeeded");
        }
    })
})

app.get("/story", (req,res) => {
    connection.query("SELECT * FROM externalproject.stories", (error,result) =>{
        if(error){
            console.log(error);
        }else{
            res.send(result)
        }        
    })
})

app.get("/products", (req,res) => {
    connection.query("SELECT * FROM externalproject.coffeeproduct", (error,result) =>{
        if(error){
            console.log(error);
        }else{
            res.send(result)
        }        
    })
})
