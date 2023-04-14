class Dog {
    constructor(data) {
        Object.assign(this, data)
    }

    switchLike() {
        if (!this.hasBeenLiked) {
            document.getElementById('choice-badge').innerHTML = `<img src="images/badge-like.png">`
            this.hasBeenLiked = true
            this.hasBeenSwiped = true
        } else {
            document.getElementById('choice-badge').innerHTML = ""
            this.hasBeenLiked = false
            this.hasBeenSwiped = false
        }
    }

    switchReject() {
        if (!this.hasBeenSwiped || this.hasBeenLiked) {
            document.getElementById('choice-badge').innerHTML = `<img src="images/badge-nope.png">`
            this.hasBeenLiked = false
            this.hasBeenSwiped = true
        } else {
            document.getElementById('choice-badge').innerHTML = ''
            this.hasBeenLiked = false
            this.hasBeenSwiped = false
        }
    }

    getDogHtml() {
        const {name, avatar, age, bio, hasBeenSwiped, hasBeenLiked} = this
        return `
            <img class="dog-photo" src="${avatar}">
            <div class="dog-info">
                <p class="dog-name">${name}, ${age}</p>
                <p class="dog-quote">${bio}</p>
            </div>
            <div class="choice-badge" id="choice-badge">${
                hasBeenLiked ? `<img src="images/badge-like.png">`
                : hasBeenSwiped ? `<img src="images/badge-nope.png">`
                : ``
            }</div>
            `
    }
}

export default Dog