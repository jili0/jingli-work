let index = 0;
let info = "Are you looking for a Web Developer?<br> A team member? <br>Someone who helps you build your own unique website? <br>Yes! You&#39;re here right.";

function printNextWord () {  
  let infoSection = document.querySelector('.js-info');
  let array = info.split(' ');   

  if (array.length > index) {
    let wordToPrint = array[index];
    infoSection.innerHTML += wordToPrint + ' ';
    index++;
  } 
  setTimeout(printNextWord, 200); 
}

function printLink() {
  let linkSection = document.querySelector('.js-link');
  let link = '<a href="#main_intro" class="lightColor" id="main__pageLink">Read More</a>';
  setTimeout(()=>{
  linkSection.innerHTML += link;
  },5000);

}

printNextWord();
printLink();