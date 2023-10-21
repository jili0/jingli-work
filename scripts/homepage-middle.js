let blogs = [
    {
        title: 'Candlelit Dinner',
        time: '20.10.2023, 20:32:25',
        inhalt: 'A cozy, dimly lit room is adorned with flickering candles. The warm, golden glow enhances the atmosphere, casting soft shadows and creating an intimate setting that\'s perfect for a romantic evening.'
    },
    {
        title: 'Autumn in the Park',
        time: '20.10.2023, 20:32:25',
        inhalt: 'As the leaves turn from green to shades of red, orange, and gold, the park becomes a tapestry of color. The sound of leaves crunching beneath your feet, the crisp air, and the scent of fallen foliage make it a season of pure enchantment.'
    },
    {
        title: 'Martin Luther King Jr.',
        time: '20.10.2023, 20:32:25',
        inhalt: 'In the end, we will remember not the words of our enemies, but the silence of our friends.'
    }
];

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