let input = document.querySelector('#message');
let newMessage = document.querySelector('.js-new-message');
let send = document.querySelector('#send');
let clear = document.querySelector('#clear');
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
    let array = [];
    for (let i = 0; i < length; i++) {
        let item = localStorage.getItem(keys[i]);
        let date = new Date(keys[i] / 1);
        console.log(date.toUTCString());

        array.push(item); 
        array.sort();  
        array.reverse();                                                                                                         
        console.log(`array: ${array}`);
    }
    for(let i=0; i<array.length; i++) {
        messageContainer.innerHTML += `<p>${array[i]}<br>-------------</p>`;
    }
    for(let i=0; i<savedMessage.length; i++) {
        messageContainer.innerHTML += `<p>${savedMessage[i]}<br>-------------</p>`;
    }
}

send.addEventListener('click', ()=>{
    newMessage.innerHTML = `<p>Newest Message: <br>${input.value}</p>`;
    
    let date = new Date();
    let itemName = date.getTime();
    localStorage.setItem(itemName, input.value);
    let message = localStorage.getItem(itemName);

    updateMessage();
    console.log(localStorage);
});

clear.addEventListener('click', ()=>{
    localStorage.clear();
    location.reload();

});


let local = document.querySelector('#local');
local.addEventListener('click',()=>{
    console.log(localStorage);
});
