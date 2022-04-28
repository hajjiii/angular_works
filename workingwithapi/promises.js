// /promise
// var mypro=new Promise((resolve,reject)=>{
//     let
// }

var lot=new Promise((resolve,reject)=>{
    let yourNum=5
    // let priceNum=5
    let priceNum=Math.floor(Math.random()*10);
    if(yourNum==priceNum){
        resolve("won.........")
    }
})
lot.then(msg=>console.log("buy a new bike"))