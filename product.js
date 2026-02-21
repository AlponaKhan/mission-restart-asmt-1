console.log('js file working');

const loadAllCategory = () => {
    fetch("https://fakestoreapi.com/products/categories")
        .then((res) => res.json())
        .then((data) => displayCategory(data))
}

const allProducts=()=>{
    fetch("https://fakestoreapi.com/products")
    .then((res)=>res.json())
    .then((data)=>displayProducts(data))
}

const loadProducts = (ctgory) => {
    // console.log(ctgory);
    const url = `https://fakestoreapi.com/products/category/${ctgory}`
    fetch(url)
        .then(res => res.json())
        .then(data => displayProducts(data))
}
const displayProducts = (products) => {
    const productsByCategory = document.getElementById("products-by-category");
    productsByCategory.innerHTML = "";

    for (let product of products) {
        // console.log(product);
        const card = document.createElement("div");
        card.innerHTML = `
                <div class="card bg-base-100  shadow-sm mx-auto">
                    <figure class="bg-gray-200">
                        <img src=${product.image} class="h-70 w-70 object-contain py-3"/>
                    </figure>
                    <div class="flex justify-between px-4 pt-3">
                        <p class="text-sm font-bold text-blue-800 border-none px-2 rounded-full bg-blue-100">${product.category}
                        </p>
                        <div class="flex">
                            <i class="fa-solid fa-star text-yellow-500"></i>
                            <p>${product.rating.rate} <span>(${product.rating.count})</span></p>
                        </div>
                    </div>
                    <div class="card-body">
                        <h2 class="card-title font-bold text-base">${product.title}</h2>
                        <p class="font-bold text-base">$${product.price}</p>
                        <div class="card-actions flex justify-between">
                            <button class="btn flex-1">
                                <i class="fa-regular fa-eye"></i>
                                Details
                            </button>
                            <button class="btn btn-primary flex-1">
                                <i class="fa-solid fa-cart-shopping"></i>
                                Add
                            </button>
                        </div>
                    </div>
                </div>
        `

        productsByCategory.append(card);
    }
}

const displayCategory = (category) => {
    const CategoryContainer = document.getElementById("category-container");
    // CategoryContainer.innerHTML = "";

    for (let cate of category) {
        const btn = document.createElement("div");
        btn.innerHTML = `
        <button class="btn btn-sm rounded-full hover:bg-blue-800 hover:text-white">${cate}</button>
        `
        btn.addEventListener("click", () => { loadProducts(cate) })


        CategoryContainer.append(btn);
    }

}

loadAllCategory()
allProducts()