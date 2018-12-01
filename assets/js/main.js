// Global declarations
var ChatConnection = new WebSocket('ws://192.168.0.42:1337');
var Verified = false;
const ChatTextInput = $(".ChatTextInput");

ChatConnection.addEventListener('open', function (e) {
    console.log("Connection established!");
    ask();
});

ChatConnection.addEventListener('message', function (e) {
    if (Verified) {
        const AnswerObject = JSON.parse(e.data);
	console.log(AnswerObject);
        $(".ChatMessages").prepend("<div>" + AnswerObject.Username + ": " + AnswerObject.Message + "</div><br>"); // TODO: Write to site etc
        $(".ChatMessages div:first-of-type").fadeIn();
        $(".ChatMessages div").css("display", "inline-block");
    }
});

function ask() {
$("#loading").fadeOut();
swal({
    text: 'Bitte gebe einen Nickname ein:',
    content: "input",
    button: {
        text: "Speichern"
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
}

ChatTextInput.keyup(function (e) {
    if (e.keyCode === 13 && ChatTextInput.val().length > 0) {
        ChatConnection.send(JSON.stringify({
            Type: "Message",
            Message: ChatTextInput.val()
        }));
        ChatTextInput.val("")
    }
});
