var employee={
    eid:101,
    ename:"haji",
    desig:"python developer",
    experience:1
}
console.log(employee);
console.log(employee.ename);
console.log(employee.designation);

employee["salary"]=25000
console.log(employee);


console.log("ename" in employee);

// check experience key check cheynm undenkil value update chynm +1,allel 1 ayit set chynm

if("experience" in employee){
    employee.experience +=1
}
else{
    employee.experience=1
}
console.log(employee);