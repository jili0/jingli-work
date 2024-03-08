const data = [
  {
    imgSrc: "https://picsum.photos/800/800",
    title: "My Notizbuch",
    description: "This is my online notizbuch",
    href: "https://jili0.github.io/notes/",
  },
  {
    imgSrc: "images/portfolio_400_477.png",
    title: "My Portfolio",
    description: "This is my portfolio",
    href: "https://jili0.github.io/portfolio/",
  },
  {
    imgSrc: "images/MoodPadImg_800_800.png",
    title: "MoodPad",
    description:
      "Each user, after logging in, can create, read, update and write his or her posts here. The user can also change the user name and the profile picture. Everything is saved in Firebase and can be synchronized.",
    href: "https://jili0.github.io/mood-pad/",
  },
  {
    imgSrc: "https://picsum.photos/800/800",
    title: "Jili Blog",
    description: "I&apos;m still working on this project.",
    href: "https://jiliblog.netlify.app/",
  },
  {
    imgSrc: "images/toDoList.png",
    title: "To do List",
    description:
      "A To-Do-List, writing in vanilla javascript.",
    href: "https://jili0.github.io/to-do-list/",
  },
];

const projectsContainer = document.querySelector(".projectsContainer");
const projectsArray = data.map(
  ({
    imgSrc,
    title,
    description,
    href,
  }) => `<div class="col-12 col-md-6 col-lg-4 col-xl-3 d-flex justify-content-center position-relative">
  <div class="card pb-5 my-3" style="width: 18rem; height: 60vh;">
<img
  src=${imgSrc}
  target="_blank"
  class="card-img-top h-100 object-fit-contain"
  style="background-color: #fff; object-position:top;"
  alt=${title}
/>
<div class="card-body position-absolute bottom-0 left-0 right-0 bg-light col-12">
  <h5 class="card-title">${title}</h5>
  <p class="card-text" style="height: 10vh; overflow: auto">
  ${description}
  </p>
  <a class="btn btn-primary" href=${href} target="_blank">Go to ${title}</a>
</div>
</div>
</div>`
);

projectsContainer.innerHTML = projectsArray.join("");
