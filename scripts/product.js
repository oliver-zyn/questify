import { addToCart } from "./script.js"

document.addEventListener("DOMContentLoaded", function() {
  const urlParams = new URLSearchParams(window.location.search)
  const productId = urlParams.get('id')

  if (productId) {
    fetch('../products.json')
      .then(response => response.json())
      .then(products => {
        const product = products.find(p => p.id == productId)
        if (product) {
          displayProductDetails(product)
        } else {
          alert("Produto não encontrado!")
        }
      })
  } else {
    alert("ID do produto não especificado na URL.")
  }
})

function displayProductDetails(product) {
  const imagesContainer = document.getElementById('images-container');
  
  imagesContainer.innerHTML = `
    <img id="main-image" class="card-img-top mb-3 rounded" src="${product.images[0]}" alt="${product.name}" />
    <div class="d-flex flex-wrap mb-4 mb-md-0 gap-3 align-items-center justify-content-center product-images">
      ${product.images.slice(0, 4).map(image => `<img class="rounded img-fluid thumbnail" src="${image}" alt="${product.name}" />`).join('')}
    </div>
  `;

  const thumbnails = imagesContainer.querySelectorAll('.thumbnail');
  thumbnails.forEach(thumbnail => {
    thumbnail.addEventListener('click', function() {
      const mainImage = document.getElementById('main-image');
      mainImage.src = thumbnail.src;
    });
  });

  const productInfoContainer = document.getElementById('product-info-container');
  productInfoContainer.innerHTML = `
    <div class="product-tags">
      ${product.tags.map(tag => `<span class="me-1">${tag}</span>`).join('')}
    </div>
    <h1 class="mt-2">${product.name}</h1>
    <div class="product-discount mt-3 gap-2 d-flex align-items-center">
      <span>-${product.discount}%</span>
      <span>R$ ${product.originalPrice.toFixed(2)}</span>
    </div>
    <p class="product-description my-3">${product.description}</p>
    <button class="btn primary-button d-flex align-items-center justify-content-center gap-2">
      Adicionar ao carrinho <i class="ph ph-plus-circle"></i>
    </button>
    <form action="index.html">
      <button class="btn secondary-button mt-2">Continuar comprando</button>
    </form>
  `;

  document.querySelector('.primary-button').addEventListener('click', function() {
    addToCart(product);
  });
}
