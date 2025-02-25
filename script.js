let username = "";
let typingTimeout;

function login() {
    username = document.getElementById("username").value.trim();
    if (username === "") {
        alert("Please enter a name!");
        return;
    }
    document.getElementById("login-screen").classList.add("hidden");
    document.getElementById("chat-container").classList.remove("hidden");
}

function sendMessage() {
    let messageInput = document.getElementById("message-input");
    let message = messageInput.value
}
