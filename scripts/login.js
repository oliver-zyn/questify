document.getElementById('login-button').addEventListener('click', function(event) {
  event.preventDefault()
  let valid = true

  const emailInput = document.getElementById('email')
  const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/
  if (!emailInput.value.match(emailPattern)) {
    showError(emailInput, "Por favor, insira um email válido")
    valid = false
  } else {
    clearError(emailInput)
  }

  const passwordInput = document.getElementById('password')
  if (passwordInput.value.trim() === "") {
    showError(passwordInput, "A senha não pode ser vazia")
    valid = false
  } else {
    clearError(passwordInput)
  }

  if (valid) {
    const userData = {
      email: emailInput.value.trim(),
      password: passwordInput.value
    }

    localStorage.setItem('user-login', JSON.stringify(userData))

    alert("Login realizado com sucesso!")
  }
})