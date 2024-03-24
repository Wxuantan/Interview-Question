

function sendMessage() {
    var userInput = $('#userInput').val();
    var lowerCaseInput = userInput.toLowerCase();
    var timestamp = getCurrentDateAndTime();

    $('#chatbox').append('<div class="message userMessage"><div class="userName">User</div><div class="bubble"><div class="text">' + userInput + '</div></div><div class="timestamp">' + timestamp + '</div></div>');
    
    $('#userInput').val('');

    var botResponse = '';
    var yell = ['stupid', 'slow', 'dumb', 'trash'];
    var yellwithquestion = ['faster', 'how long you want me to wait', 'solve it faster', ];

    if (lowerCaseInput.endsWith('?') && !yell.some(word => lowerCaseInput.includes(word)) && !yellwithquestion.some(word => lowerCaseInput.includes(word))) {
        botResponse = 'Yes';
    } else if (lowerCaseInput === 'jamie') {
                botResponse = 'Can I help you?';
    } else if (yellwithquestion.some(word => lowerCaseInput.includes(word))||userInput.toUpperCase() === userInput && userInput.endsWith('?')) {
                botResponse='Please give me some time to resolve the issue.';
    } else if (yell.some(word => lowerCaseInput.includes(word)) || userInput.endsWith('!')){
                botResponse='Please remain calm';
    } else {
                botResponse = 'Sorry, I dont understand';
    }
    
    timestamp = getCurrentDateAndTime();
    $('#chatbox').append('<div class="message botMessage"><div class="botName">Jamie</div><div class="bubble"><div class="text">' + botResponse + '</div></div><div class="timestamp">' + timestamp + '</div></div>');
}

function getCurrentDateAndTime() {
    var date = new Date();
    var dd = date.getDate();
    var mm = date.getMonth() + 1;
    var yyyy = date.getFullYear();
    var hour = date.getHours();
    var minutes = date.getMinutes();
    var milis = date.getMilliseconds();
    return dd + "-" + mm + "-" + yyyy + " " + hour + ":" + minutes + ":" + milis + " ";
}

function sendGreeting() {
    var botGreeting = 'Hello! Nice to meet you!!';
    var timestamp = getCurrentDateAndTime();
    $('#chatbox').append('<div class="message botMessage"><div class="botName">Jamie</div><div class="bubble"><div class="text">' + botGreeting + '</div></div><div class="timestamp">' + timestamp + '</div></div>');
}

$(document).ready(function() {
    sendGreeting();
    $('#sendBtn').click(sendMessage);
    $('#userInput').keypress(function(e) {
        if (e.which == 13) {  // Enter key pressed
            sendMessage();
        }
    });
});





