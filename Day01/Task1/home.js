
var customModule=require('../Task1/modules/crudFunctions.js');
 var fs = require("fs");
 var users=[];
fs.readFile("user.txt",(err,data)=>{
    if(err){
        console.log("something Error during read file")
    }
    else{
      
      users=JSON.parse( data)
      var options = process.argv;
      switch(options[2]){
          case 'add':{
            let obj =customModule.addNewUser(options[3],options[4],options[5]);
              users.push(obj);
             fs.writeFile('user.txt', JSON.stringify(users),function(){
                          console.log("success");
                      })
                      break;
          }
          case 'update':{
            customModule.updateUser(options[3],options[4],options[5]);
            fs.writeFile('user.txt', JSON.stringify(users),function(){
                console.log("success");
            })
              break;
          }
          case 'display':{
              console.log(users);
            break;
        }
        case 'delete':{
            let remainUsres = customModule.deleteUser(options[3],options[4]);
            fs.writeFile('user.txt', JSON.stringify(remainUsres),function(){
                console.log("success");
            })
            break;
        }
          default:
                      console.log("not implementes");
                      break;
      }
    
    }
});


