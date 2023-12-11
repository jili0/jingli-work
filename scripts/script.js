const headerPicture = document.querySelector('.header__picture');
const sidebar = document.querySelector('.sidebar');
const toggleSidebar = () => {
  if (sidebar.style.right != "0px") {
    sidebar.style.right = "0px";
  } else {
    sidebar.style.right = "-10000px";
  }
};
headerPicture.addEventListener('click', toggleSidebar, false);

const main = document.querySelector('main');
const hideSidebar = () => {
  if (sidebar.style.right = "0px") {
    sidebar.style.right = "-10000px";
  }
};
const test = () => {
  console.log('test test');
};
main.addEventListener('click', hideSidebar, false);