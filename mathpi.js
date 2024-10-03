const descripter = Object.getOwnPropertyDescriptor(Math, "PI")

// console.log(descripter);

// console.log(Math.PI);
// Math.PI = 5
// console.log(Math.PI);

const koffee = {
    name: 'ginger koffee',
    price: 250,
    isAvailable: true,

    orderChai: function(){
        console.log("koffee nhi bni");
    }
}

console.log(Object.getOwnPropertyDescriptor(koffee, "name"));

Object.defineProperty(koffee, 'name', {
    //writable: false,
    enumerable: true,

})

console.log(Object.getOwnPropertyDescriptor(koffee, "name"));

for (let [key, value] of Object.entries(koffee)) {
    if (typeof value !== 'function') {

        console.log(`${key} : ${value}`);
    }
}