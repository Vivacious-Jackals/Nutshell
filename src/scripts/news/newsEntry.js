const createNewsEntry = (item) => {
    return `
    <article class="journalEntry">
        <h2>
            <h2>${item.title}</h2>
        </h2>
        <p>
            ${item.content}
        </p>       
        <h5>
            <a href="url">${item.url}</a>
        </h5>
        <button class="deleteNews" id="delete--${item.id}">Delete Post</button>
    </article>
    `
}

module.exports = createNewsEntry