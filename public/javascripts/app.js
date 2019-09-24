var socket = io();
socket.on('add-comment', data => {
    addComment(data);
});

// constants


// cached elements
let nameEl = document.getElementById('name-input');
let msgEl = document.getElementById('msg-input');
let sendBtnEl = document.getElementById('send-btn');
let msgSectionEl = document.getElementById('msg-section');

// event listeners
sendBtnEl.addEventListener('click', evt => {
    socket.emit('add-comment', { comment: msgEl.value });
});

// functions
function addComment({comment}) {
    console.log(comment)
    let html = msgSectionEl.innerHTML;
    html += `
    <div>
        <p><span class="capitalize">${nameEl.value}</span> said, "${comment}"</p>
        <p>${(new Date(Date.now())).toTimeString()}</p>
    </div>
    `;
    msgSectionEl.innerHTML = html;
}

