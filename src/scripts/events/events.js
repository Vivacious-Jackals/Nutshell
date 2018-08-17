// Taylor created an events list that will store all of the events
const eventEntry = require("./eventEntry")

const listElement = document.querySelector("#eventContainer")
const titleElement = () => {
    return `
        <div class="eventEntry">
            <h1>
                Events
            </h1>
            <button class="postNewEvent">Post New Event</button>
        </div>
    `
}

const eventList = (entries) => {
    listElement.innerHTML = ""

    listElement.innerHTML = titleElement()
    entries.map(entry => {
        listElement.innerHTML += eventEntry(entry)
    })
}

module.exports = eventList