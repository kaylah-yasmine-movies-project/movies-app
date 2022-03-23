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
                html += `<div style="width: 20rem;">`
                html += `<div class="card-body text-white bg-dark mb-5 px-0  shadow rounded">`
                html += `<h2 class="card-header mx-0 text-center" class="title">${movie.title}</h2>`
                html += `<div class="rating">Rating: ${movie.rating}</div>`
                html += `<label for="editRating">Edit Rating:</label>`
                html += `<input id="editRating" type="text" class="rounded mb-2 mx-2" style="width: 5rem;">`
                html += `<button class="editButton" class="btn btn-sm" data-id="${movie.id}">Edit</button>`
                html += `<button class="d-grid col-12 btn btn-info block bg-secondary text-white" id="deleteMovie" data-id="${movie.id}">Delete Movie</button></div></div>`

            }

            console.log(movies)
            $('#container').html(html);
        }).then(data => {
            // console.log(data)
            document.querySelector(".preload").style.display = "none"//stop the load
        })
    }
    movieLover();

        // Function that allows the user to add a movie to the page without refreshing
        $('#form-submit').click(function (e) {
            const movieTitle = $('#movie-name').val();
            const movieRating = $('#rating').val();
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
                    fetch(movieURL , postOptions).then(resp => resp.json()).then(data => console.log(data)).then(movieLover);
        });

    // Function that allows user to delete a movie without refreshing the page
            function deleteMovie(id) {
                // let movieId = ${movie.id

                fetch(movieURL + '/' + id, {
                    method: 'DELETE',
                    headers: {
                        'Content-Type': 'application/json'
                    }
                }).then(response => response.json()).then(data => console.log(data)).then(movieLover);



        }


            $('#container').on('click','#deleteMovie',function (e) {
                deleteMovie(e.target.dataset.id)
            })

        //Function that allows user to edit movie rating
        function editRating(id){
            let newRating = $('#editRating').val();
           let newMovieRating = {
			   rating: newRating
		   }

            const patchOptions = {
                method: 'PATCH',
                headers: {
                    'Content-Type' : 'application/json'
                },
                body: JSON.stringify(newMovieRating)
            }

            fetch(movieURL + '/' +id, patchOptions).then(response => response.json()).then(data => console.log(data)).then(movieLover);

            }

            $('#container').on('click','.editButton', function(e){
                // console.log(e)
                editRating(e.target.dataset.id)
            })




