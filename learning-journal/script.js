import { posts } from './posts.js'

function render() {
    if (document.URL.includes('index.html')) {
        document.getElementById('posts-list').innerHTML += getInitialPostsListHtml()
        document.getElementById('posts-list').insertAdjacentElement("afterend", getViewMoreEl())
        document.getElementById('posts-list').insertAdjacentHTML("afterend", getExtraPostsListHtml())
        document.getElementById('viewMoreBtn').addEventListener("click", function() {
            if (document.getElementById('hidden-posts-list').style.display === "none"){
                document.getElementById('hidden-posts-list').style.display = "grid"
                document.getElementById('viewMoreBtn').textContent = "View Less"
            } else {
                document.getElementById('hidden-posts-list').style.display = "none"
                document.getElementById('viewMoreBtn').textContent = "View More"
            }
        })
    }

    if (document.URL.includes('about.html') || document.URL.includes('post.html')) {
        document.getElementById('posts-list-3up').innerHTML = ` <h2>Recent posts</h2> ${getPostsList3UpHtml()}`
    }
}

render()

function getInitialPostsListHtml() {
    let postsListHtml = ""
    
    posts.forEach( (post,i) => {
        
        if (i < 6) {
            postsListHtml += getPostHtml(post)
        }
        
    })
    
    return postsListHtml
}

function getExtraPostsListHtml() {
    let wrapper = document.createElement("div")
    wrapper.classList.add("posts-list")
    wrapper.id = "hidden-posts-list"
    
    posts.forEach( (post,i) => {
        if (i >= 6) {
            wrapper.innerHTML += getPostHtml(post)
        }  
    })
    
    return wrapper.outerHTML
}

function getViewMoreEl() {
    let viewMoreEl = document.createElement("div")
    viewMoreEl.textContent = "View More"
    viewMoreEl.classList.add("view-more")
    viewMoreEl.id = "viewMoreBtn"
    
    return viewMoreEl
}

function getPostsList3UpHtml() {
    let postsListHtml = ""
    
    for (let i = 0; i < 3; i++) {
        postsListHtml += getPostHtml(posts[i])
    }
    
    return postsListHtml
}

function getPostHtml(post) {
    const {title, date, blurb, imgSrc, imgAlt} = post
    return `<div class="post-card">
                <h3 class="post-card-title">${title}</h3>
                <img class="post-card-img" src="${imgSrc}" alt="${imgAlt}">
                <p class="date post-card-date">${date}</p>
                <p class="post-card-blurb">${blurb}</p>
            </div>`
}

function hideExtraPosts(postsList) {
    
}