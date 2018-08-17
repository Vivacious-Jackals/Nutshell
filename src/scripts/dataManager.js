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







module.exports = APIObject


