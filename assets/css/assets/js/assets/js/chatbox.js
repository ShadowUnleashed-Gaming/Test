function sendMessage() {
    let input = document.getElementById("chatInput").value;
    let messages = document.getElementById("chatMessages");

    if (input.trim() !== "") {
        let newMessage = document.createElement("p");
        newMessage.textContent = input;
        messages.appendChild(newMessage);
        document.getElementById("chatInput").value = "";
    }
}
