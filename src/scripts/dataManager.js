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

APIObject.saveNews = (news) => {
    return fetch("http://localhost:8088/news", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(news)
    })
        .then(response => response.json())
}

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


APIObject.saveTask = (tasks) => {
    return fetch("http://localhost:8088/tasks", {
        method: "POST",
       headers: {
           "Content-Type": "application/json"
        },
       body: JSON.stringify(tasks)
   })
   .then(response => response.json())
}
APIObject.getNewsArticles = (ID) => {
    return fetch(`http://localhost:8088/news?userId=${ID}`)
        .then(response => response.json())
}


APIObject.deleteNewsEntry = (ID) => {
    return fetch(`http://localhost:8088/news/${ID}`, {
        method: "DELETE"
    }).then(response => response.json())
}


APIObject.getEvent = (id) => {
    return fetch(`http://localhost:8088/events?userId=${id}`)
        .then(response => response.json())
}

APIObject.getSingleEvent = (id) => {
    return fetch(`http://localhost:8088/events/${id}`)
        .then(res => res.json())
}


APIObject.editEventEntry = (event, id) => {
    return fetch(`http://localhost:8088/events/${id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(event)
    }).then(response => response.json());
}




module.exports = APIObject
