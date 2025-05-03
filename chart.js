let product = [
    {
        productName: 'Beautiful Office ',
        productPrice: 73.50,
        productCurrency: 'Euros',
        productId: 7885484949,
        productImg: 'asset/img/pexels-skylar-kang-6044812.jpg'
    },
    {
        productName: 'Pretty Homes',
        productPrice: 31.54,
        productCurrency: 'Euros',
        productId: 2854849096444,
        productImg: 'asset/img/pexels-heyho-7534232.jpg'
    },
    {
        productName: 'Wonderfull ',
        productPrice: 23.56,
        productCurrency: 'Euros',
        productId: 285484949111,
        productImg: 'asset/img/pexels-cottonbro-7439754.jpg'
    },
    {
        productName: 'Testy fruits  ',
        productPrice: 2200.57,
        productCurrency: 'Naria',
        productId: 35675484949,
        productImg: 'asset/img/img6.jpg'
    },
    {
        productName: 'Italian Burger',
        productPrice: 33.51,
        productCurrency: 'Euros',
        productId: 28548494901,
        productImg: 'asset/img/food1.jpg'
    },
    {
        productName: 'Testy fruits  ',
        productPrice: 2500.59,
        productCurrency: 'Naria',
        productId: 35675484944,
        productImg: 'asset/img/img3.jpg'
    },

    {
        productName: 'Nigeria meatpie',
        productPrice: 13.55,
        productCurrency: 'Naria',
        productId: 1948394923,
        productImg: 'asset/img/food2.jpg'
    },
    {
        productName: 'Delicious vel. soup',
        productPrice: 2900.60,
        productCurrency: 'Naria',
        productId: 34536338992,
        productImg: 'asset/img/food3.jpg'
    },
    {
        productName: 'Testy fruits  ',
        productPrice: 2500.61,
        productCurrency: 'Naria',
        productId: 35675484949,
        productImg: 'asset/img/img10.jpg'
    },
    {
        productName: 'Enjoy mellon soup',
        productPrice: 3400.54,
        productCurrency: 'Naria',
        productId: 28548494944,
        productImg: 'asset/img/food4.jpg'
    },
    {
        productName: 'Beautiful Dashborad ',
        productPrice: 4700.54,
        productCurrency: 'Naria',
        productId: 28548492344,
        productImg: 'asset/img/dashboard2.JPG'
    },
    {
        productName: 'Testy fruits  ',
        productPrice: 2500.54,
        productCurrency: 'Naria',
        productId: 35675484949,
        productImg: 'asset/img/img2.jpg'
    },
    {
        productName: 'Testy fruits  ',
        productPrice: 4500.62,
        productCurrency: 'Naria',
        productId: 35675484949,
        productImg: 'asset/img/img5.jpg'
    },
    {
        productName: 'Pretty pets  ',
        productPrice: 8500.63,
        productCurrency: 'Naria',
        productId: 3567548494922,
        productImg: 'asset/img/pexels-shvetsa-4588064.jpg'
    },
    {
        productName: 'Pretty pets  ',
        productPrice: 3500.66,
        productCurrency: 'Naria',
        productId: 35675484949,
        productImg: 'asset/img/pexels-shvetsa-4588431.jpg'
    },
    
    
    
    

];

let productwrap = document.querySelector('.mainproductwrap');


product.forEach((product,i) => {
    // console.log(product)
    let wrapperEle = document.createElement('div');
    wrapperEle.className = "productcard";
    wrapperEle.innerHTML = `
        <img alt="carding"  src="${product.productImg}">

        <div class="productInfo">
            <h3>${product.productName}</h3>
            <h4>price: &#8358; <span class="prd-price">${product.productPrice}</span></h4>
            <button class="buynow" productname="${product.productName} "  prod-price="${product.productPrice}" prod-img="${product.productImg}" product-data-id=" ${product.productId}">Add to cart</button>

        </div>
    `

    productwrap.appendChild(wrapperEle);
});


let carttoggle = document.querySelector('.shoppingcart');
let productBtn = document.querySelectorAll('.buynow');
let totalInCart = document.querySelector('.itemIchart');
    carttoggle.addEventListener('click', function(){
        // alert('hello')
        let bdy = document.body;

        bdy.classList.toggle('shopping_cartactive');


    })

    productBtn.forEach(prodBtn =>{
        prodBtn.addEventListener('click', function(){
            let name = this.getAttribute('productname');
            let price = this.getAttribute('prod-price');
            let id = this.getAttribute('product-data-id');
            let img = this.getAttribute('prod-img');

            addToCart(name, price, id, img);


            // display total items
            totalInCart.innerHTML = getFromStorage().length; 
            
            renderShoppingCart();

        })
    })


function addToCart(name, price, id, img){
    let itemInCart = getFromStorage();


/*
    itemInCart.filter(product => {
        if(product.pordid === id){
            // updatwe ul with notification massage
            alert('already added');
            return;
        }
    })
*/
    let itemExist = itemInCart.filter(item => item.pordid === id);
    if(itemExist.length > 0){
        alert('Sorry, item already in cart.... ');

        return;

    }

    itemInCart.push({pordname: name, pordprice: price, pordid: id, img: img});

localStorage.setItem('mycart', JSON.stringify(itemInCart));

}
// addToCart('Rice and Bean', 30000, '1929848');


// funtion to get item from storage,   json.parse   return to original
function getFromStorage(){
    let cart = localStorage.getItem('mycart');

    return cart ? JSON.parse(cart) : [];
}

function renderShoppingCart(){
    let cart = getFromStorage();
    let rtnElement = document.querySelector('.listItems');


    if(cart.length <= 0){
        rtnElement.innerHTML = '<h3> no items in Cart.......</h3?';
        return 
    }
    rtnElement.innerHTML = "";
    cart.forEach((item) =>{
        // console.log(item)
        let prent = document.createElement('div');
            prent.className = 'myCartItem';
            prent.innerHTML = `
            <img src="${item.img}" class="proding">
                <div class="cartImg">
                    <h4>${item.pordname}</h4>
                    <h5>&#8358; ${item.pordprice} </h5>
                </div>
                <button class="RemveBtn" pid="${item.pordid}">
                    <i class="fas fa-xmark-circle"></i>
                </button>
            `;
            rtnElement.appendChild(prent);    
    })
    deleteT('RemveBtn');
}



function deleteProduct(uid){

}

function deleteT( className){
    let RemveBtn = document.querySelectorAll('.' + className);

        RemveBtn.forEach(eachBtn => {
            eachBtn.addEventListener('click', function(){
                const productId = this .getAttribute('pid');
                let allProduct = getFromStorage();
// delete request
                let remv = allProduct.filter(item => item.pordid !== productId)

                // update shopping cart with remaining items
                localStorage.setItem('mycart', JSON.stringify(remv));

                // update the total element in shopping cart

                totalInCart.innerHTML = getFromStorage().length;

                // remove the deleted product  from ul

                this.closest('.myCartItem').remove();
            })
        })
}


document.addEventListener('DOMContentLoaded', function(){
    totalInCart.innerHTML = getFromStorage().length;

    renderShoppingCart();
    // let tam = getFromStorage();
    let itemInCart = getFromStorage();
    let price = 0;

    // let totalprice = tam.map(item => item += item.pordprice);


        itemInCart.forEach(item => {
            // let p = Number(price)
            price += parseInt(item.pordprice)
        })

    let lastAmount = price.toFixed(2)
        document.querySelector('.tt1').innerHTML = `Total: &#8358;${lastAmount}`;
})

 