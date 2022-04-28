// for
// while
function min(n1,n2){
    return n1<n2?n1:n2
}
console.log(min(10,20));



console.log(min(15,20));
function min(n1,n2){
    return n1<n2?n1:n2
}


console.log(num);
var num=10



let minn=(n1,n2)=>n1<n2?n1:n2
console.log(minn(2,20));





var  names=["ram","ravi","akhil","aravind"]
console.log(names);

for(let name in names){
    console.log(name);

}

for(let name of names){
    console.log(name);

}

console.log(names.length);

for(let i=0;i<names.length;i++){
    console.log(names[i]);
}
// push
names.push("tom")
console.log(names);

// includes
console.log(names.includes("gopan"))
console.log(names.includes("tom"))


// vowels
var text="hello"
var vowels=["a","e","i","o","u"]
for(let char of text){
    if(vowels.includes(char)){
        console.log(char);
    }
}
