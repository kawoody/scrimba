import {renderMovieList, getMovieHtml, checkWatchlistForMovie, removeFromWatchlist, addButtonEvent} from './utils.js'

function renderWatchlist() {
    if (localStorage.getItem('watchlist')) {
        const currentWatchlist = JSON.parse(localStorage.getItem('watchlist'))
        const movieList = document.getElementById('movie-list')
        
        if (currentWatchlist.length) {
            movieList.classList.remove('movie-list-empty')
            movieList.innerHTML = ""
            renderMovieList(currentWatchlist, movieList)
        } else {
            movieList.classList.add('movie-list-empty')
            movieList.innerHTML = `
                <h2>Your watchlist is looking a little empty…</h2>
                <div class="empty-watchlist-flex">
                    <img src="img/plus-dark.svg">
                    <h2><a href="index.html">Let's add some movies!</a></h2>
                </div>`
        }
    }
}

renderWatchlist()