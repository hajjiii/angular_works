// local storage
// key value pair

// setItem(k,v)=> for adding key value pair
// token="abc123"
// localStorage.setItem("token","abc123")

// localStorage.setItem("username","django")
// localStorage.setItem("password","abc123")

// getItem
//  var tkn=localStorage.getItem("token")
//  console.log(tkn);

//  var pass=localStorage.getItem("password")
//  console.log(pass);

//  var user=localStorage.getItem("username")
//  console.log(user);

// //  removeItem

// // localStorage.removeItem(key)
// localStorage.removeItem("token")
// localStorage.removeItem("password")

// localStorage.clear()


// localStorage.setItem(k,v)
// localStorage.getItem(key)
// localStorage.removeItem(key)
// localStorage.clear()

// var user={
//     name:"ram",
//     paasword:"abc123",
//     gender:"male",
//     username:"userone",
//     password:"password@123"
// }

// localStorage.setItem(user.username,JSON.stringify(user))

// var data=JSON.parse(localStorage.getItem("username"))
// console.log(data);

var book={
    bookname:"testbook",
    author:"mt",
    price:500

}
// localStorage.setItem(book.bookname,JSON.stringify(book))

var data=JSON.parse(localStorage.getItem("testbook"))
console.log(data);