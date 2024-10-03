class User{
    constructor(username){
        this.username = username;
    }


    logMe(){
        console.log(`USERNAME IS ${this.username}`);

    }
}
class Teacher extends User{
    constructor(username, email, password){
        super(username)
        this.email = email
        this.password  = password
    }


    addCourse(){
        console.log(`A new course was added was added by ${this.username}`);
    }
}

const koffee =  new Teacher("koffee", "kofffeee@gmail.com", "23456")


koffee.addCourse();
const blacKoffee =  new User("blackoffee");

blacKoffee.logMe();
console.log(koffee instanceof Teacher);