const chatForm = document.getElementById("chat-form")
const socket = io();

// Message submit
socket.on("message", message => {
    console.log(message);
})

chatForm.addEventListener('submit', (e) => {
    e.preventDefault();

    ///get message text here...
    const msg = e.target.elements.msg.value;

    //emiting message to the server...
    socket.emit("chatMessage",msg)
})


//out message to dom
const outputMessage = () => {

}