const user = {
    "name": "Ryan",
    "lastName": "Ray",
    "nickname": "Ray123",
    "hobbies": ["run", "code", "eat"],
    "addres": {
        "street": "123 Main street",
        "city": "New York"
    },
    "married": false,
    // no toma funciones.
    greet() {
        return 'Hello'
    }

}

// objeto
const friends = [
    { name: "Carlos", nickname: "joe123" },
    { name: "Carlos", nickname: "joe123" },
    { name: "Carlos", nickname: "joe1343" },
]

user.friends = friends;

let output = '';

for (let i = 0; i < friends.length; i++) {
    output = output + `<li>${friends[i].name} </li>`

}
document.getElementById('people').innerHTML = output;

// Stringify de objeto a json
//  .parse de json a objeto


let postElement = '';
// console.log(JSON.stringify(user))
fetch('https://jsonplaceholder.typicode.com/posts').then(response => {
    return response.json();
}).then(data => {

    for (let i = 0; i < data.length; i++) {
        postElement += `<li>${data[i].userId} - ${data[i].title} </li>`

    }
    document.getElementById('post').innerHTML = postElement;
})