const APIObject = require("../dataManager")
const newsFormManager = require("./newsForm")

function newsToAPI(){
document.querySelector("#saveNewsButton").addEventListener("click", () => {
    //Get form field values
    //Create object from them
    let user = JSON.parse(sessionStorage.getItem("activeUser"))
    let newArticle = {
        userId: user.id,
        title: document.querySelector("#newsTitle").value,
        content: document.querySelector("#newsContent").value,
        url: document.querySelector("#newsURL").value,
    }
       //Post to API
    APIObject.saveNews(newArticle).then(() => {
        //Clear the Form Fields
        alert("Article Saved!")
        newsFormManager.clearNewsForm()
        //Put HTML Representation on the DOM
    })
})
}      



module.exports = newsToAPI;