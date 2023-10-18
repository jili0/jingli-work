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