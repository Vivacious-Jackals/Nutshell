const newsFormManager = Object.create(null, {
    clearNewsForm: {
        value: () => {
            document.querySelector("#newsTitle").value = ""
            document.querySelector("#newsContent").value = ""
            document.querySelector("#newsURL").value = ""
        }
    },
    renderNewsForm: {
        value: () => {
            return `
                <fieldset class="newsField">
                    <label for="newsTitle">Title</label>
                    <input required type="text" id="newsTitle">
                </fieldset>
                
                <fieldset class="newsField">
                    <label for="newsContent">Synopsis</label>
                    <input id="newsContent"
                    >
                    </input>
                </fieldset>

                <fieldset class="newsField">
                <label for="newsURL">URL</label>
                    <input required type="text" id="newsURL">
                </fieldset>

                <button class="saveNewsButton">Save News Entry</button>
                <button class="backToNewsButton">Back to News</button>
            `
        }
    }

})

module.exports = newsFormManager