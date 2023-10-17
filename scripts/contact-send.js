let redirect = document.querySelector('#redirecting');
let message = document.querySelector('#savedMessage');
const savedName = localStorage.getItem('yourName');
const savedMessage = localStorage.getItem('yourMessage');

function redirecting () {
  message.innerHTML += `Your Name: ${savedName} <br> Your Message: ${savedMessage}`;
  setTimeout(()=>{
    window.location.href = "http://jingli.work";
}, 4000)
  let i = 0;
 setInterval(()=>{
    redirect.innerHTML += '. ';
    i++;
  },1000)

  if(i >= 3){
    clearInterval(myInterval);
  }
}
redirecting();