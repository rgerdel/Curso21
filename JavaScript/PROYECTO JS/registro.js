const addTask = () => {
    const nombre = document.getElementById('nombre');
    const apellido = document.getElementById('apellido');
    const email = document.getElementById('email');
    const telefono = document.getElementById('telefono');
    const usuario = document.getElementById('usuario');
    const contrasena = document.getElementById('contrasena');
    console.log(nombre.value);


   const registro = {
    fecha: Date.now(),
    id: email.value,
    nombre: nombre.value,
    apellido: apellido.value,
    telefono: telefono.value,
    usuario: usuario.value,
    contrasena: contrasena.value
  }

  let registros = [];

  if (localStorage.getItem('registros')) {
    tareas = JSON.parse(localStorage.getItem('registros'));
  }

  registros.push(registro);
  localStorage.setItem('registros', JSON.stringify(registros));

  let fechaActual = new Date();
  let fechaExpiracion = new Date(fechaActual.getTime() + 1 * 2 * 60 * 60 * 1000);
  const cookies = {
    id: email.value,
    usuario: usuario.value,
  }
  document.cookie = `name=${JSON.stringify(cookies)}; expires=${fechaExpiracion.toUTCString()}; path=/`;

  console.log(document.cookie);

  window.location.href = './home.html';
}

