const cart_items = document.querySelector('#cart .cart-items');


const parentNode = document.getElementById('music-content');


window.addEventListener('load', () => {
    console.log('loaded');
    axios.get('http://localhost:3000/cart').then(carProducts => {
        showProductsInCart(carProducts.data);
       // document.querySelector('#cart').style = "display:block;"

    })
    const objUrlParams = new URLSearchParams(window.location.search);
    const page = objUrlParams.get('page') || 1;
    console.log('checking page',page);
    axios.get(`http://localhost:3000/shop?page=${page}`).then((products) => {
        console.log(products)
        products.data.products.forEach(product => {
            const productHtml = `
                <div id="album-${product.id}">
                    <h3>${product.title}</h3>
                    <div class="image-container">
                        <img class="prod-images" src=${product.image} alt="">
                    </div>
                                    <div class="prod-details">
                        <span>$<span>${product.price}</span></span>
                        <button class="shop-item-button" type='button'>ADD TO CART</button>
                    </div>
                </div>`
            parentNode.innerHTML += productHtml

        })
        showPagination(products.data);
    })

})

document.addEventListener('click', (e) => {

    if (e.target.className == 'shop-item-button') {
        const prodId = Number(e.target.parentNode.parentNode.id.split('-')[1]);
        axios.post('http://localhost:3000/cart', { productId: prodId }).then(data => {
            if (data.data.error) {
                throw new Error('Unable to add product');
            }
            showNotification('product has been added to cart', false);
        })
            .catch(err => {
                console.log(err);
                showNotification(err, true);
            });

    }
    if (e.target.className == 'cart-btn-bottom' || e.target.className == 'cart-bottom' || e.target.className == 'cart-holder') {
        axios.get('http://localhost:3000/cart').then(carProducts => {
            showProductsInCart(carProducts.data);
            document.querySelector('#cart').style = "display:block;"

        })
    }
    if (e.target.className == 'cancel') {
        document.querySelector('#cart').style = "display:none;"
    }
    if (e.target.className == 'purchase-btn') {
        if (parseInt(document.querySelector('.cart-number').innerText) === 0) {
            alert('You have Nothing in Cart , Add some products to purchase !');
            return
        }
        axios.post('http://localhost:3000/post-order')
        //.then(() => deleteCartItem(e,prodId))
        .then((result)=>{
            console.log(result);
            showNotification( `Order sucessfully placed with ${result.data[0].orderId}`,false);
        }).catch((err)=>{
            console.log(err);
            showNotification(err, true);
        })
        alert('Thanks for the purchase')
        cart_items.innerHTML = "";
        document.querySelector('.cart-number').innerText = 0
        document.querySelector('#total-value').innerText = 0;
    }
})

let total_cart_price = document.querySelector('#total-value').innerText;

function showProductsInCart(listofproducts) {
    cart_items.innerHTML = "";
    total_cart_price = 0;
console.log('total value ',document.querySelector('#total-value').innerText);
    document.querySelector('.cart-number').innerText = 0;
    listofproducts.forEach(product => {
        const id = `album-${product.id}`;
        const name = product.title;
        const img_src = product.image;
        const price = product.price;
        document.querySelector('.cart-number').innerText = parseInt(document.querySelector('.cart-number').innerText) + 1;
        total_cart_price = parseFloat(total_cart_price) + parseFloat(price)
        total_cart_price = total_cart_price.toFixed(2)
        document.querySelector('#total-value').innerText = `${total_cart_price}`;
        const cart_item = document.createElement('div');
        cart_item.classList.add('cart-row');
        cart_item.setAttribute('id', `in-cart-${id}`);
        cart_item.innerHTML = `
        <span class='cart-item cart-column'>
        <img class='cart-img' src="${img_src}" alt="">
            <span>${name}</span>
        </span>
        <span class='cart-price cart-column'>${price}</span>
        <form onsubmit='deleteCartItem(event, ${product.id},${price})' class='cart-quantity cart-column'>
            <input type="text" value="1">
            <button>REMOVE</button>
        </form>
        <form onsubmit='orderItem(event, ${product.id},${price})' class='cart-quantity cart-column'>
       
        <button>Order Now</button>
    </form>`
        cart_items.appendChild(cart_item)
    })
}
function deleteCartItem(e, prodId,price) {
    e.preventDefault();
    document.querySelector('.cart-number').innerText = parseInt(document.querySelector('.cart-number').innerText) - 1;
    total_cart_price = parseFloat(total_cart_price) - parseFloat(price)
    console.log('checking total cart price 1',total_cart_price);
    total_cart_price = total_cart_price.toFixed(2)
    console.log('checking total cart price',total_cart_price);
    document.querySelector('#total-value').innerText = `${total_cart_price}`;
    axios.post('http://localhost:3000/cart/delete-item', { productId: prodId })
        .then(() => removeElementFromCartDom(prodId))
}


function orderItem(e, prodId,price) {
    e.preventDefault();
    console.log(prodId);
    axios.post('http://localhost:3000/post-order', { productId: prodId })

        .then((result)=>{
            console.log('456',result.data);
            showNotification(` Order sucessfully placed with OrderId ${result.data[0].orderId}`,false);
            deleteCartItem(e,prodId,price);
        }).catch((err)=>{
            console.log(err);
            showNotification(err, true);
        })
}

function showNotification(message, iserror) {
    const container = document.getElementById('container');
    const notification = document.createElement('div');
    notification.style.backgroundColor = iserror ? 'red' : 'green';
    notification.classList.add('notification');
    notification.innerHTML = `<h4>${message}<h4>`;
    container.appendChild(notification);
    setTimeout(() => {
        notification.remove();
    }, 2500)
}

function removeElementFromCartDom(prodId) {
    document.getElementById(`in-cart-album-${prodId}`).remove();
    showNotification('Succesfuly removed product')
}



const pagination = document.querySelector('.pagination');

function showPagination({
    currentPage,
    hasNextPage,
    nextPage,
    hasPreviousPage,
    previousPage,
    lastPage
}) {
    pagination.innerHTML = "";

    if (hasPreviousPage) {

        const btn2 = document.createElement('button');
        btn2.innerHTML = previousPage;
        btn2.addEventListener('click', () => {
            parentNode.innerHTML = "";
            getProducts(previousPage)
        });
        pagination.appendChild(btn2);

    }
    const btn1 = document.createElement('button');
    btn1.innerHTML = `<h3>${currentPage}</h3>`;
    btn1.addEventListener('click', () => {
        parentNode.innerHTML = "";

        getProducts(currentPage)
    });
    pagination.appendChild(btn1);

    if (hasNextPage) {

        const btn3 = document.createElement('button');
        btn3.innerHTML = nextPage;
        btn3.addEventListener('click', () => {
            parentNode.innerHTML = "";
            getProducts(nextPage)
        });
        pagination.appendChild(btn3);
    }
}

function getProducts(page) {
    axios.get(`http://localhost:3000/shop?page=${page}`).then((products) => {
        console.log(products)
        products.data.products.forEach(product => {
            const productHtml = `
                <div id="album-${product.id}">
                    <h3>${product.title}</h3>
                    <div class="image-container">
                        <img class="prod-images" src=${product.image} alt="">
                    </div>
                                    <div class="prod-details">
                        <span>$<span>${product.price}</span></span>
                        <button class="shop-item-button" type='button'>ADD TO CART</button>
                    </div>
                </div>`
            parentNode.innerHTML += productHtml

        })
        showPagination(products.data);
    })
        .catch(err => {
            console.log(err);
            showNotification('Your BackEnd is not responding or start', true);
        })
}