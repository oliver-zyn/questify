import { addToCart } from "./script.js"

document.addEventListener("DOMContentLoaded", function() {
  const carouselInner = document.getElementById('carousel-inner')
  const contentCards = document.getElementById('content-cards')

  fetch('../featured-products.json')
  .then(response => response.json())
  .then(products => {
    products.forEach((product, index) => {
      const carouselItem = createCarouselItem(product, index === 0)
      carouselInner.appendChild(carouselItem)
    })
  })

  fetch('../products.json')
    .then(response => response.json())
    .then(products => {
      products.forEach(product => {
        const card = createCard(product)
        contentCards.appendChild(card)
      })
    })
})

function createCarouselItem(product, isActive) {
  const itemDiv = document.createElement('div')
  itemDiv.classList.add('carousel-item')

  if (isActive) {
    itemDiv.classList.add('active')
  }

  itemDiv.innerHTML = `
    <img src="${product.image}" class="d-block" alt="${product.title}">
    <section class="intro-text">
      <h1 class="intro-title m-0">${product.title}</h1>
      <span class="intro-tag">${product.tag}</span>
      <p class="intro-description mt-3">${product.description}</p>
      <div class="mt-4">
        <a href="product.html?id=${product.id}" class="btn call-button">Economize agora <i class="ph ph-arrow-right"></i></a>
        <a href="#" class="ms-4 call-link">Saiba mais</a>
      </div>
    </section>
  `

  return itemDiv
}

function createCard(product) {
  const colDiv = document.createElement('div')
  colDiv.classList.add('col', 'mb-5')

  colDiv.innerHTML = `
    <div class="content-card d-flex flex-column">
      <div class="img-container">
        <img src="${product.coverImage}" alt="${product.name}">
        <div>
          <span class="d-flex align-items-center">
            <i class="ph ph-plus-circle"></i> Adicionar
          </span>
        </div>
      </div>
      <a href="product.html?id=${product.id}">
        <div class="card-tags">
          ${product.tags.map(tag => `<span class="me-1">${tag}</span>`).join('')}
        </div>
        <p class="mt-1">${product.name}</p>
        <div class="card-price d-flex flex-column mt-2">
          <span>R$ ${product.originalPrice.toFixed(2)}</span>
          <span>R$ ${product.discountPrice.toFixed(2)}</span>
        </div>
      </a>
    </div>
  `

  colDiv.querySelector('.img-container span').addEventListener('click', function() {
    addToCart(product)
  })

  return colDiv
}
