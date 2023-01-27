import {renderMovieList, getMovieHtml, checkWatchlistForMovie, removeFromWatchlist, addButtonEvent} from './utils.js'

// Search for movies
document.getElementById('search-btn').addEventListener('click', async e => {
    
    //Grab DOM elements
    const movieList = document.getElementById('movie-list')
    const searchInput = document.getElementById('search-input')
    
    //prevent page reload
    e.preventDefault()
    
    //clear placeholder, if there
    movieList.classList.remove('movie-list-empty')
    
    //Reset the movie list on each search
    movieList.innerHTML = ""
    
    //Retrieve search results from API
    const res = await fetch(`https://www.omdbapi.com/?apikey=490897fc&s=${searchInput.value}`)
    const data = await res.json()
    const movieSearchResults = data.Search.map(movie => movie.imdbID)
    
    //Pass search results & empty movieList container to function that gets all the HTML
    renderMovieList(movieSearchResults, movieList)
})
