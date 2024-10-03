const User = {
    _email:'vk@123',
    _password: "abc",

get email(){
return this._email.toUppercase()
},

set email(value){
    return this._email= value

}



}

const koffee = Object.create(User)
console.log(koffee.email)