"use strict";


// Pre-load Emoji Source: https://javascript.plainenglish.io/adding-loader-to-your-deployed-projects-d8f389e8c928
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

//set movie arrays and URL variables to use in function and fetch.
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


        $('#form-submit').click(function (e) {
        const movieTitle = $('#movie-name').value;
        const movieRating = $('#rating').value;
        const movieToPost = {
            title: movieTitle,
            rating: movieRating
        }

        const postOptions = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(movieToPost)
        };

//
        function getBooks() {
            fetch(movieURL).then(resp => resp.json()).then(data => console.log(data));
        }
getBooks();
        });

