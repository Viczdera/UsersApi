const express = require('express');
const bodyParser= require('body-parser');
const app= express();

const _= require('lodash');
const { User } = require('./models/usersdet');

//specifying port
const port= process.env.PORT || 5000;

//to enable urlencoded
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());

//GET 
app.get('/api/users',(req,res)=>{
    User.find().then((user)=>{
        res.status(200).send(user);
    }).catch((e)=>{
        res.status(500).send(e);
    });
    
});

//GET by id
/*app.get('/api/users',(req,res)=>{
    let id = req.params.id;
    User.findById(id).then((user)=>{
        res.status(200).send(user);
    }).catch((e)=>{
        res.status(500).send(e);
    });
    
});*/

//POST 
app.post('/api/users',(req,res)=>{
    const body =_.pick(req.body,['name','github','email','mobile','twitter']);
    let user =new User(body);
    user.save(body).then((user)=>{
        res.status(200).send(user);
    });
})

//using Mongo CLient to connect to database
app.listen(port,() =>{
        
    console.log('Live with Flutterwave Project on port ' + port);
});

