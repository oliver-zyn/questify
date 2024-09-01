function showError(input, message) {
  let errorSpan = input.parentNode.querySelector('.error-message')
  if (!errorSpan) {
    errorSpan = document.createElement('span')
    errorSpan.classList.add('error-message', 'mt-1')
    input.parentNode.appendChild(errorSpan)
  }
  errorSpan.textContent = message
  input.classList.add('error-input')
}

function clearError(input) {
  let errorSpan = input.parentNode.querySelector('.error-message')
  if (errorSpan && errorSpan.classList.contains('error-message')) {
    input.parentNode.removeChild(errorSpan)
  }
  input.classList.remove('error-input')
}