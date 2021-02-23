var express = require("express");
var app = express();
var path = require("path");
var queryString = require('query-string');
var fs = require("fs");
var customModule = require("./modules/custome_module");
const { join } = require("path");
var users = [];

fs.readFile("users.txt",(error,data)=>{
    if(error){
        
        console.log("something Error during read file")
    }else{
       
        users = JSON.parse(data) ;
        //Add new User
        app.get('/postUser',(request,response)=>{
            let obj = customModule.postUser(4,"sally",10,"01015069799");
            users.push(obj);
            fs.writeFile('users.txt', JSON.stringify(users),function(){});
           response.send("New User was Posted");
        });
        //Update User
        app.get('/getUser',(request,response)=>{
           let url = request.url;
           let _idUser = url.split("?")[1].split("=")[1];
           let x = customModule.getUser(_idUser,users);
           response.send("ID : " + x["id"] +"<br>"+" Name : "+x["name"]+"<br>"+" Age : "+x["age"]+"<br>"+" PhoneNumber : "+x["phoneNumber"]);
        });
        //Change background Color
        app.get('/background',(request,response)=>{
            response.sendFile(path.join(__dirname,"home.html"));
          
        });
        //Display Image
        app.get('/imageUser',(request,response)=>{
            response.sendFile(path.join(__dirname,"profilePic.png"));
          
        });
    }
});



app.use(express.static("./public"));

app.listen(5000);