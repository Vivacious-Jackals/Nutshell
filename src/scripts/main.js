const APIObject = require("./dataManager")
const formManager = require("./users/registerForm")
const eventFormManager = require("./events/eventsForm")
const eventList = require("./events/events")
const $ = require("jquery")

document.querySelector("#toggleButton").addEventListener("click", () => {
    document.querySelector("#registerContainer").classList.add("is-visible");
    // })


    document.querySelector("#registerContainer").innerHTML = formManager.renderRegisterForm(),


        //Add an eventlistener to the save button
        document.querySelector("#registerNewUser").addEventListener("click", () => {
            //Get form field values
            //Create object from them


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
                    APIObject.getEvent().then((events) => {
                        eventList(events);
                    })
                    // document.querySelector("#eventContainer").innerHTML = eventFormManager.renderEventForm();
                }
            })

        })
})
//Logic for the Button functionality TG
document.querySelector("#eventContainer").addEventListener("click", evt => {
    // Handle save button clicks within the form section of the module TG
    if (evt.target.classList.contains("saveNewEvent")) {
        let user = JSON.parse(sessionStorage.getItem("activeUser"))
        let newEvent = {
            name: document.querySelector("#eventName").value,
            date: document.querySelector("#eventDate").value,
            location: document.querySelector("#eventLocation").value,
            userId: user.id
        }
        APIObject.saveEvent(newEvent);
        eventFormManager.clearForm();
    }
    // Handle post new event button within the event list module TG
    else if (evt.target.classList.contains("postNewEvent")) {
        console.log("it worked")
        $("#eventContainer").empty();
        document.querySelector("#eventContainer").innerHTML = eventFormManager.renderEventForm();
    }
    // Handle the back button of the form section TG
    else if (evt.target.classList.contains("backToEvents")) {
        console.log("it actually worked")
        $("#eventContainer").empty();
        APIObject.getEvent().then((events) => {
            eventList(events);
            console.log("events", events);
        })
    }
})


