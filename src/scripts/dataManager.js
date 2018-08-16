/*
Purpose: Store and retrieve data from remote API
*/
const APIObject = {}

APIObject.saveUser = (users) => {
    return fetch("http://localhost:8088/users", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(users)
    })
        .then(response => response.json())
}

APIObject.getUserInfo = () => {
    return fetch("http://localhost:8088/users")
        .then(response => response.json())
}



// APIObject.saveNews = (news) => {
//     return fetch("http://localhost:8088/news", {
//         method: "POST",
//         headers: {
//             "Content-Type": "application/json"
//         },
//         body: JSON.stringify(news)
//     })
//     .then(response => response.json())
// }

// APIObject.deleteNews = () => {
//     return fetch(`http://localhost:8088/news/${ID}`, {
//         method: "DELETE"
//     }).then(response => response.json())

// }

// APIObject.saveMessage = (messages) => {
//     return fetch("http://localhost:8088/messages", {
//         method: "POST",
//         headers: {
//             "Content-Type": "application/json"
//         },
//         body: JSON.stringify(messages)
//     })
//     .then(response => response.json())
// }

// APIObject.saveTask = (tasks) => {
//     return fetch("http://localhost:8088/tasks", {
//         method: "POST",
//        headers: {
//            "Content-Type": "application/json"
//         },
//        body: JSON.stringify(tasks)
//    })
//    .then(response => response.json())
// }

APIObject.saveEvent = (events) => {
    return fetch("http://localhost:8088/events", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(events)
    })
    .then(response => response.json())
}

APIObject.getEvent = () => {
    return fetch("http://localhost:8088/events")
        .then(response => response.json())
}

APIObject.getSingleEvent = (entryId) => {
    return fetch(`http://localhost:3000/events/${entryId}`)
        .then(res => res.json())
}

APIObject.editJournalEntry = (entry, entryId) => {
    return fetch(`http://localhost:3000/events/${entryId}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(entry)
    }).then(response => response.json());
}



module.exports = APIObject


