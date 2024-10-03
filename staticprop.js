class User{
    constructor(username){
        this.username = username

    }

    logMe(){
        console.log(`Username: ${this.username}`);
    }

    createId(){
        return `123`
    }
}

const vivek = new  User("vivek")
console.log(vivek.createId())


class Teacher extends User{
    constructor(username, email){
        super(username)
        this.email = email
    }
}
const iphone = new Teacher("iphone", "iphone@.com");
console.log(iphone.createId());