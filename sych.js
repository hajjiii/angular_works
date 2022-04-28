function one(){
    console.log("inside one");
}
function two(){
    one()
}
function three() {
    two()
}

three()



setTimeout(()=>{
    console.log("hot water");
},0)

console.log("served starter");

setTimeout(()=>{
    console.log("served main course");
},4000)

setTimeout(()=>{
    console.log("served dessert");
},1000)