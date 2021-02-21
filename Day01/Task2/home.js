var http = require("http");
var fs = require("fs");
var port = 5000;
var hostName = '127.0.0.1';
var customServer  = http.createServer(function(request,response){
    console.log("request recieved");
           let urlLastPArt = request.url;
           switch(urlLastPArt){
               case '/users':{
                    response.statusCode=200;
                    response.setHeader('Content-type','text/plane');
                    let users = [];
                    fs.readFile("../Task1/user.txt",(err,data)=>{
                        if(err){
                            console.log("something Error during read file")
                        }
                        else{
                          
                          users=JSON.parse( data)
                         
                         var res = "";
                         for(let i=0 ; i<users.length;i++){
                             res+=JSON.stringify(users[i]);
                           
                         }
                          response.write(res);
                          response.end();
                        
                        }
                    });
                   break;
               }
               case '/background':{
                response.statusCode=200;
                response.setHeader('Content-type','text/html');
                
                fs.readFile("home.html",(err,data)=>{
                    if(err){
                        console.log("something Error during read file")
                    }
                    else{
                      

                      //console.log(data.toString());
                      response.write(data);
                     
                      response.end();
                    
                    }
                });
                   break;
               }
               case '/image':
        fs.readFile('../Task2/images/profilePic.png',function(err,image){
            response.statusCode=200;
            response.setHeader('Content-type','image/png');
            response.end(image);
        })
        break;
        case '/style':
            fs.readFile('background.css',function(err,data){
                response.statusCode=200;
                response.setHeader('Content-type','text/css');
                response.end(data);
            })
            break;
        default:
            response.statusCode=404;
            response.setHeader('Content-type','text/plain');
            response.end('not found');
            break;
           }
   
            
           


}).listen(port,hostName);