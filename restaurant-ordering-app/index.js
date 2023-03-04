import { menuArray } from './data.js'

const orderArray = []

document.addEventListener('click', function(e){
    if (e.target.dataset.addBtn) {
        handleAddItemClick(e.target.dataset.addBtn)
    }
    if (e.target.classList.contains("remove-item")) {
        handleRemoveItemClick(e.target)
    }
    if (e.target.id === "complete-order-btn") {
        document.getElementById('payment-modal').style.display = 'block'
    }
    if (e.target.id === "payment-modal-close") {
        document.getElementById('payment-modal').style.display = 'none'
    }
    if (e.target.id === "payment-btn") {
        handlePaymentClick(e)
    }
    if (e.target.dataset.rating) {
        updateRating(parseInt(e.target.dataset.rating))
    }
})

function handleAddItemClick(itemId) {
    const targetItemObj = menuArray.filter(function(item){
        return item.id === parseInt(itemId)
    })[0]
    orderArray.push(targetItemObj)
    render()
}

function handleRemoveItemClick(removeBtn) {
    const removedItemIndex = parseInt(removeBtn.parentElement.parentElement.id)
    orderArray.splice(removedItemIndex,1)
    render()
}

function handlePaymentClick(e) {
    e.preventDefault()
    orderArray.length = 0;
    orderArray.push("paid")
    document.getElementById('payment-modal').style.display = 'none'
    render()
}

function getMenuHtml() {
    let menuHtml = ''
    
    menuArray.forEach(item => {
        const { name, ingredients, price, emoji, id } = item;
        menuHtml += `
            <div class="menu-item-container">
                <div class="menu-item">
                    <div class="item-icon">${emoji}</div>
                    <div class="item-info">
                        <p class="item-name">${name}</p>
                        <p class="item-ingredients">${ingredients.join(', ')}</p>
                        <p class="item-price">$${price}</p>
                    </div>
                </div>
                <i class="fa-solid fa-circle-plus btn add-to-order-btn" data-add-btn="${id}"></i>
            </div>
        `
    })
    
    return menuHtml
}

function getOrderHtml() {
    let orderItemsHtml = ''
    let orderTotalPrice = 0;
    
    orderArray.forEach(function(orderItemObj,index){
        const { name, price, id } = orderItemObj
        orderItemsHtml += `
            <div class="order-item" id="${index}">
                <div>
                    <p class="order-item-name">${name}</p>
                    <i class="fa-solid fa-circle-xmark btn remove-item"></i>
                </div>
                <p class="order-item-price">$${price}</p>
            </div>
        `
        orderTotalPrice += price
    })
    
    let orderHtml = `
    <h2>Your Order</h2>
        <div class="order-items">
            ${orderItemsHtml}
        </div>
        <div class="order-total">
            <p>Total price:</p>
            <p class="order-total-price">$${orderTotalPrice}</p>
        </div>
        <button id="complete-order-btn">Complete order</button>
    `
    
    return orderHtml
}

function getOrderCompleteHtml() {
    return `
        <div class="payment-msg">Thanks, James! Your order is on its way!</div>
        <div class="rate-your-order">
            <p>How did we do?</p>
            <i class="fa-regular fa-star rating" data-rating="1"></i>
            <i class="fa-regular fa-star rating" data-rating="2"></i>
            <i class="fa-regular fa-star rating" data-rating="3"></i>
            <i class="fa-regular fa-star rating" data-rating="4"></i>
            <i class="fa-regular fa-star rating" data-rating="5"></i>
        </div>
    `
}

function updateRating(ratingChoice) {
    document.querySelectorAll('.rating').forEach(rating => {
        const ratingAmt = parseInt(rating.dataset.rating)
        if (ratingAmt <= ratingChoice) {
            rating.classList.remove('fa-regular')
            rating.classList.add('fa-solid')
        } else {
            rating.classList.remove('fa-solid')
            rating.classList.add('fa-regular')
        }
    })
}

function render() {
    document.getElementById('menu').innerHTML = getMenuHtml()
    if (orderArray[0] === "paid") {
        document.getElementById('order-status').innerHTML = getOrderCompleteHtml()
    } else if (orderArray.length) {
        document.getElementById('order-status').innerHTML = getOrderHtml()
    } else {
        document.getElementById('order-status').innerHTML = ''
    }
}

render()