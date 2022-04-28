var employees = [
    [1000, "ram", "developer", "kochi", 25000, 5],
    [1001, "ravi", "developer", "kochi", 36000, 2],
    [1002, "arjun", "qa", "tvm", 34000, 1],
    [1003, "tom", "qa", "tvm", 45000, 2],
    [1004, "jim", "ba", "banglore", 55000, 3],
    [1005, "sam", "sales", "banglore", 65000, 5],
    [1006, "tinu", "ba", "banglore", 18000, 1],
    [1007, "fred", "sales", "mumbai", 22000, 2],
    [1008, "ravi", "sales", "mumbai", 65000, 5],

]


// PRINT EMPLOYEES NAMES ONLY(nested array)

enames=employees.map(e=>e[1])
console.log(enames);

esalary=employees.map(e=>e[4])
console.log(esalary);

// print employeeb details whosee salary>35000

grt=employees.filter(e=>e[4]>35000)
console.log(grt);

// print developers details
dev=employees.filter(e=>e[2]=="developer")
console.log(dev);

// sort
var array=[1,3,4,12,10,15,11]
array.sort((n1,n2)=>n1-n2)
console.log(array);
// descending order
array.sort((n1,n2)=>n2-n1)
console.log(array);

employees.sort((e1,e2)=>e2[4]-e1[4])
console.log(employees);

employees.sort((e1,e2)=>e2[5]-e1[5])
console.log(employees);  

// sum of arrary
var total=array.reduce((n1,n2)=>n1+n2)
console.log(total);

// reduce
var maxElement=array.reduce((n1,n2)=>n1>n2?n1:n2)
console.log(maxElement);

var minElement=array.reduce((n1,n2)=>n1<n2?n1:n2)
console.log(minElement);

var highestPaid=employees.reduce((e1,e2)=>e1[4]>e2[4]?e1:e2)
console.log(highestPaid);


var lowPaid=employees.reduce((e1,e2)=>e1[4]<e2[4]?e1:e2)
console.log(lowPaid);

var isPresent=employees.some(e=>e[3]=="kolkatha")
console.log(isPresent);

// is there any employee working with salary 55000
var isActive=employees.some(e=>e[4]==55000)
console.log(isActive);

// find
var empDetail=employees.find(e=>e[0]==1005)
console.log(empDetail);


//forEach 
employees.forEach(e=>console.log(e))

// add 2000 for all emplo
employees.map(e=>e[4]+2000).forEach(sala=>console.log(sala))