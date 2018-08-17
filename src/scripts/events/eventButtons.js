const $ = require("jquery")
const APIObject = require("../dataManager")
const eventFormManager = require("./eventsForm")
const eventList = require("./events")

// All my event button logic
const eventButtonLogic = function () {
    //Edit part for the edit button functionality TG
    const editMode = {
        "enabled": false,
        "eventId": null
    }    
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
        //Handle save button clicks for editing TG
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
}

module.exports = eventButtonLogic