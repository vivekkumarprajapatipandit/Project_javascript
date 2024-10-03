/*/class User {
    //constructor(username, email,password){
      //  this.username = username
       // this.email = email
        //this.password = password
    //}


    encryptPassword(){
        return `${this.password}abc`
    }

    ChangeUsername(){
        return `${this.username.toUpperCase()}`
    }
//}*/
const koffee = new User("koffee", "vk@gmail.com", "123")
console.log(koffee.ChangeUsername());
console.log(koffee.encryptPassword());


//behing the secene

function User(username, email, password){
    this.username = username;
    this.email = email;
    this.password = password;
}
User.prototype.encryptPassword = function(){
    return `${this.password}abc`
}
console.log(User)