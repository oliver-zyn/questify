import { updateCartQuantity } from "./script.js"

document.addEventListener("DOMContentLoaded", function() {
  const cartData = JSON.parse(localStorage.getItem('cart')) || []
  const cartList = document.querySelector('.cart-list')

  cartData.forEach(cartItem => {
    const cartItemElement = createCartItem(cartItem)
    cartList.appendChild(cartItemElement)
  })

  updateCartSummary()
})

function createCartItem(product) {
  const item = document.createElement('div')
  item.classList.add('cart-item', 'rounded', 'd-flex', 'flex-column', 'flex-md-row')
  item.dataset.id = product.id

  item.innerHTML = `
    <img src="${product.coverImage}" alt="">
    <div class="flex-grow-1">
      <div class="item-header d-flex justify-content-between align-items-center">
        <div class="item-tags">
          ${product.tags.map(tag => `<span class="me-1">${tag}</span>`).join('')}
        </div>
        <div class="item-discount">
          <span>-${product.discount}%</span>
          <span>R$ ${product.originalPrice.toFixed(2)}</span>
        </div>
      </div>
      <div class="item-content d-flex justify-content-between flex-column flex-md-row pt-2">
        <div class="item-description">
          <h2>${product.name}</h2>
          <p>${product.description}</p>
        </div>
        <h3 class="item-price mt-2 mt-md-0">R$ ${product.discountPrice.toFixed(2)}</h3>
      </div>
    </div>
    <button class="btn remove-button rounded">Remover</button>
  `

  item.querySelector('.remove-button').addEventListener('click', function() {
    item.remove()
    updateCartSummary()
  })

  return item
}

function updateCartSummary() {
  const cartItems = document.querySelectorAll('.cart-item')
  let subtotal = 0
  let totalDiscount = 0

  if (cartItems.length === 0) {
    document.getElementById('message-cart').style.display = 'block'
    document.getElementById('buy-button').setAttribute("disabled", "")
  }
  else {
    document.getElementById('buy-button').removeAttribute("disabled", "")
  }

  cartItems.forEach(item => {
    const price = parseFloat(item.querySelector('.item-price').textContent.replace('R$', '').trim().replace(',', '.'))
    const originalPrice = parseFloat(item.querySelector('.item-discount span:last-child').textContent.replace('R$', '').trim().replace(',', '.'))

    subtotal += originalPrice
    totalDiscount += (originalPrice - price)
  })

  const total = subtotal - totalDiscount

  document.getElementById('price').textContent = `R$ ${subtotal.toFixed(2)}`
  document.getElementById('discount').textContent = `-R$ ${totalDiscount.toFixed(2)}`
  document.getElementById('quantity').textContent = `${cartItems.length}`
  document.getElementById('total-price').textContent = `R$ ${total.toFixed(2)}`

  updateLocalStorage(cartItems)
  updateCartQuantity()
}

function updateLocalStorage(cartItems) {
  const cartData = []

  cartItems.forEach(item => {
    const product = {
      id: Number(item.dataset.id),
      coverImage: item.querySelector('img').src,
      name: item.querySelector('h2').textContent,
      description: item.querySelector('p').textContent,
      tags: Array.from(item.querySelectorAll('.item-tags span')).map(span => span.textContent),
      originalPrice: parseFloat(item.querySelector('.item-discount span:last-child').textContent.replace('R$', '').trim()),
      discountPrice: parseFloat(item.querySelector('.item-price').textContent.replace('R$', '').trim()),
      discount: parseFloat(item.querySelector('.item-discount span:first-child').textContent.replace('-', '').replace('%', '').trim())
    }

    cartData.push(product)
  })

  localStorage.setItem('cart', JSON.stringify(cartData))
}