// map
var array=[1,3,4,12,10,15,11]
var squares=array.map(n=>n**2)
console.log(squares);

var cubes=array.map(n=>n**3)
console.log(cubes);

var names=["django","express","spring","wordpress"]
// "django".toUpperCase()
var uppercase=names.map(name=>name.toUpperCase())
console.log(uppercase);

// filter
var evens=array.filter(n=>n%2==0)
console.log(evens);

var odds=array.filter(n=>n%2!=0)
console.log(odds); 
