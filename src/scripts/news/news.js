const createNewsEntry = require("./newsEntry")

const listElement = document.querySelector("#newsContainer")
const titleElement = () => {
    return `
        <div class="newsEntry">
            <h1>
                News
            </h1>
            <button class="postNews">Post News</button>
        </div>
    `
}

const newsList = (news) => {
    listElement.innerHTML = ""

    listElement.innerHTML = titleElement()
    news.map(entry => {
        listElement.innerHTML += createNewsEntry(entry)
    })
}

module.exports = newsList
