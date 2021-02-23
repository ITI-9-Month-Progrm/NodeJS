function getUser(_id ,users){
      let len = users.length;
      for(let i=0;i<len;i++){
          if(users[i]["id"] == _id){
              return users[i];
              
          }
      }
}
function postUser(_id, _name, _age, _phoneNumber){
    let obj = {
        "id" : _id,
        "name" : _name,
        "age" : _age,
        "phoneNumber" : _phoneNumber
    }
    return obj;
}

module.exports = {
    getUser  : getUser,
    postUser : postUser,
}


