function getMovies(){
    fetch("https://boom-protective-bambiraptor.glitch.me/movies").then(resp => resp.json()).then(data => console.log(data));
}