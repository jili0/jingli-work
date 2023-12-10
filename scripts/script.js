const headerPicture = document.querySelector('.header__picture');

const toggleSidebar = () => {
  const sidebar = document.querySelector('.sidebar');
  if (sidebar.style.right != "0px") {
    sidebar.style.right = "0px";
  } else {
    sidebar.style.right = "-10000px";
  }
};

headerPicture.addEventListener('click', toggleSidebar, false)
