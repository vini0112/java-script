


const produtos = [
    {
        id: 0,
        nome: "Maçã", 
        preco: 9.90, 
        medida: 'Kg',
        precoUni: 1.23,
        image: `photos/frutas/maca.png`},

    {
        id: 1,
        nome: "Banana", 
        preco: 5.00, 
        medida:  'Penca',
        precoUni: 5.00,
        image: 'photos/frutas/bananas.png'},
    
    {

        id: 2,
        nome: "Pera", 
        preco: 25.00, 
        medida:  'Kg',
        precoUni: 2.77,
        image: 'photos/frutas/pera.png'},

    {
        id: 3,
        nome: "Abacaxi", 
        preco: 5.00, 
        medida: 'Uni.' ,
        precoUni: 5.00,
        image: 'photos/frutas/abacaxi.png'},

]

let listCards = []

let body  = document.querySelector('body')

let totalItem  = document.querySelector('.totalItem')
let total  = document.querySelector('.total')
let listCart  = document.querySelector('.listCart')


let estruturaList  = document.querySelector('.estruturaList')
let estruturaSide  = document.querySelector('.estrutura-side')

let closeShopping  = document.querySelector('.closeShopping')
let openSideBar  = document.querySelector('.openSideBar')

// fechar e abrir sidebar dos carts 
openSideBar.addEventListener('click', () =>{
    body.classList.toggle(`active`)
})

closeShopping.addEventListener('click', () =>{
    body.classList.remove(`active`)
})



// showing the cards
function showingCards(){
    produtos.forEach((value, key) =>{
        let newItem = document.createElement('div')
        newItem.classList.add('item')
        newItem.innerHTML = `
        <div class="item-title"><img src="${value.image}" alt=""></div>

        <div class="item-preco">R$: ${value.precoUni.toFixed(2).replace('.', ',')}</div>

        <button class="btn-cart" onclick="addCart(${key})">Add to Cart</button>
        
        `

        estruturaList.appendChild(newItem)
    })
}

showingCards()

// pegando a key dos cards
function addCart(key){
    if(listCards[key] == null){
        listCards[key] = produtos[key]
        listCards[key].quantity = 1
        
    }

    // console.log(listCards[key])
    reloadCard()
}


function reloadCard(){
    listCards.innerHTML = ''
    let count = 0
    let totalPrice = 0

    listCards.forEach((value, key) =>{
        totalPrice = totalPrice + value.precoUni
        count = count + value.quantity

        if(value != null){
        let newLine = document.createElement('li')
        newLine.classList.add('cartLine')

        newLine.innerHTML = `
             
            <img src="${value.image}" alt="">
            <span class="preco">R$: ${value.precoUni.toFixed(2).replace('.', ',')}</span>
            <span class="qtd">

             <i class="fa-solid fa-angle-left" onclick="changeQtd(${key}, ${value.quantity - 1})"></i>
             ${value.quantity}
             <i class="fa-solid fa-angle-right" onclick="changeQtd(${key}, ${value.quantity + 1})"></i>

             </span>
            
        `
        listCart.appendChild(newLine)

        
    }

    })

    total.innerHTML = totalPrice
    totalItem.innerHTML = count
}


function changeQtd(key, quantity){
    if(quantity == 0){
        delete listCards[key]
    }else{
        listCards[key].quantity = quantity
        listCards[key].precoUni = quantity * produtos[key].precoUni
    }
    reloadCard()
}
console.log(listCards)