let userObject;

fetch('http://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(json => userObject = json)
    .then(createClientObject)
    .then(getClientsFromFetch)

function getClientsFromFetch() {
    let content = document.getElementById("content")
    let i = 0;
    content.innerHTML = userObject[i].name + " - " + userObject[i].phone
    //console.log(userObject[i].name)

    let name_number_list = "";
    userObject.forEach((user) => {
        name_number_list += "<h5>" + user.name + " - " + user.phone + "</h5>";
    });
    content.innerHTML = name_number_list;
}