const eventFormManager = Object.create(null, {
    clearForm: {
        value: () => {
            document.querySelector("#eventName").value = ""
            document.querySelector("#eventDate").value = ""
            document.querySelector("#eventLocation").value = ""
        }
    },
    renderEventForm: {
        value: () => {
            return `
                <fieldset>
                    <label for="userName">Event Name:</label>
                    <input required type="text" id="eventName">
                </fieldset>

                <fieldset>
                    <label for="eventDate">Date of Event:</label>
                    <input id="eventDate"></textarea>
                </fieldset>

                <fieldset>
                    <label for="eventLocation">Location of Event:</label>
                    <input id="eventLocation"></textarea>
                </fieldset>

                <button id="postNewEvent">Post</button>
            `
        }
    }

})


module.exports = eventFormManager