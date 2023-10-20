let input = document.querySelector('#message');
let newMessage = document.querySelector('.js-new-message');
let send = document.querySelector('#send');
let messageContainer =  document.querySelector('.js-message');
let savedMessage = ["Why don't scientists trust atoms? Because they make up everything!",
"Did you hear about the mathematician who's afraid of negative numbers? He'll stop at nothing to avoid them.",
"Parallel lines have so much in common. It's a shame they'll never meet.",
"How does a penguin build its house? Igloos it together!",
"I told my wife she was drawing her eyebrows too high. She looked surprised.",
"Why did the scarecrow win an award? Because he was outstanding in his field!",
];



for(let i=0; i<savedMessage.length; i++) {
    messageContainer.innerHTML += `<p>${savedMessage[i]}<br>-------------</p>`;
}


function updateMessage() {
    messageContainer.innerHTML = '';
    let keys = Object.keys(localStorage);
    let length = keys.length;
    let storedItems = [];
    let date = '';
    for (let i = 0; i < length; i++) {
        let item = localStorage.getItem(keys[i]);
        date = new Date(keys[i] / 1).toLocaleDateString() + ', ' +  new Date(keys[i] / 1).toLocaleTimeString();
        storedItems.push(item); 
        storedItems.sort();  
        storedItems.reverse();                                                                                                         
        console.log(`storedItems: ${storedItems}`);
    }
    for(let i=0; i<storedItems.length; i++) {
        messageContainer.innerHTML += `<p>${storedItems[i]}<br>${date}<br>-------------</p>`;
    }
    for(let i=0; i<savedMessage.length; i++) {
        let date = new Date().toLocaleDateString() + ', ' +new Date().toLocaleTimeString();
        messageContainer.innerHTML += `<p>${savedMessage[i]}<br>${date}<br>-------------</p>`;
    }
}

send.addEventListener('click', ()=>{
    if (input.value) {
    newMessage.innerHTML = `<p>Your message: ${input.value}</p>`;
    
    let date = new Date();
    let itemName = date.getTime();
    localStorage.setItem(itemName, input.value);
    let message = localStorage.getItem(itemName);
    updateMessage();
    } else if (!input.value){
    newMessage.innerHTML = '<p>It seems you didn\'t write anything yet. Try again!';
    }

});

let clear = document.querySelector('#clear');
clear.addEventListener('click', ()=>{
    localStorage.clear();
    location.reload();

});

