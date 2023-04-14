import Dog from './Dog.js'
import dogs from './data.js'

const dogsArr = []
const currentDog = []

function start() {
    // Create dogs
    for (let dog of dogs) {
        dogsArr.push(new Dog(dog))
    }

    // Create event listeners
    document.getElementById('prev-btn').addEventListener('click', prevDog)
    document.getElementById('like-btn').addEventListener('click', reactLike)
    document.getElementById('reject-btn').addEventListener('click', reactReject)
    document.getElementById('next-btn').addEventListener('click', nextDog)

    // first render
    render()
}

function setCurrentDog() {
    currentDog.pop()
    currentDog.push(dogsArr[0])

    return currentDog[0]
}

function prevDog() {
    dogsArr.unshift(dogsArr.pop())
    render()
}

function nextDog() {
    dogsArr.push(dogsArr.shift())
    render()
}

function reactLike() {
    currentDog[0].switchLike()
    setTimeout(nextDog, 1000)
}

function reactReject() {
    currentDog[0].switchReject()
    setTimeout(nextDog, 1000)
}

function render() {
    document.getElementById('dog-card').innerHTML = setCurrentDog().getDogHtml()
}

start()