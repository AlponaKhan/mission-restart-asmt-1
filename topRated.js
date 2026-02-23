// console.log("top rated working");
const allProducts = () => {
    fetch("https://fakestoreapi.com/products")
        .then((res) => res.json())
        .then((data) => {
            const rating=data.sort((a,b)=>b.rating.rate - a.rating.rate);
            const topRated= rating.slice(0,3);
            displayRating(topRated)})

}

const displayRating=(products)=>{
    // console.log(data);
    const ratingTop= document.getElementById("top-rated");
    ratingTop.innerHTML="";
    for(let product of products){
        // console.log(product);
        const card= document.createElement("div");
        card.innerHTML=`
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
                        <h2 class="card-title font-bold text-base truncate block">${product.title}</h2>
                        <p class="font-bold text-base">$${product.price}</p>
                        <div class="card-actions flex justify-between">
                            <button onClick="loadProductDetails(${product.id})" class="btn flex-1">
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
        ratingTop.append(card);
    }

}

allProducts();