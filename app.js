let api_key = 'e11af9ef78918c9a8ba4700aaa29147f';

let urlExample = 'https://api.themoviedb.org/3/movie/550?api_key=' + api_key;

let url = 'https://api.themoviedb.org/3/discover/movie?api_key=e11af9ef78918c9a8ba4700aaa29147f&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&without_genres=horror'



function getMovies(){
     fetch(url)
    .then(response => response.json())
    .then(data=>{
        //console.log(data)
        initializeMovies(data.results);
    })
    .catch(error=> console.log(error));

    
}

getMovies()


let no_of_movies = 6;

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
    if(currentMovies.length < no_of_movies){
        if(currentMovies.length<2 && currentMovies.length > 1){
            currentMovies[0].place = 1;
        }
        currentMovies.push(cont)
    }else{
        suspendedMovies.push(cont)
    }
    hideSuspendedMovies();
    featuredElement.appendChild(cont);
}




function createMovie(movies){
    
        createMovieElement(movies);
    
}

function initializeMovies(movies){
    
    //console.log("creating movie");
    //console.log(movies[2])

    console.log(suspendedMovies.length)
    
        for(let i=0; i < 20; i++){
            createMovie(movies[i])
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
    console.log(currentMovies[0].place)
    back.classList.remove('hidden')

    let firstMovie = currentMovies.shift()
    firstMovie.classList.add('hidden');
    suspendedMovies.unshift(firstMovie);

    let lastMovie = suspendedMovies.pop();
    if(lastMovie.place){
        console.log('last movie reached')
        next.addClassList('hidden')
    }
    currentMovies.push(lastMovie);
    lastMovie.classList.remove('hidden')
}

function hideSuspendedMovies(){
    suspendedMovies.forEach(element => {
        element.classList.add('hidden')
    });
}

function backMovies(){

    next.classList.remove('hidden')

    let firstMovie = currentMovies.pop()
    firstMovie.classList.add('hidden');
    suspendedMovies.push(firstMovie);

    let lastMovie = suspendedMovies.shift();
    currentMovies.unshift(lastMovie);
    lastMovie.classList.remove('hidden')
}

let more = document.querySelector('#more')

more.addEventListener('click', showAll);

let less = document.querySelector('#less');

less.addEventListener('click', showLess);

function showAll(){
    next.classList.add('hidden')
    back.classList.add('hidden')
    
    suspendedMovies.forEach(element=> element.classList.remove('hidden'))
    more.classList.add('hidden');
    less.classList.remove('hidden');
}

function showLess(){
    next.classList.remove('hidden')
    back.classList.remove('hidden')

    suspendedMovies.forEach(element=> element.classList.add('hidden'));
    more.classList.remove('hidden');
    less.classList.add('hidden')
}

