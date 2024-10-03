class User{

    constructor(email,password){
        this.email = email
        this.password = password

    }
get password(){
        return this._password.toUpperCase()

    }
set password(value){
    this._password = value
}
get email(){
return this._email.toUpperCase()
}
set email(value){
 this._email = value
}


    }


const vivek = new User("vk32@gmail.com","123")

console.log(vivek.email);
console.log(vivek.password);