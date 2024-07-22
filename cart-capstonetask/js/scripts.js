let cart = [];
let totalPrice = 0;

//fetch the item from the cart in html file. 
function addToCart(productName, productPrice, productQuantity) {
//  //   const quantity = cartHtml.getElementById('quantity').value;
    const product = { name:productName , price: productPrice, quantity: productQuantity };
    cart.push(product);
//     updateCart();
    console.log(cart);
}
// remove the item from the cart
function removeFromCart(productName, productPrice, productQuantity) {
    const product = {name:productName , price:productPrice , quantity:productQuantity };
    cart.push(product);
console.log(cart);

}

totalPrice = 0;
    updateCart();

function updateCart() {
    const cartContents = cartHtml.getElementById('productPrice');
    const totalCost = cartHtml.getElementById('total-cost');
    let cartHtml = '';
    cart.forEach((productPrice) => {
        // cartHtml += `R{product.name} x R{product.quantity}<br>`;
    });
    console.log(cart)
    cartContents.innerHTML = cartHtml;
    totalPrice = cart.reduce((acc, product) => acc + (product.price * product.quantity), 0);
    totalCost.innerHTML = `R{totalPrice.toFixed(2)}`;
}


// console.log (addToCart(updateCart))
// console.log (cart)