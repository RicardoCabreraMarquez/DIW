function cerrar() {
  const edit = document.getElementById('editdiv');
  const fondo = document.getElementById('editfondo');
  const scroll = document.getElementById('scroll');
  edit.classList.add('hidden');
  fondo.classList.add('hidden');
  scroll.classList.remove('overflow-hidden');
}

function editarperfil() {
  const edit = document.getElementById('editdiv');
  const fondo = document.getElementById('editfondo');
  const scroll = document.getElementById('scroll');
  edit.classList.remove('hidden');
  fondo.classList.remove('hidden');
  scroll.classList.add('overflow-hidden');
}

function contraseña() {
  const edit = document.getElementById('editdiv');
  const mensaje = document.getElementById('mensaje');
  edit.classList.add('hidden');
  mensaje.classList.remove('hidden');
} 

function cerrarMensaje() {
  const mensaje = document.getElementById('mensaje');
  const fondo = document.getElementById('editfondo');
  const scroll = document.getElementById('scroll');
  mensaje.classList.add('hidden');
  fondo.classList.add('hidden');
  scroll.classList.remove('overflow-hidden');
}

function menuDerecha() {
  const menuhamburguesa = document.getElementById('menuderecha');
  const fondo = document.getElementById('editfondo');
  const nav = document.getElementById('nav');
  const scroll = document.getElementById('scroll');

  if (menuhamburguesa.classList.contains('hidden')) {
      menuhamburguesa.classList.remove('hidden');
      fondo.classList.remove('hidden');
      nav.classList.remove('z-20');
      nav.classList.add('z-40');
      scroll.classList.add('overflow-hidden')
  } else {
      menuhamburguesa.classList.add('hidden');
      fondo.classList.add('hidden');
      nav.classList.add('z-20');
      nav.classList.remove('z-40');
      scroll.classList.remove('overflow-hidden')
  }
}

function menuPerfilmovil() {
  const perfil = document.getElementById('menuperfil');
  const fondo = document.getElementById('editfondo');
  const nav = document.getElementById('nav');
  const scroll = document.getElementById('scroll');

  if (perfil.classList.contains('hidden')) {
    perfil.classList.remove('hidden');
    fondo.classList.remove('hidden');
    nav.classList.remove('z-20');
    nav.classList.add('z-40');
    scroll.classList.add('overflow-hidden')
  } else {
    perfil.classList.add('hidden');
    fondo.classList.add('hidden');
    nav.classList.add('z-20');
    nav.classList.remove('z-40');
    scroll.classList.remove('overflow-hidden')
  }
}

function editarPerfilmovil() {
  const perfil = document.getElementById('menuperfil');
  const edit = document.getElementById('editdiv');
  perfil.classList.add('hidden');
  edit.classList.remove('hidden');
}