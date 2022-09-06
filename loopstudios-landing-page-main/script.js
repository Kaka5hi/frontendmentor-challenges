// Content populate on website
const container = document.querySelector('.creation-section-content')
const data =[
    {
        img:"./images/desktop/image-deep-earth.jpg",
        firstWord:"Deep",
        secondWord:"earth"
    },
    {
        img:"./images/desktop/image-night-arcade.jpg",
        firstWord:"Night",
        secondWord:"Arcade"
    },
    {
        img:"./images/desktop/image-soccer-team.jpg",
        firstWord:"Soccer",
        secondWord:"team VR"
    },
    {
        img:"./images/desktop/image-grid.jpg",
        firstWord:"The",
        secondWord:"Grid"
    },
    {
        img:"./images/desktop/image-from-above.jpg",
        firstWord:"From up",
        secondWord:"Above VR"
    },
    {
        img:"./images/desktop/image-pocket-borealis.jpg",
        firstWord:"Pocket",
        secondWord:"borealis"
    },
    {
        img:"./images/desktop/image-curiosity.jpg",
        firstWord:"The",
        secondWord:"curiosity"
    },
    {
        img:"./images/desktop/image-fisheye.jpg",
        firstWord:"Make it",
        secondWord:"fisheye"
    }
]

const items = data.map( item => {
    return `<div class="creation-img">
        <img src="${item.img}" alt="${item.firstWord} ${item.secondWord}">
        <h3>${item.firstWord}<br>${item.secondWord}</h3>
      </div>`
})
container.innerHTML = items.join('')


// Hamburger menu toggle
const hamburgerMenu = document.getElementById('hamburger')
const navLink = document.querySelector('.nav-links')

hamburgerMenu.addEventListener("click", () => {
    navLink.classList.toggle('show')
})
