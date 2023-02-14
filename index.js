const express = require('express');

const app = express();

// fix for cors
const cors=require('cors');
app.use(cors({origin:true}));
require('dotenv').config();
app.use(express.json());
app.use(express.static(__dirname + '/public'))

const { pyFunc } = require('./pyfunc')

app.listen(process.env.PORT)
console.log('listening to port ',process.env.PORT)


app.use('/see',pyFunc)
app.use('/',(req,res)=>{
    return res.send('Go to : /see')
})