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

APIObject.getNewsArticles = (ID) => {
    return fetch(`http://localhost:8088/news?userId=${ID}`)
        .then(response => response.json())
}

APIObject.deleteNewsEntry = (ID) => {
    return fetch(`http://localhost:8088/news/${ID}`, {
        method: "DELETE"
    }).then(response => response.json())

}

module.exports = APIObject


