const APIObject = require("./dataManager")
const formManager = require("./users/registerForm")
console.log("hi")
document.querySelector("#registerContainer").innerHTML = formManager.renderRegisterForm()

//Add an eventlistener to the save button
document.querySelector("#registerNewUser").addEventListener("click", () => {
    //Get form field values
    //Create object from them
    //Add timestamp
 
    const newUser = {
        name: document.querySelector("#userName").value,
        email: document.querySelector("#userEmail").value,
    }

    //Post to API
    APIObject.saveUser(newUser).then(() => {
        //Clear the Form Fields
        formManager.clearForm()
        //Put HTML Representation on the DOM
    })
})

// if (document.querySelector("#userName").value == users.name)

// else
// name = document.querySelector("#userName").value;
// if (users.includes(name) && users.includes(email))
// {}


