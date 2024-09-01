import { navbarComponent } from "./components/navbar.js"
import { footerComponent } from "./components/footer.js"

document.getElementById('navbar').innerHTML = navbarComponent
document.getElementById('footer').innerHTML = footerComponent

document.addEventListener("DOMContentLoaded", function() {
  updateCartQuantity()
})

export function updateCartQuantity() {
  const cart = JSON.parse(localStorage.getItem('cart')) || []
  const cartQuantityElement = document.getElementById('cart-quantity')

  cartQuantityElement.textContent = cart.length
}

export function addToCart(product) {
  let cart = JSON.parse(localStorage.getItem('cart')) || []

  const existingProductIndex = cart.findIndex(item => item.id === product.id)
  if (existingProductIndex >= 0) {
    alert("Este produto já está no carrinho!")
    return
  }

  cart.push({
    id: product.id,
    name: product.name,
    description: product.description,
    coverImage: product.coverImage,
    images: product.images,
    tags: product.tags,
    originalPrice: product.originalPrice,
    discountPrice: product.discountPrice,
    discount: product.discount,
  })

  localStorage.setItem('cart', JSON.stringify(cart))

  alert(`${product.name} foi adicionado ao carrinho!`)

  updateCartQuantity()
}