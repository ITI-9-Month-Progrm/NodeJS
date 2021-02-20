 
 function addNewUser(_name,_age,_phoneNumber){
    let obj ={
        name:_name,
        age:_age,
        phoneNumber:_phoneNumber
    };
    return obj;
}
 function updateUser(_name,_age,_phoneNumber){
    let len = users.length;
    let obj;
    for(let i =0 ;i<len;i++){
        if(users[i]["name"] == _name){
            obj = {
                name:_name,
                age:_age,
                phoneNumber:_phoneNumber
            }
            users[i] = obj; break;
        }
    }
}
 function deleteUser(_name){
    let len = users.length;
    let remainUsers = [];
    for(let i =0 ;i<len;i++){
        if(users[i]["name"] != _name){
            remainUsers.push(users[i]);
        }
    }
return remainUsers;
}
module.exports = {
    addNewUser : addNewUser,
    updateUser : updateUser,
    deleteUser : deleteUser
}


