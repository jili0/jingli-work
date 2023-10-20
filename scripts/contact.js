document.querySelector('#name').addEventListener("change", function(){
    let yourName = document.querySelector('#name').value;
    let showName = document.querySelector('#showName');
    showName.innerText = `Your name: ${yourName}`;
});

document.querySelector('#message').addEventListener("change", function(){
    let yourMessage = document.querySelector('#message').value;
    let showMessage = document.querySelector('#showMessage');
    showMessage.innerText = `Your message: ${yourMessage}`;
});

document.querySelector('#submit').addEventListener('click', ()=>{
    location. href = "https://jingli.work/contact-send.html";
});

document.querySelector('#redirect').addEventListener('click', ()=>{
    location. href = "https://jingli.work";
});