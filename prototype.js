//let myName ="vivek"
//let mywebiste= "vky"
//console.log(myName.truelength)


let myHeroes = ["thor" , "spiderman"]


let heroPower = {
    thor: "hammer",
    spiderman: "sling",

    getSpiderpower:function(){
        //console.log(`spidy power is ${this.spiderman}`)
    }
}

Object.prototype.vivek = function(){
    //console.log(`vivek is present in all objects`)
}

//heroPower.vivek()

/*myHeroes.vivek()

Array.prototype.vivek = function(){
    console.log(`my name is vivek kumar`)
}
Array.prototype.heyvivek = function(){
    console.log(`my name is prajapati`)
}

myHeroes.vivek()
myHeroes.heyvivek()
//heroPower.heyvivek()

//Inhritance 

 const User ={
    name: "vivek",
    email:"vk64@gmail.com,"
 }
const  Teacher = {
    makeVideo: true

}
const TeachingSupport ={
    isAvailable : false
}


const  TASupport = {
    makeAssignment:'javascript assignment',
    fullTime : true,
    __proto__:TeachingSupport
}


Teacher.__proto__ = User


Object.setPrototypeOf(TeachingSupport, Teacher)*/

let anotherUsername = "vivekkumarprajapati"

String.prototype.truelength = function(){
    console.log(`${this}`);
    console.log(`${this.name}`);
    console.log(`True length is${this.trim().length}`);
}

anotherUsername.truelength()
"vivek".truelength()
"vicky".truelength()