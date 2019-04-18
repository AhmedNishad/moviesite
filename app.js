let api_key = 'e11af9ef78918c9a8ba4700aaa29147f';

let urlExample = 'https://api.themoviedb.org/3/movie/550?api_key=' + api_key;

let url = 'https://api.themoviedb.org/3/discover/movie?api_key=e11af9ef78918c9a8ba4700aaa29147f&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&without_genres=horror'



function getMovies(){
     fetch(url)
    .then(response => response.json())
    .then(data=>{
        //console.log(data)
        createMovies(data.results);
    })
    .catch(error=> console.log(error));

    
}

getMovies()


function createMovieElement(movie){
    let featuredElement = document.querySelector('.movies');

    let cont = document.createElement('div');
    let title = document.createElement('h2');
    let genre = document.createElement('h3');
    let image = document.createElement('img');

    
    title.textContent = movie.title;
    genre.textContent = movie.release_date;

    image.setAttribute('src','https://image.tmdb.org/t/p/w500' + movie.poster_path)


    // Adding all created elements to parent element
    
    cont.appendChild(image);
    cont.appendChild(title);
    cont.appendChild(genre);
    cont.classList.add('movie');
    currentMovies.push(cont)
    featuredElement.appendChild(cont);
}


function createMovies(movies){
    let no_of_movies = 6;
    //console.log("creating movie");
    //console.log(movies[2])

    console.log(suspendedMovies.length)
    
   
        for(let i=suspendedMovies.length; i< suspendedMovies.length + no_of_movies; i++){
            createMovieElement(movies[i]);

        }
    
}

let currentMovies = []

let next = document.querySelector('#next');
    next.addEventListener('click', nextMovies)

let back = document.querySelector('#back');
    back.addEventListener('click', backMovies)

let suspendedMovies = [];

function nextMovies(){
    
    //let currentMoviesNotInSuspended = currentMovies.slice(currentMovies.length-5, currentMovies.length)
    
    back.classList.remove('hidden')

    currentMovies.forEach(event =>{
        event.classList.add('hidden');
    })
    getMovies();
    let lastMovie = currentMovies.pop();
    suspendedMovies.push(lastMovie);
    console.log(suspendedMovies)
}

function backMovies(){

}