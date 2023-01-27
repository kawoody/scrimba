// import {addToWatchlist, toggleWatchlistButton} from './index.js'

//Get the HTML for the movieList container
async function renderMovieList(movieIdListArray, movieListContainer) {
    
    // Get the individual HTML for each movie
    for (const movieId of movieIdListArray) {
        
        //Retrieve individual movie information
        const res = await fetch(`https://www.omdbapi.com/?apikey=490897fc&i=${movieId}`)
        const data = await res.json()
        
        //Pass movie information to function that gets individual movie HTML and add it to the movieList container
        movieListContainer.innerHTML += getMovieHtml(data)
    }
    addButtonEvent()
}

//Gets individual movie HTML
function getMovieHtml(data) {
    
    //Destructure incoming data
    const {Title, Runtime, Genre, Plot, imdbRating, imdbID} = data
    let {Poster} = data
    
    //Placeholder image for movies with no poster
    if (Poster === "N/A") {
        Poster = "img/no-poster.png"
    }
    
    //Return movie HTML
    return `<div class="movie-container">
                <img class="movie-artwork" alt="Poster for ${Title}" src="${Poster}">
                <div class="movie-info">
                    <div class="movie-title-rating movie-info-inner-flex">
                        <h3 class="movie-title">${Title}</h3>
                        <p class="movie-rating">⭐&nbsp;${imdbRating}</p>
                    </div>
                    <div class="movie-details movie-info-inner-flex">
                        <p class="movie-runtime">${Runtime}</p>
                        <p class="movie-genres">${Genre}</p>
                        ${checkWatchlistForMovie(imdbID)}
                    </div>
                    <p class="movie-blurb">${Plot}</p>
                </div>
            </div>`
}

//Checks if a movie is on the watchlist or not and returns either the add or remove button
function checkWatchlistForMovie(imdbID) {
    if (!localStorage.getItem('watchlist')) {
        return `<button class="btn add-btn" type="button" id=${imdbID}>Add to Watchlist</button>`
    } else {
        const watchlist = JSON.parse(localStorage.getItem('watchlist'))
        if (watchlist.includes(imdbID)) {
            return `<button class="btn remove-btn" type="button" id=${imdbID}>Remove</button>`
        } else {
            return `<button class="btn add-btn" type="button" id=${imdbID}>Add to Watchlist</button>`
        }
    }
}

function addButtonEvent() {
    document.querySelectorAll('.movie-details').forEach(movie => movie.addEventListener('click', e => {
        if (e.target.tagName != 'BUTTON') {
            return;
        }
        if (e.target.classList.contains('add-btn')) {
            addToWatchlist(e.target)
        } else if (e.target.classList.contains('remove-btn')) {
            removeFromWatchlist(e.target)
            toggleWatchlistButton(e.target)
        }
    }))
}

function removeFromWatchlist(btn) {
    //Set watchlist to localStorage
    const watchlist = JSON.parse(localStorage.getItem('watchlist'))
    
    //remove btn.id from watchlist
    const allOtherMovies = watchlist.filter(movie => movie != btn.id)
    
    //reset localStorage
    localStorage.setItem('watchlist', JSON.stringify(allOtherMovies))
}

//Add movies to the watchlist
function addToWatchlist(btn) {
    //Create an empty watchlist array
    let watchlist = []
    //If there is nothing in localStorage, push the movie to the watchlist and set localStorage
    if (!localStorage.getItem('watchlist')) {
        watchlist.push(btn.id)
        toggleWatchlistButton(btn)
        localStorage.setItem('watchlist', JSON.stringify(watchlist))
    //If localStorage already has a value, retrieve it, push the new movie only if it's not already in the array, and set localStorage
    } else {
        watchlist = JSON.parse(localStorage.getItem('watchlist'))
        if (!watchlist.includes(btn.id)) {
            watchlist.push(btn.id)
            toggleWatchlistButton(btn)
            localStorage.setItem('watchlist', JSON.stringify(watchlist))
        }
    }   
}

//Toggles the watchlist button by setting the class, changing text content, and updating onClick
function toggleWatchlistButton(btn) {
    if (btn.classList.contains('add-btn')) {
        btn.classList.remove('add-btn')
        btn.classList.add('remove-btn')
        btn.textContent = 'Remove'
    } else {
        btn.classList.remove('remove-btn')
        btn.classList.add('add-btn')
        btn.textContent = 'Add to watchlist'
    }
}

export {renderMovieList, getMovieHtml, checkWatchlistForMovie, removeFromWatchlist, addButtonEvent, addToWatchlist, toggleWatchlistButton}