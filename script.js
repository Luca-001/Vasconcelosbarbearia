const hamburger_icon = document.querySelector('#nav-bar .nav-list .hamburger');
  const nav_list = document.querySelector('#nav-bar .nav-list');

  if (hamburger_icon && nav_list) {
    hamburger_icon.addEventListener('click', () => {
      nav_list.classList.toggle('open');
      hamburger_icon.classList.toggle('active');
    });
  } else {
    console.error('Elementos não encontrados');
  }

