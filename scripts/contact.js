function onSubmit() {
    const yourName = document.querySelector('#name').value;
    const yourMessage = document.querySelector('#message').value;
    localStorage.setItem(yourName, yourName);
    localStorage.setItem(yourMessage, yourMessage);
}