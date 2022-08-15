var express = require('express');
const connection = require('./database');
const bodyParser = require('body-parser');
require('dotenv').config()
//const postCharge = require('./stripe')
//const router = express.Router()//
var cors = require('cors')
var app = express()
app.use(cors())

//Back end
app.listen("https://main.d19f95q0donsj2.amplifyapp.com", ()=>{
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
