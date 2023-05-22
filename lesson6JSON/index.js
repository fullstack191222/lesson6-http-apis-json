// const book = {
//     "title" : 'ice and fire',
//     author : `martin`,
//     age : 2,
//     price: 100
// }


// const obj1 = { name: "John", age: 30 };

// const jsonStr = JSON.stringify(obj1);
// console.log("obj1 in json format is : " + jsonStr);

// //convert json to object
// const obj3 = JSON.parse(jsonStr)
// console.log(`the object from json is ${obj3}`);

// //to extract object keys
// console.log("object keys", Object.keys(obj3))

// //to extract object values
// console.log("object values", Object.values(obj1))

const getDatafromLink = async (link)=> {
    const result = await fetch(link)
    const data = await result.json()
    console.log(data);
}

//getDatafromLink("index.json")

getDatafromLink("https://jsonplaceholder.typicode.com/posts/1")