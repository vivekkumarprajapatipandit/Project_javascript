function multipleBy5(num){
    this.num = num
return  num*5

}

multipleBy5.power = 2
console.log(multipleBy5(5));
console.log(multipleBy5.power);
connsole.log(multipleBy5.prototype);



function createUser(username,score){
    this.username = username
    this.score = score

}
createUser.prototype.increment = function(){
    this.score++
}
createUser.prototype.printMe = function(){
    console.log((`price  is ${this.score}`));
}
const coffee = new createUser("coffee", 25)
const koffee = new createUser("koffee", 32)

coffee.printMe()