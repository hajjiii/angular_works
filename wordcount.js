var text="hello hi hello hi hi"

var wc={}

text.split(" ").map(word=> word in wc? wc[word]+=1:wc[word]=1)
console.log(wc);

// var words=text.split(" ")
// // words=["hello",hi,hello,hi]
// for(let word of words){
//     if(word in wc){

//         wc[word]+=1
//     }
//     else{
//         wc[word]=1
//     }
// }
// console.log(wc);



// pattern "abacc"
// first recursive character
// var pattern="ABACCC"
// var frequentwords={}
// for(let char of pattern){
//     if(char in frequentwords){
//         console.log("first recursive char",char);
//         break
//     }
//     else{
//        frequentwords[char]=1
//     }
// }


// second recursive character 
var pattern="ABACCC"
var frequentwords={}
var duplicate=[]
// for(let char of pattern){
//     if(char in frequentwords){
//         duplicate.push(char)
        
//     }
//     else{
//         frequentwords[char]=1
//     }
// }
// console.log("first recursive char",duplicate[0]);
// console.log("second recursive char",duplicate[1]);

// console.log(Array.from(pattern));

// Array.from(pattern).map(char=> char in frequentwords?duplicate.push(char):frequentwords[char]=1)
// console.log(duplicate[0]);
// console.log(duplicate[1]);


// frequent character
Array.from(pattern).map(char=>char in frequentwords? frequentwords[char]+=1: frequentwords[char]=1)
// console.log(frequentwords);
// { A: 3, B: 2, C: 4 }
// console.log(Object.entries(frequentwords));
var res=Object.entries(frequentwords).sort((a1,a2)=>a2[1]-a1[1])
console.log(res[0]);








// var test={
//     ["A",2],
//     ["B",1],
//     ["C",3],
// }
// test.sort((a1,a2),a2[1]-a1[2])
// console.log(tsest);