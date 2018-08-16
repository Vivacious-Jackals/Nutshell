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
                    <textarea id="newsContent"
                    >
                    </textarea>
                </fieldset>

                <fieldset class="newsField">
                <label for="newsURL">URL</label>
                    <input required type="text" id="newsURL">
                </fieldset>

                <button id="saveNewsButton">Save News Entry</button>
            `
        }
    }

})


module.exports = newsFormManager