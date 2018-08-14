const formManager = Object.create(null, {
    clearForm: {
        value: () => {
            document.querySelector("#userName").value = ""
            document.querySelector("#userEmail").value = ""
        }
    },
    renderRegisterForm: {
        value: () => {
            return `
                <fieldset>
                    <label for="userName">Name:</label>
                    <input required type="text" id="userName">
                </fieldset>

                <fieldset>
                    <label for="userEmail">Email:</label>
                    <input id="userEmail"></textarea>
                </fieldset>

                <button id="registerNewUser">Register New User</button>
            `
        }
    }

})


module.exports = formManager