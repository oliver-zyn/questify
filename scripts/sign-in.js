document.getElementById('sign-in-button').addEventListener('click', function(event) {
  event.preventDefault()
  let valid = true

  const nameInput = document.getElementById('name')
  if (nameInput.value.trim() === "") {
    showError(nameInput, "O nome não pode ser vazio")
    valid = false
  } else {
    clearError(nameInput)
  }

  const emailInput = document.getElementById('email')
  const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/
  if (!emailInput.value.match(emailPattern)) {
    showError(emailInput, "Por favor, insira um email válido")
    valid = false
  } else {
    clearError(emailInput)
  }

  const cpfInput = document.getElementById('cpf')
  const cpfPattern = /^\d{3}\.\d{3}\.\d{3}-\d{2}$/
  if (!cpfInput.value.match(cpfPattern)) {
    showError(cpfInput, "Por favor, insira um CPF válido no formato 000.000.000-00")
    valid = false
  } else {
    clearError(cpfInput)
  }

  const passwordInput = document.getElementById('password')
  if (passwordInput.value.length < 6) {
    showError(passwordInput, "A senha deve ter pelo menos 6 caracteres")
    valid = false
  } else {
    clearError(passwordInput)
  }

  const passwordConfirmInput = document.getElementById('password-confirm')
  if (passwordConfirmInput.value !== passwordInput.value) {
    showError(passwordConfirmInput, "As senhas não coincidem")
    valid = false
  } else {
    clearError(passwordConfirmInput)
  }

  if (valid) {
    const userData = {
      name: nameInput.value.trim(),
      email: emailInput.value.trim(),
      cpf: cpfInput.value.trim(),
      password: passwordInput.value
    }

    localStorage.setItem('user-sign-in', JSON.stringify(userData))

    alert("Cadastro realizado com sucesso!")
  }
})

document.getElementById('cpf').addEventListener('input', function(e) {
  let cpf = e.target.value.replace(/\D/g, '')
  cpf = cpf.replace(/^(\d{3})(\d)/, '$1.$2')
  cpf = cpf.replace(/^(\d{3})\.(\d{3})(\d)/, '$1.$2.$3')
  cpf = cpf.replace(/\.(\d{3})(\d)/, '.$1-$2')

  e.target.value = cpf
})