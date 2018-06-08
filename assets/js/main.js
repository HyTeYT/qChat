// Global declarations
var ChatConnection = new WebSocket('ws://localhost:8080');

ChatConnection.onOpen = function () {
    console.log("Connection established!");
};

ChatConnection.onMessage = function (e) {
    console.log("Got message!");
    if (Username !== undefined) {
        const AnswerObject = JSON.parse(e.data);
        $(".ChatMessages").append(AnswerObject.Username + " - " + AnswerObject.Message); // TODO: Write to site etc
    }
};

const Username = prompt('Bitte gib deinen Namen ein!'); // TODO: Use prompt alternative
if (Username !== "") {
    ChatConnection.send(JSON.stringify({
        Type: "Join",
        Username: Username
    }));

    OpenMessageSender(); // TODO: REWRITE!
}

function OpenMessageSender() {
    let Message = prompt("Gebe deine Nachricht ein!"); // TODO: Interface (jquery input or sth)
    ChatConnection.send(JSON.stringify({
        Type: "Message",
        Message: Message
    }));
}