/*
    Purpose: Store and retrieve data from remote API
*/

// const APIObject = {
//     /*
//         Purpose: Make GET request to API to retrieve product types
//     */
//     getUsers () {
//         return fetch("http://localhost:8088/users")
//             .then(response => response.json());
//     },

//     getMessages () {
//         return fetch("http://localhost:8088/messages")
//         .then(response => response.json());
//     },

//     getTasks () {
//         return fetch("http://localhost:8088/tasks")
//             .then(response => response.json());
//     },

//     getEvents () {
//         return fetch("http://localhost:8088/events")
//             .then(response => response.json());
//     },

//     getNews () {
//         return fetch("http://localhost:8088/news")
//             .then(response => response.json());
//     },

//     getConnections () {
//         return fetch("http://localhost:8088/connections")
//             .then(response => response.json());
//     },

// }

// module.exports = APIObject








const APIObject = {}

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

APIObject.deleteNews = () => {
    return fetch(`http://localhost:8088/news/${ID}`, {
        method: "DELETE"
    }).then(response => response.json())

}









APIObject.editEvents = (event) => {
    return fetch(`http://localhost:8088/events${id}`, {
       method: "PUT",
       headers: {
           "Content-Type": "application/json"
       },
       body: JSON.stringify(event)
   })
   .then(response => response.json())
}


module.exports = APIObject