const items=[
    {
        id:1,
        image:"img/fruite-item-5.jpg",
        name:"Grapes",
        price:4.99,
        stock:30,
        qty:0
    },
    {
        id:2,
        image:"img/fruite-item-2.jpg",
        name:"Respberries",
        price:5.93,
        stock:23,
        qty:0
    },
    {
        id:3,
        image:"img/fruite-item-4.jpg",
        name:"Apricots",
        price:3.97,
        stock:21,
        qty:0
    },
    {
        id:4,
        image:"img/fruite-item-3.jpg",
        name:"Banana",
        price:2.99,
        stock:30,
        qty:0
    },
    {
        id:5,
        image:"img/fruite-item-1.jpg",
        name:"Oranges",
        price:4.96,
        stock:20,
        qty:0
    },
    {
        id:6,
        image:"img/featur-1.jpg",
        name:"Apples",
        price:7.90,
        stock:27,
        qty:0
    },
    {
        id:7,
        image:"img/featur-2.jpg",
        name:"Strawberry",
        price:4.92,
        stock:10,
        qty:0
    },
    {
        id:8,
        image:"img/featur-3.jpg",
        name:"Strawberry",
        price:4.92,
        stock:10,
        qty:0
    },
    {
        id:9,
        image:"img/vegetable-item-1.jpg",
        name:"Tomatoes",
        price:2.92,
        stock:24,
        qty:0
    },
    {
        id:10,
        image:"img/vegetable-item-4.jpg",
        name:"capsicum",
        price:3.99,
        stock:25,
        qty:0
    },
    {
        id:11,
        image:"img/vegetable-item-5.jpg",
        name:"potatoes",
        price:5.99,
        stock:50,
        qty:0
    },
    {
        id:12,
        image:"img/vegetable-item-4.jpg",
        name:"capsicum",
        price:3.99,
        stock:25,
        qty:0
    },
    {
        id:13,
        image:"img/bread-1.jpg",
        name:"Roasted Bread",
        price:2.59,
        stock:25,
        qty:0
    },
    {
        id:14,
        image:"img/bread-1.jpg",
        name:"Garlic Bread",
        price:3.45,
        stock:10,
        qty:0
    },
    {
        id:15,
        image:"img/meet-1.jpg",
        name:"Mixed Salad",
        price:9.99,
        stock:20,
        qty:0
    },
    {
        id:16,
        image:"img/meet-2.jpg",
        name:"Chicken Masala",
        price:12.49,
        stock:25,
        qty:0
    },
]

let productel=document.querySelector('.products')
console.log(productel)
function displayproducts()
{
    items.map((prod)=>{
        productel.innerHTML+=`
        <div class="col">
              <div class="card">
                <img src=${prod.image} class="card-img-top" alt="...">
                <div class="card-body text-center">
                  <h4 class="card-title">${prod.name}</h4>
                  <p class="fs-5">Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod te incididunt</p>
                  <h5>$${prod.price} / kg</h5>
                  <button type="button" class="btn btn-outline-warning text-success rounded-pill">
                    <i class="fa-solid fa-bag-shopping me-2"></i> Add to cart
                  </button>
                </div>
              </div>
            </div>`
    })
}
displayproducts()
let vegesel=document.querySelector('.veges')
console.log(vegesel)
function displayveges()
{
    items.slice(7,12).map((prod)=>{
        vegesel.innerHTML+=`
        <div class="col">
              <div class="card">
                <img src=${prod.image} class="card-img-top" alt="...">
                <div class="card-body text-center">
                  <h4 class="card-title">${prod.name}</h4>
                  <p class="fs-5">Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod te incididunt</p>
                  <h5>$${prod.price} / kg</h5>
                  <button type="button" class="btn btn-outline-warning text-success rounded-pill">
                    <i class="fa-solid fa-bag-shopping me-2"></i> Add to cart
                  </button>
                </div>
              </div>
            </div>`
    })
}
displayveges()
let fruitel=document.querySelector('.fruits')
console.log(fruitel)
function displayfruits()
{
    items.slice(0,7).map((prod)=>{
        fruitel.innerHTML+=`
        <div class="col">
              <div class="card">
                <img src=${prod.image} class="card-img-top" alt="...">
                <div class="card-body text-center">
                  <h4 class="card-title">${prod.name}</h4>
                  <p class="fs-5">Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod te incididunt</p>
                  <h5>$${prod.price} / kg</h5>
                  <button type="button" class="btn btn-outline-warning text-success rounded-pill">
                    <i class="fa-solid fa-bag-shopping me-2"></i> Add to cart
                  </button>
                </div>
              </div>
            </div>`
    })
}
displayfruits()
let breadel=document.querySelector('.bread')
console.log(breadel)
function displaybread()
{
    items.slice(12,14).map((prod)=>{
        breadel.innerHTML+=`
        <div class="col">
              <div class="card">
                <img src=${prod.image} class="card-img-top" alt="...">
                <div class="card-body text-center">
                  <h4 class="card-title">${prod.name}</h4>
                  <p class="fs-5">Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod te incididunt</p>
                  <h5>$${prod.price} / kg</h5>
                  <button type="button" class="btn btn-outline-warning text-success rounded-pill">
                    <i class="fa-solid fa-bag-shopping me-2"></i> Add to cart
                  </button>
                </div>
              </div>
            </div>`
    })
}
displaybread()
let meatel=document.querySelector('.meat')
console.log(meatel)
function displaymeat()
{
    items.slice(14,16).map((prod)=>{
        meatel.innerHTML+=`
        <div class="col">
              <div class="card">
                <img src=${prod.image} class="card-img-top" alt="...">
                <div class="card-body text-center">
                  <h4 class="card-title">${prod.name}</h4>
                  <p class="fs-5">Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod te incididunt</p>
                  <h5>$${prod.price} / kg</h5>
                  <button type="button" class="btn btn-outline-warning text-success rounded-pill">
                    <i class="fa-solid fa-bag-shopping me-2"></i> Add to cart
                  </button>
                </div>
              </div>
            </div>`
    })
}
displaymeat()