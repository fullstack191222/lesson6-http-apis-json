const apiUrl = 'https://jsonplaceholder.typicode.com/posts';

const getData = (url, cb)=> {
    fetch(url)
    .then((response)=>{return response.json()})
    .then((data)=> {return cb(data)})
}

fetch()


const displayData = (data) => {
    console.log(data);
}

getData(apiUrl,displayData)


const book = {
    author : "Martin",
    title: "song of ice and fire"
    //
    //
}