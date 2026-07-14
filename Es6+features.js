


// let n = 10;
// {
//     let n = 5;
//     console.log(n);

// }
// console.log(n);

// const obj = {
//     name : "Jaber",
//     age : 41
// }
// const {name, age} = obj;

// console.log(name  + ":" + age);


// const fruits = ["apple", "orange", "benana"];
// const [a,b,c] = fruits;
// console.log(a,b,c);

// const colors = ["red", "black", "white", "yellow"];

// colors.map((color)=>(
//     console.log(color)

// ))
// const map = new Map();
// map.set("a", 1);
// map.set("b", 2);
// console.log(map.get("a"));



// const names = new Map();
// names.set("Jaber", 1);
// names.set(3, "Mohadeseh");

// console.log(names.get(3));


// class Animal {
//     speak() {
//         console.log("Hello humans");
//     }
// }

// const dog = new Animal();
// dog.speak();

// const fetch = () =>{
//     return new Promise((res, rej) =>{
//         setTimeout(()=> res("Hello Jaber"), 2000);
//     });
// }
// fetch().then(data => console.log(data));


// const hello = (name = "Guest") =>{
//     return `Hello ${name}!`;
// }
// console.log(hello("Jaber"));


// const names = "jaber";
// const hast = names.includes("a", 2);
// console.log(hast);


const numbers = [10,15,2,8,56,80,1,36,5,66,7];
// const filter = numbers.filter(n => {
//     const nn = n < 20
//     return nn
// })

// const such = numbers.includes(10)
// console.log(such && filter);

const reducer = numbers.reduce((x,y)=> {
    console.log(x);
    console.log(y);
    
    
    return x * y
},1)

console.log(reducer);
