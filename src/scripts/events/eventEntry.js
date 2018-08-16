//Taylor created a single event entry where the data will be passed into
const eventEntry = (item) => {
    return `
        <div class="eventEntry">
            <p class="event__name">
                Event Name: ${item.name}
            </p>
            <p class="event__date">
                Event Date: ${item.date}
            </p>
            <p>
                Event Location: ${item.location}
            </p>
            <button class="event__edit" id="edit--${item.id}">Edit</button>
        </div>
    `
}

module.exports = eventEntry