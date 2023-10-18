let redirect = document.querySelector('#redirecting');

function redirecting () {
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