let api_key = 'e11af9ef78918c9a8ba4700aaa29147f';

let urlExample = 'https://api.themoviedb.org/3/movie/550?api_key=' + api_key;

let url = 'https://api.themoviedb.org/3/discover/movie?api_key=e11af9ef78918c9a8ba4700aaa29147f&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1'



let no_of_movies = 4;

let featuredElement = document.querySelector('.movies');


function getMovies(){
     fetch(url)
    .then(response => response.json())
    .then(data=>{
        console.log(data)
        createMovies(data.results);
    })
    .catch(error=> console.log(error));

    
}

getMovies()



function createMovieElement(movie){
    let cont = document.createElement('div');
    let title = document.createElement('h2');
    let genre = document.createElement('h3');
    let image = document.createElement('img');

    
    title.textContent = movie.title;
    console.log(movie.genre_ids[0].name);
    genre.textContent = movie.release_date;

    image.setAttribute('src', './img/propic.jpg')


    // Adding all created elements to parent element
    cont.appendChild(title);
    cont.appendChild(genre);
    cont.appendChild(image);
    cont.classList.add('movie');
    featuredElement.appendChild(cont);
}


function createMovies(movies){
    console.log("creating movie");
    console.log(movies[2])
    
    
    for(let i=0; i< 4; i++){
        createMovieElement(movies[i]);
    }
}