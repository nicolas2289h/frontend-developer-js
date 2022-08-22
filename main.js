const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const menuBurguer = document.querySelector('.menu-responsive')
const mobileMenu = document.querySelector('.mobile-menu')
const menuCarritoIcon = document.querySelector('.navbar-shopping-cart')
const shoppingCartContainer = document.querySelector('#shoppingCartContainer')
const cardsContainer = document.querySelector('.cards-container')
const productDetailContainer = document.querySelector('#productDetail')
const btnCloseProductDetail = document.querySelector('.product-detail-close')

function toggleDesktopMenu(){
    desktopMenu.classList.toggle('inactive');
    shoppingCartContainer.classList.add('inactive')
}

function toggleMobileMenu(){
    mobileMenu.classList.toggle('inactive')
    shoppingCartContainer.classList.add('inactive')
    productDetailContainer.classList.add('inactive')
}

function toggleDetailProduct(){
    shoppingCartContainer.classList.toggle('inactive')
    desktopMenu.classList.add('inactive')
    mobileMenu.classList.add('inactive')
    productDetailContainer.classList.add('inactive')
}

menuEmail.addEventListener('click', toggleDesktopMenu)
menuBurguer.addEventListener('click', toggleMobileMenu)
menuCarritoIcon.addEventListener('click', toggleDetailProduct)
btnCloseProductDetail.addEventListener('click',closeProductDetailAside)


//LISTA DE PRODUCTOS
const productList = []
productList.push({
    name: 'Bike',
    price: 180,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
})

productList.push({
    name: 'Notebook',
    price: 720,
    image: 'https://www.lenovo.com/medias/lenovo-laptop-yoga-slim-7-15-intel-subseries-hero.png?context=bWFzdGVyfHJvb3R8Mjc1OTQ0fGltYWdlL3BuZ3xoY2UvaGViLzE0MzMyMDQzMTAwMTkwLnBuZ3xmNGI3Yzk4ZjE1ZTU3NTgwMDhkYTY5YzY5OWZlNmU5ZTI2YWQzYmQxMDU2ODkyYjMwN2M4ZjMwMDBkYTNjNzcy'
})

productList.push({
    name: 'headphones',
    price: 220,
    image: 'https://mla-s1-p.mlstatic.com/742938-MLA46992476713_082021-F.jpg'
})

function openProductDetailAside(){
    productDetailContainer.classList.remove('inactive')
    shoppingCartContainer.classList.add('inactive')
}

function closeProductDetailAside(){
    productDetailContainer.classList.add('inactive')
}


/* CREO TODO EL BLOQUE DE IMAGENES DEL HTML PERO DESDE JS

<div class="cards-container">

      <div class="product-card">
        <img src="https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="foto-producto">
        <div class="product-info">
          <div>
            <p>$120,00</p>
            <p>Bike</p>
          </div>
          <figure>
            <img src="./icons/bt_add_to_cart.svg" alt="">
          </figure>
        </div>

*/

function renderProducts(newArray){
    for (const product of newArray) {
        const productCard = document.createElement('div')
        productCard.classList.add('product-card')
    
        const img = document.createElement('img')
        img.setAttribute('src', product.image)
        img.addEventListener('click', openProductDetailAside)
        
        const productInfo= document.createElement('div')
        productInfo.classList.add('product-info')
    
        const productInfoDiv = document.createElement('div')
    
        const productPrice = document.createElement('p')
        productPrice.innerText = '$' + product.price
    
        const productName = document.createElement('p')
        productName.innerText = product.name
    
        //append agrega varios elementos, appendChild solo uno
        productInfoDiv.append(productPrice, productName)
    
        const productInfoFigure = document.createElement('figure')
        const img2 = document.createElement('img')
        img2.setAttribute('src','./icons/bt_add_to_cart.svg')
    
        productInfoFigure.appendChild(img2)
    
        //al final
        productInfo.append(productInfoDiv, productInfoFigure)
        //productInfo.appendChild(productInfoFigure)
    
        productCard.append(img,productInfo)
        //productCard.appendChild(productInfo)
    
        cardsContainer.appendChild(productCard)
    }
}

//invoco la funcion
renderProducts(productList)
