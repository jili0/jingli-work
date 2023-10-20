let postRemark = document.querySelector('.postRemark');
let remark = 'Remark: Hi, you can write and post some comments here. You will see a message box, which shows you the comment that you\'ve just post; And you can see all your comments listed in the Comment Board below, with the local time attached to them. There are also some default messages in the Comment Board. If you click "Clear local", however, all comments that you\'ve posted will be removed. This is because the comment messages are just saved in the localstorage of your computer. I\'m currently learning PHP and mySQL, and later the comments should be saved in a real Database. Let\'s see!';
let text = '';
function printNextLetter () {  
        if (remark.length > text.length) {
            let letterToPrint = remark[text.length];
            postRemark.innerHTML += letterToPrint;
            text += letterToPrint;
        } 
        setTimeout(printNextLetter, 40);
}
printNextLetter();




let input = document.querySelector('#message');
let newMessage = document.querySelector('.js-new-message');
let send = document.querySelector('#send');
let messageContainer =  document.querySelector('.js-message');
let defaultMessage = ["Why don't scientists trust atoms? Because they make up everything!",
"Did you hear about the mathematician who's afraid of negative numbers? He'll stop at nothing to avoid them.",
"Parallel lines have so much in common. It's a shame they'll never meet.",
"How does a penguin build its house? Igloos it together!",
"I told my wife she was drawing her eyebrows too high. She looked surprised.",
"Why did the scarecrow win an award? Because he was outstanding in his field!",
];



function updateMessage() {
    messageContainer.innerHTML = '';

    let keys = Object.keys(localStorage);
    let date = '';
    keys.sort().reverse().forEach((key)=>{
        date = new Date(key / 1).toLocaleDateString() + ', ' +  new Date(key / 1).toLocaleTimeString();
        messageContainer.innerHTML += `<p>${localStorage.getItem(key)}<br>${date}<br>-------------</p>`;
    });
        
   
    for(let i=0; i<defaultMessage.length; i++) {
        let date = new Date().toLocaleDateString() + ', ' +new Date().toLocaleTimeString();
        messageContainer.innerHTML += `<p>${defaultMessage[i]}<br>${date}<br>-------------</p>`;
    }
}

send.addEventListener('click', ()=>{
    if (input.value) {
    newMessage.innerHTML = `<p>Your message: ${input.value}</p>`;
    
    let date = new Date();
    let itemName = date.getTime();
    localStorage.setItem(itemName, input.value);

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

