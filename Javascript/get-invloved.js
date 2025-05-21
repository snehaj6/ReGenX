document.getElementById("send-items-form").addEventListener("submit", function(event) {
    event.preventDefault();

    const item = document.getElementById("item").value;
    const choice = document.getElementById("choice").value;
    const description = document.getElementById("description").value;

    if (item && choice && description) {
        alert(`Thank you for contributing!\n\nItem: ${item}\nChoice: ${choice === 'repurpose' ? 'Repurpose and Return' : 'Donate to Community'}\nDescription: ${description}`);
        
        // Here you can add code to send form data to a server or update the UI
    } else {
        alert("Please fill out all fields.");
    }
});
