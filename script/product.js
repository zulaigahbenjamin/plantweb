let openShopping = document.querySelector('.shopping');
let closeShopping = document.querySelector('.closeShopping');
let list = document.querySelector('.list');
let listCard = document.querySelector('.listCard');
let body = document.querySelector('body');
let total = document.querySelector('.total');
let quantity = document.querySelector('.quantity');
openShopping.addEventListener('click', ()=>{
    body.classList.add('active');
})
closeShopping.addEventListener('click', ()=>{
    body.classList.remove('active');
})
let products = [
    {
        id: 1,
        name: 'PRODUCT NAME 1',
        image: "https://i.postimg.cc/Xv648Sww/wood-succulant-stand.jpg",
        price: 120000,
        // catergory: Indoor,
    },
    {
        id: 2,
        name: 'PRODUCT NAME 2',
        image:'https://i.postimg.cc/Xv648Sww/wood-succulant-stand.jpg',
        price: 120000,
        // category: indoor,
    },
    {
        id: 3,
        name: 'PRODUCT NAME 3',
        image: 'https://i.postimg.cc/Xv648Sww/wood-succulant-stand.jpg',
        price: 220000,
        // category: outdoor,
    },
    {
        id: 4,
        name: 'PRODUCT NAME 4',
        image: 'https://i.postimg.cc/Xv648Sww/wood-succulant-stand.jpg',
        price: 123000,
        // category: indoor,
    },
    {
        id: 5,
        name: 'PRODUCT NAME 5',
        image: 'https://i.postimg.cc/Xv648Sww/wood-succulant-stand.jpg',
        price: 320000,
        // category: outdoor,
    },
    {
        id: 6,
        name: 'PRODUCT NAME 6',
        image: 'https://i.postimg.cc/Xv648Sww/wood-succulant-stand.jpg',
        price: 120000,
        // category: indoor,
    },
];
let listCards  = [];
function initApp(){
    products.forEach((value, key) =>{
        let newDiv = document.createElement('div');
        newDiv.classList.add('item');
        newDiv.innerHTML = `
            <img src="${value.image}">
            <div class="title">${value.name}</div>
            <div class="price">${value.price.toLocaleString()}</div>
            <button onclick="addToCard(${key})">Add To Card</button>`;
        list.appendChild(newDiv);
    })
}
initApp();
function addToCard(key){
    if(listCards[key] == null){
        // copy product form list to list card
        listCards[key] = JSON.parse(JSON.stringify(products[key]));
        listCards[key].quantity = 1;
    }
    reloadCard();
}
function reloadCard(){
    listCard.innerHTML = '';
    let count = 0;
    let totalPrice = 0;
    listCards.forEach((value, key)=>{
        totalPrice = totalPrice + value.price;
        count = count + value.quantity;
        if(value != null){
            let newDiv = document.createElement('li');
            newDiv.innerHTML = `
                <div><img src="image/${value.image}"/></div>
                <div>${value.name}</div>
                <div>${value.price.toLocaleStorage()}</div>
                <div>
                    <button onclick="changeQuantity(${key}, ${value.quantity - 1})">-</button>
                    <div class="count">${value.quantity}</div>
                    <button onclick="changeQuantity(${key}, ${value.quantity + 1})">+</button>
                </div>`;
                listCard.appendChild(newDiv);
        }
    })
    total.innerText = totalPrice.toLocaleStorage();
    quantity.innerText = count;
}
function changeQuantity(key, quantity){
    if(quantity == 0){
        delete listCards[key];
    }else{
        listCards[key].quantity = quantity;
        listCards[key].price = quantity * products[key].price;
    }
    reloadCard();
}


// /// filter and sort fubctionconst productsContainer = document.querySelector(".products");
// const categoryList = document.querySelector(".category-list");

// function displayProducts(products) {
//   if (products.length > 0) {
//     const product_details = products
//       .map(
//         (product) => `
//   <div class="product">
//   <div class="img">
//     <img src="${product.img}" alt="${product.name}" />
//   </div>
//   <div class="product-details">
//     <span class="name">${product.name}</span>
//     <span class="amt">Rs.${product.price}</span>
//     <span class="seller">${product.seller}</span>
//   </div>
// </div>`
//       )
//       .join("");

//     productsContainer.innerHTML = product_details;
//   } else {
//     productsContainer.innerHTML = "<h3>No Products Available</h3>";
//   }
// }

// function setCategories() {
//   const allCategories = data.map((product) => product.catagory);
//   //console.log(allCategories);
//   const catagories = [
//     "All",
//     ...allCategories.filter((product, index) => {
//       return allCategories.indexOf(product) === index;
//     }),
//   ];
//   //console.log(catagories);
//   categoryList.innerHTML = catagories.map((catagory) => `<li>${catagory}</li>`).join("");

//   categoryList.addEventListener("click", (e) => {
//     const selectedCatagory = e.target.textContent;
//     selectedCatagory === "All" ? displayProducts(data) : displayProducts(data.filter((product) => product.catagory == selectedCatagory));
//   });
// }
// const priceRange = document.querySelector("#priceRange");
// const priceValue = document.querySelector(".priceValue");

// function setPrices() {
//   const priceList = data.map((product) => product.amt);
//   const minPrice = Math.min(...priceList);
//   const maxPrice = Math.max(...priceList);
//   priceRange.min = minPrice;
//   priceRange.max = maxPrice;
//   priceValue.textContent = "Rs." + maxPrice;

//   priceRange.addEventListener("input", (e) => {
//     priceValue.textContent = "Rs." + e.target.value;
//     displayProducts(data.filter((product) => product.amt <= e.target.value));
//   });
// }

// const txtSearch = document.querySelector("#txtSearch");
// txtSearch.addEventListener("keyup", (e) => {
//   const value = e.target.value.toLowerCase().trim();
//   if (value) {
//     displayProducts(data.filter((product) => product.name.toLowerCase().indexOf(value) !== -1));
//   } else {
//     displayProducts(data);
//   }
// });

// displayProducts(data);
// setCategories();
// setPrices();