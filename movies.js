"use strict"
/**********************  loader ***********************/

//https://javascript.plainenglish.io/adding-loader-to-your-deployed-projects-d8f389e8c928
const loader = document.querySelector('.preload');
const emoji = loader.querySelector('.emoji');

const emojis = ["🕐", "🕜", "🕑","🕝", "🕒", "🕞", "🕓", "🕟", "🕔", "🕠", "🕕", "🕡", "🕖", "🕢",  "🕗", "🕣", "🕘", "🕤", "🕙",  "🕥", "🕚", "🕦",  "🕛", "🕧"];

const interval = 125;

const loadEmojis = (arr) => {
    setInterval(() => {
        emoji.innerText = arr[Math.floor(Math.random() * arr.length)];
        //console.log(Math.floor(Math.random() * arr.length))
    }, interval);
}

const init = () => {
    loadEmojis(emojis);
}
init();


    let movieArr = [];
    let movieURL ='https://boom-protective-bambiraptor.glitch.me/movies';
    //Create function movielover to include the fetch and movie data we want to append to html.
    function movieLover () {
        fetch(movieURL).then(response => response.json()).then(movies => {
            movieArr = movies;
            let html = '';

            for (let movie of movies) {
                html += `<h1 class=title>${movie.title}</h1>`
                html += `<div class="rating">${movie.rating}</div>`
            }

            console.log(movies)
            $('#container').append(html);
        }).then(data => {
            // console.log(data)
            document.querySelector(".preload").style.display = "none"//stop the load
        })
    }
    movieLover();


