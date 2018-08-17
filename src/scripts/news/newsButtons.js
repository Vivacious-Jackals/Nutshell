const APIObject = require("../dataManager")
const newsFormManager = require("./newsForm")
const newsList = require("./news")
const $ = require("jquery")

const newsButtons = function () {
    document.querySelector("#newsContainer").addEventListener("click", evt => {
        // Handle save button clicks within the form section of the module TG
        if (evt.target.classList.contains("saveNewsButton")) {
            let user = JSON.parse(sessionStorage.getItem("activeUser"))
            let newNews = {
                userId: user.id,
                title: document.querySelector("#newsTitle").value,
                content: document.querySelector("#newsContent").value,
                url: document.querySelector("#newsURL").value,
            }
            APIObject.saveNews(newNews);
            alert("Yo Shits been Posted!")
            newsFormManager.clearNewsForm();
        }
        // Handle post new event button within the event list module TG
        else if (evt.target.classList.contains("postNews")) {
            $("newsContainer").empty();
            document.querySelector("#newsContainer").innerHTML = newsFormManager.renderNewsForm();
        }
        // Handle the back button of the form section TG
        else if (evt.target.classList.contains("backToNewsButton")) {
            $("#newsContainer").empty();
            let user = JSON.parse(sessionStorage.getItem("activeUser"))
            APIObject.getNewsArticles(user.id).then((news) => {
                newsList(news);
            })
        }
        else if (evt.target.classList.contains("deleteNews")) {
            let id = parseInt(evt.target.id.split("--")[1])
            APIObject.deleteNewsEntry(id).then(() => {
                $("#newsContainer").empty();
                let user = JSON.parse(sessionStorage.getItem("activeUser"))
                APIObject.getNewsArticles(user.id).then((news) => {
                    newsList(news);
                })
            })
        }
    })
}

module.exports = newsButtons