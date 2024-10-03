function SetUsername(username){
    //complex db calls
    this.username = username

}

function CreateUser(username,email,password){
    SetUsername.call(this, username)

    this.email = email
    this.password= password
}
const koffee = new CreateUser("koffee", "koffee@gmail.com,", "123")
console.log(koffee)