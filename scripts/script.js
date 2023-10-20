let postRemark = document.querySelector('.js-postRemark');
let remark = 'Hi there,<br><br> welcome to my work place. I\'m doing some experiment here, using what I\'ve learned about web developing. <br><br>You might think that my webpage interesting, or maybe that it still needs a lot of improvement. Well, I know it\'s not perfect, I\'m working on it continuously and I\'m sure it will get better and better. <br><br>For now, please, just feel free to explore my work place, try different buttons and links and test all the functions. <br><br>Last but not the least, I\'m looking forward to get any feedback or suggestion from you. <br><br>Here are my contact details:';
let index = 0;
let array = remark.split(' ');

function printNextLetter () {  
    if (array.length > index) {
        let wordToPrint = array[index];
        postRemark.innerHTML += wordToPrint + ' ';
        index++;
    } 
        setTimeout(printNextLetter, 120); 
}

setTimeout(()=>{
printNextLetter();
}, 1000);



let mail = document.querySelector('.js-mail');
let contactDetail = 'E-mail: jingli0319@gmail.com';
setTimeout(()=>{
mail.innerHTML += contactDetail;
},14500);
