const validInviteCode = 'azakrutoi';


function checkInviteCode() {
    const inviteCode = document.getElementById('invite-code').value;
    const errorMessage = document.getElementById('error-message');
    
    if (inviteCode === validInviteCode) {
        localStorage.setItem('isLoggedIn', 'true');
        window.location.href = 'nurda3.html';
    } else {
        errorMessage.textContent = 'Неверный код приглашения!';
    }
}


function checkLoginStatus() {
    if (localStorage.getItem('isLoggedIn') !== 'true') {
        window.location.href = 'NURDA.html'; 
    }
}


function logout() {
    localStorage.removeItem('isLoggedIn');
    window.location.href = 'NURDA.html'; 
}


function sendMessage() {
    const messageInput = document.getElementById('message-input');
    const messageList = document.getElementById('message-list');
    
    if (messageInput.value.trim()) {
        const newMessage = document.createElement('div');
        newMessage.classList.add('message');
        newMessage.textContent = messageInput.value;
        
        messageList.appendChild(newMessage);
        messageInput.value = ''; 
        messageList.scrollTop = messageList.scrollHeight; 
        saveMessages(); 
    }
}


function saveMessages() {
    const messages = document.getElementsByClassName('message');
    const messagesArray = [];
    for (let message of messages) {
        messagesArray.push(message.textContent);
    }
    localStorage.setItem('messages', JSON.stringify(messagesArray));
}


function loadMessages() {
    const savedMessages = localStorage.getItem('messages');
    if (savedMessages) {
        const messagesArray = JSON.parse(savedMessages);
        const messageList = document.getElementById('message-list');
        messagesArray.forEach(msg => {
            const newMessage = document.createElement('div');
            newMessage.classList.add('message');
            newMessage.textContent = msg;
            messageList.appendChild(newMessage);
        });
    }
}


window.onload = function () {
    checkLoginStatus(); 
    loadMessages(); 
};
