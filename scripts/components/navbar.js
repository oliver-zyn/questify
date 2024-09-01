export const navbarComponent = `
  <nav class="navbar navbar-expand-lg shadow">
    <div class="container">
      <a class="navbar-brand mb-1 d-flex align-items-center py-3" href="#">
        <img src="./assets/logo.png" alt="logo Questify" />
      </a>
      <button class="navbar-toggler btn-mobile" type="button" data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
        aria-label="Toggle navigation"><i class="ph ph-list"></i></button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0 ms-lg-4">
          <li class="nav-item me-3 me-lg-2"><a class="nav-link" href="./index.html">Home</a></li>
          <li class="nav-item me-3 me-lg-2"><a class="nav-link" href="#">Sobre</a></li>
          <li class="nav-item me-3 me-lg-2"><a class="nav-link" href="#">Contato</a></li>
          <li class="nav-item me-3 me-lg-2 dropdown">
            <a class="nav-link dropdown-toggle" id="navbarDropdown" href="#" role="button" data-bs-toggle="dropdown"
              aria-expanded="false">Explorar</a>
            <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
              <li><a class="dropdown-item" href="#">Todos os jogos</a></li>
              <li>
                <hr class="dropdown-divider" />
              </li>
              <li><a class="dropdown-item" href="#">Mais populares</a></li>
              <li><a class="dropdown-item" href="#">Promoções</a></li>
              <li><a class="dropdown-item" href="#"></a></li>
            </ul>
          </li>
        </ul>
        <div class="d-flex align-items-center">
          <div>
            <a class="nav-link txt-white nav-icon" href="#">
              <i class="ph ph-magnifying-glass"></i>
            </a>
          </div>
          <div class="nav-item dropdown nav-icon">
            <a class="nav-link dropdown-toggle text-white" role="button" id="navbarDropdown" data-bs-toggle="dropdown"
              aria-expanded="false">
              <i class="ph ph-user"></i>
            </a>
            <ul class="dropdown-menu text-center shadow" aria-labelledby="navbarDropdown">
              <li class="px-2">
                <a href="./sign-in.html" class="btn btn-dark w-full">Cadastrar-se</a>
              </li>
              <li><a class="dropdown-item mt-2" href="./login.html">Entrar</a></li>
            </ul>
          </div>
          <form action="./cart.html" class="d-flex">
            <button class="btn btn-outline-primary d-flex align-items-center ms-2 btn-cart" type="submit">
              <i class="ph ph-shopping-cart-simple me-1"></i>
              <span id="cart-quantity" class="badge ms-1 rounded-pill">0</span>
            </button>
          </form>
        </div>
      </div>
    </div>
  </nav>
`