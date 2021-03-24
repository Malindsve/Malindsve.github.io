let clientsObject = [];

function createClientObject() {
    for (let i = 0; i < userObject.length; i++) {
        clientsObject.push({
            name: userObject[i].name,
            phone: userObject[i].phone
        })
    }
}

function compareStringsInLowerCase(originalString, searchFor) {
    originalString = originalString.toLowerCase();
    searchFor = searchFor.toLowerCase();

    if (originalString.includes(searchFor)) {
        return true;
    } else {
        return false;
    }
}

function searchFor(testThisString) {
    let name_number_list = "";

    let content = document.getElementById("content")

    for (let i = 0; i < clientsObject.length; i++) {
        if (compareStringsInLowerCase(clientsObject[i].name, testThisString) || compareStringsInLowerCase(clientsObject[i].phone, testThisString)) {
            name_number_list += "<h5>" + clientsObject[i].name + " - " + clientsObject[i].phone + "</h5>";
        }
    }

    content.innerHTML = name_number_list;
}










