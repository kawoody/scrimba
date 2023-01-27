const mainEl = document.querySelector("main");

const posts = [
    {
        name: "Vincent van Gogh",
        username: "vincey1853",
        location: "Zundert, Netherlands",
        avatar: "images/avatar-vangogh.jpg",
        post: "images/post-vangogh.jpg",
        comment: "just took a few mushrooms lol",
        likes: 21
    },
    {
        name: "Gustave Courbet",
        username: "gus1819",
        location: "Ornans, France",
        avatar: "images/avatar-courbet.jpg",
        post: "images/post-courbet.jpg",
        comment: "i'm feelin a bit stressed tbh",
        likes: 4
    },
        {
        name: "Joseph Ducreux",
        username: "jd1735",
        location: "Paris, France",
        avatar: "images/avatar-ducreux.jpg",
        post: "images/post-ducreux.jpg",
        comment: "gm friends! which coin are YOU stacking up today?? post below and WAGMI!",
        likes: 152
    }
]

posts.forEach(postObj => addPost(postObj))
addClickImagesToLike();

function addPost(postObj) {
    let postHtml = createPostHtml(postObj)
    mainEl.innerHTML += postHtml;
}

function createPostHtml(postObj) {
    let {name, username, location, avatar, post, comment, likes} = postObj;
    
    return `<div class="post">
                    
                    <header class="post-header">
                        <img class="avatar" src="${avatar}">
                        <div>
                            <h2 class="user-realname">${name}</h2>
                            <p class="location">${location}</p>
                        <div>
                    </header>
                    
                    <img class="post-img" src="${post}">
                    
                    <section class="actions">
                        <img class="action-icon" src="images/icon-heart.png">
                        <img class="action-icon" src="images/icon-comment.png">
                        <img class="action-icon" src="images/icon-dm.png">
                    </section>
                    
                    <p class="like-count">${likes} likes</p>
                    
                    <p class="post-text"><span class="username">${username}</span> ${comment}</p>
                    
                </div>`
}

function addClickImagesToLike() {
    let posts = document.querySelectorAll(".post")
    // postImages.forEach(image => console.log(image));
    
    for (let post of posts) {
        let image = post.querySelector(".post-img");
        let likeCountEl = post.querySelector(".like-count")
        image.addEventListener("dblclick", function(){
            let likeCountText = likeCountEl.textContent
            let likeCountTextNumOnly = likeCountText.slice(0, likeCountText.length-6)
            let numLikes = Number(likeCountTextNumOnly);
            numLikes++
            likeCountEl.textContent = `${numLikes} likes`
        })
        
        
    }
}