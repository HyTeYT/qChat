// Global declarations
var ChatConnection = new WebSocket('ws://93.201.176.64:1337');
var Verified = false;
const ChatTextInput = $(".ChatTextInput");

ChatConnection.addEventListener('open', function (e) {
    console.log("Connection established!");
});

ChatConnection.addEventListener('message', function (e) {
    if (Verified) {
        const AnswerObject = JSON.parse(e.data);
        $(".ChatMessages").append("<div>" + AnswerObject.Username + " - " + AnswerObject.Message + "</div><br>"); // TODO: Write to site etc
    }
});

swal({
    text: 'Gebe deinen Namen ein!',
    content: "input",
    button: {
        text: "Okay"
    },
})
    .then(Username => {
        if (!Username) throw null;

        if (Username !== "") {
            Verified = true;

            ChatConnection.send(JSON.stringify({
                Type: "Join",
                Username: Username
            }));
            $(".ChatWindow").fadeIn();
            return swal(`Hallo ${Username}!`);
        }
    });

ChatTextInput.keyup(function (e) {
    if (e.keyCode === 13 && ChatTextInput.val().length > 0) {
        ChatConnection.send(JSON.stringify({
            Type: "Message",
            Message: ChatTextInput.val()
        }));
        ChatTextInput.val("")
    }
});