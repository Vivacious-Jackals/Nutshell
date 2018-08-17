const APIObject = require("./dataManager")
const formManager = require("./users/registerForm")
const newsFormManager = require("./news/newsForm")
const newsList = require("./news/news")
const newsButtons = require("./news/newsButtons")
const $ = require("jquery")


document.querySelector("#toggleButton").addEventListener("click", () => {
    document.querySelector("#registerContainer").classList.add("is-visible");
    document.querySelector("#registerContainer").innerHTML = formManager.renderRegisterForm(),
        //Add an eventlistener to the save button
        document.querySelector("#registerNewUser").addEventListener("click", () => {
            const newUser = {
                name: document.querySelector("#userName").value,
                email: document.querySelector("#userEmail").value,
            }
            //Check if the values are already used in database
            APIObject.getUserInfo().then((result) => {
                let userName = result.find(item => {
                    return newUser.name === item.name
                })
                let userEmail = result.find(item => {
                    return newUser.email === item.email
                })
                if (userName) {
                    alert("UserName already taken")
                } else if (userEmail) {
                    alert("Email is already taken")
                } else {
                    //Post to API
                    APIObject.saveUser(newUser).then(() => {
                        //Clear the Form Fields
                        alert("You are now registered!")
                        //Put HTML Representation on the DOM
                    })
                }
            })
        }),

        document.querySelector("#logInUser").addEventListener("click", () => {
            const existingUser = {
                name: document.querySelector("#userName").value,
                email: document.querySelector("#userEmail").value,
            }
            //Check if the values are already used in database
            APIObject.getUserInfo().then((result) => {
                let userObject = result.find(item => {
                    return existingUser.name === item.name && existingUser.email === item.email
                })
                if (!userObject) {
                    alert("UserName or Email is incorrect")
                } else {
                    sessionStorage.setItem("activeUser", JSON.stringify(userObject));
                    $("#welcome").empty();
                    $("#registerContainer").empty();
                    let user = JSON.parse(sessionStorage.getItem("activeUser"))
                    APIObject.getNewsArticles(user.id).then((news) => {
                        newsList(news);
                    })
                }
            })
        })
})



newsButtons()








































