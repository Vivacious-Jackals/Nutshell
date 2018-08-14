const APIObject = require("./dataManager")
const formManager = require("./users/registerForm")
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

    APIObject.getUserInfo().then((users) => {
        if (newUser.name === users.find(newUser.name)) {
            alert("UserName already taken")
        } else if (newUser.email === users.find(newUser.email)) {
            alert("email already used with other account")
        } else {
            //Post to API
            APIObject.saveUser(newUser).then(() => {
                //Clear the Form Fields
                formManager.clearForm()
            })
        }
    })
})



