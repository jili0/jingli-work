import { blogs } from "./blog.js";

export function addBlogs() {
    let blogHtml = '';
    let blogContainer = document.querySelector('.blogs');
    blogs.forEach((blogs)=>{
        blogContainer.innerHTML += `
        <div class="blog">
        <p class="blogTitle">${blogs.title}</p>
        <p class="blogTime">${blogs.time}</p>
        <p class="blogInhalt">${blogs.inhalt}</p>
    </div>
        `;
    });


}
