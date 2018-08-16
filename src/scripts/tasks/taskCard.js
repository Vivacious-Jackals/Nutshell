// author: Grady R.
// build a card that will display in the "tasks" containerDiv; 
console.log("Grady R. taskCard.js")

document.querySelector("#taskContainer").innerHTML = `<fieldset>
<label for="taskName">Task Name:</label>
<input required type="text" id="taskName">
</fieldset>

<fieldset>
<label for="expectedCompletionDate">Expected Completion Date: </label>
<input type="date" id="expectedCompletionDate"></textarea>
</fieldset>

<button id="sendToAPI">This button needs an event listener to POST these values to API</button>`



// add an event listener to the "sendToAPI" button
// copy/pasta from Journal exercise

// Add an event listener for the save button
document.querySelector("#sendToAPI").addEventListener("click", () => {
    // Get form field values
    // Create object from them
    // Add timestamp
    const newEntry = {
        taskName: document.querySelector("#taskName").value,
        expectedCompletionDate: document.querySelector("#expectedCompletionDate").value,
        date: Date.now()
    }

    // POST to API
    DataManager.saveJournalEntry(newEntry)
        .then(() => {
            // Clear the form fields
            FormManager.clearForm()
            listEntries()
        })
})