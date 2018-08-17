const APIObject = require("./dataManager")
const formManager = require("./users/registerForm")
const eventFormManager = require("./events/eventsForm")
const eventList = require("./events/events")
const $ = require("jquery")

const editMode = {
    "enabled": false,
    "eventId": null
}

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
                    let user = JSON.parse(sessionStorage.getItem("activeUser"))
                    APIObject.getEvent(user.id).then((events) => {
                        eventList(events);
                    })
                }
            })

        })
})

//Logic for the Button functionality TG
document.querySelector("#eventContainer").addEventListener("click", evt => {
    // Handle save button clicks within the form section of the module TG
    if (evt.target.classList.contains("saveNewEvent") && editMode.enabled === false) {
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
    //Handle save button clicks for editing
    else if (evt.target.classList.contains("saveNewEvent") && editMode.enabled === true) {
        let user = JSON.parse(sessionStorage.getItem("activeUser"))
        let editedEvent = {
            name: document.querySelector("#eventName").value,
            date: document.querySelector("#eventDate").value,
            location: document.querySelector("#eventLocation").value,
            userId: user.id
        }
        APIObject.editEventEntry(editedEvent, editMode.eventId).then(() => {
            editMode.enabled = false
            editMode.entryId = null
        })
    }
    // Handle post new event button within the event list module TG
    else if (evt.target.classList.contains("postNewEvent")) {
        $("#eventContainer").empty();
        document.querySelector("#eventContainer").innerHTML = eventFormManager.renderEventForm();
    }
    // Handle the back button of the form section TG
    else if (evt.target.classList.contains("backToEvents")) {
        $("#eventContainer").empty();
        let user = JSON.parse(sessionStorage.getItem("activeUser"))
        APIObject.getEvent(user.id).then((events) => {
            eventList(events);
        })
    }
    // Handle the edit event button within the event list module TG
    else if (evt.target.classList.contains("event__edit")) {
        $("eventContainer").empty();
        const id = parseInt(evt.target.id.split("--")[1])
        document.querySelector("#eventContainer").innerHTML = eventFormManager.renderEventForm();
        APIObject.getSingleEvent(id)
            .then(event => {
                console.log(event);
                document.querySelector("#eventName").value = event.name
                document.querySelector("#eventDate").value = event.date
                document.querySelector("#eventLocation").value = event.location
                editMode.enabled = true
                editMode.eventId = id
            })
    }
})
