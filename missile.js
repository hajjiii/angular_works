var  brahmos={
    manufacture:"brahmos space limited",
    cost:"2.7 million us dollar",
    length:"8.5cm",
    varients:["ship-launched","surface.-launched"]
}
console.log(brahmos.varients);
console.log("accuracy" in brahmos);
brahmos.accuracy="1.0cm"
console.log(brahmos);
console.log("accuracy" in brahmos);
