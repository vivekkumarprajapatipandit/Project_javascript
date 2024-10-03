const promiseOne = new Promise(function(resolve,reject){
    //Do an async called
    //Db calls, cryptography,network

    setTimeout(function(){
        console.log("Async task is complete");

    },1000)
})

promiseOne.then(fuction =>{
console.log("promise consumed");
});


new Promise(function(resolve , reject){
    setTimeout(function(){
        console.log("Async Task 2");
        resolve()
    }, 1000)
}).then(function(){
    console.log("async 2 roelved")
})

const promiseThree = new Promise(function(resolve, reject){
    setTimeout(function(){
    resolve({username: "vivek" , email: "vk6255863@gmail.com"})
    
    },1000)

})

promiseThree.then(function(user){
    console.log(user);

})




const promiseFourth = new Promise(function(resolve, reject){
    setTimeout(funcion => {
        let error = true;
        if(!error){
            resolve({username:"vivek", password: "234"})
        }else{
            reject("Error something wrong")
        }
    },1000)

})

promiseFourth.then((user) =>{
    console.log(user)
    return user.username

}).then(()=>{
    console.log(username);




}).catch(function(error){
    console.log(error)
}).finally(() => console.log("The promise is either resolved or rejected"))



const promiseFive = new Promise(function(resolved, reject){
    setTimeout(function(){
        let error = true;
        if(!error){
            resolve({username: "javascript", password:"1234"})
        }else{
            reject("something is wrong")
        }

    },1000)
    
})

async function consumepromiseFive(){
    try{
const response = await promiseFive
console.log(response);
} catch(error){
    console.log(error)

}


}
consumepromiseFive()


/*async function getAllUsers(){
    try{
    const response = await  fetch('https://jsonplaceholder.com/users')
    const data = response.json()
    console.log(data);
}catch(error){
    console.log("E" , error);
}

}
getAllUsers()*/

fetch('https://jsonplaceholder.com/users').then((respose) =>{
    return response.json()
}).then((data) => {
    console.log(data);
})
