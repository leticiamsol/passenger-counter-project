// Grab the save-el paragraph and store it in a variable called saveEl

let saveEl = document.getElementById("save-el")
let countEl = document.getElementById("count-el")
let count = 0

function increment() {
    count += 1
    countEl.textContent = count
}

function save() {
    // Create a variable that contains both the count and the dash separator, i.e. "12 - "
    let countStr = count + " - " 
    // Render the variable in the saveEl using innerText
    saveEl.textContent += countStr
    // Make sure to not delete the existing content of the paragraph
    countEl.textContent = 0
    count = 0
}





