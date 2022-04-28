var stock_details=[
    {item_name:"tomato",mrp:80,purchase_rate:40,aval_qty:50},
    {item_name:"onion",mrp:50,purchase_rate:30,aval_qty:60},
    {item_name:"brinjal",mrp:40,purchase_rate:25,aval_qty:10},
    {item_name:"carrot",mrp:80,purchase_rate:65,aval_qty:0},
    {item_name:"potatto",mrp:65,purchase_rate:45,aval_qty:0},
    {item_name:"chilly",mrp:40,purchase_rate:20,aval_qty:10},

]

// print total no of items
console.log(stock_details.length);

// print all product_name
stock_details.map(p=>p["item_name"]).forEach(name=>console.log(name))

// print out of stock productname
stock_details.filter(p=>p["aval_qty"]==0).forEach(p=>console.log(p["item_name"]))

// costly product
var costlyProduct=stock_details.reduce((p1,p2)=>p1.mrp>p2.mrp?p1:p2)
console.log(costlyProduct);
var costlyProduct1=stock_details.reduceRight((p1,p2)=>p1.mrp>p2.mrp?p1:p2)
console.log(costlyProduct1);


// max
var maxPrice=stock_details.reduce((p1,p2)=>p1.mrp>p2.mrp?p1:p2).mrp;
console.log(maxPrice);
stock_details.filter(p=>p.mrp==maxPrice).forEach(p=>console.log(p))


// print details of potatto
var itemDetail=stock_details.find(p=>p.item_name=="potatto")
console.log(itemDetail);


// isthere any item available uder rs 50
var isAvailable=stock_details.some(p=>p.mrp<50)
console.log(isAvailable);