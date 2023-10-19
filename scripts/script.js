let input = document.querySelector('#message');
let newMessage = document.querySelector('.js-new-message');
let send = document.querySelector('#send');
send.addEventListener('click', ()=>{newMessage.innerHTML = `<p>Newest Message: <br>${input.value}</p>`});






let messageContainer =  document.querySelector('.js-message');
let savedMessage = ["Why don't scientists trust atoms? Because they make up everything!",
"Did you hear about the mathematician who's afraid of negative numbers? He'll stop at nothing to avoid them.",
"Parallel lines have so much in common. It's a shame they'll never meet.",
"How does a penguin build its house? Igloos it together!",
"I told my wife she was drawing her eyebrows too high. She looked surprised.",
"Why did the scarecrow win an award? Because he was outstanding in his field!",
"Why don't scientists trust atoms? Because they make up everything!",
"Did you hear about the mathematician who's afraid of negative numbers? He'll stop at nothing to avoid them.",
"Parallel lines have so much in common. It's a shame they'll never meet.",
"How does a penguin build its house? Igloos it together!",
"I told my wife she was drawing her eyebrows too high. She looked surprised.",
"Why did the scarecrow win an award? Because he was outstanding in his field!"
];

for(let i=0; i<savedMessage.length; i++) {
    messageContainer.innerHTML += `<p>${savedMessage[i]}<br>-------------</p>`;
    console.log(messageContainer);

}