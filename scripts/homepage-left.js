import {remark} from "./remark.js";

let index = 0;

export function printNextWord () {  
  let postRemark = document.querySelector('.js-postRemark');
  let array = remark.split(' ');   

  if (array.length > index) {
    let wordToPrint = array[index];
    postRemark.innerHTML += wordToPrint + ' ';
    index++;
  } 
  setTimeout(printNextWord, 120); 
}

export function printMail() {
  let mail = document.querySelector('.js-mail');
  let contactDetail = 'E-mail: jingli0319@gmail.com';
  setTimeout(()=>{
  mail.innerHTML += contactDetail;
  },14000);

}

