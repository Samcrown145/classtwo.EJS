const express = require('express');
const app = express()
require('dotenv').config() 
const port = process.env.PORT
app.use(express.json())
// app.use is a middle ware to inform express that we are expecting back a json handleit for us 
// .env = environment variables 
app.set('view engine', 'ejs');

const name = 'samcrown'

app.get('/', (req,res) => {
    res.render('about' , {name:name})
})

app.get('/signin', (req,res) => {
    res.render('Signin')
})

app.get('/signup', (req,res) => {
    res.render('Signup')
})

app.get('/index', (req,res)=> {
    res.sendFile(__dirname + '/index.html')
})  


app.post('/submit', (req,res) =>{
    const { firstName, lastName, email, password } = req.body  
    const payload = { firstName, lastName, email, password}
    console.log(payload)
    res.status(201).json({status: true, message: payload})
})

app.listen(port, (req,res) => {
  console.log(`Example app listening on port ${port}`)
})

// to send ejs file we use res.render() method and to send html file we use res.sendFile() method.


// Destructing 
const obj = {
    named : 'Samcrown',
    aged: 14,
    statused: true,
}

const {aged,named,statused} = obj 
console.log(aged,named,statused)