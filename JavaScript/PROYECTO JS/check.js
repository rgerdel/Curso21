const cookies = document.cookie.split(";");

let hasCookie = false;
let sesionCookie = "";
cookies.forEach(cookie => {
  const [name, value] = cookie.split("=");
  if(name === "Sesion") {
    hasCookie = true;
    sesionCookie = JSON.parse(value);
    console.log(sesionCookie);
    console.log(sesionCookie.name);
    console.log(sesionCookie.email);
    console.log(sesionCookie.password);
    return;
  }
});

// console.log(sesionCookie);

// if(hasCookie) {
//   if(window.location.href === "./login.html" || window.location.href === "./register.html") {
//     window.location.href = "./home.html";
//   }
// } else{
//   alert("No hay sesion");
//   if(window.location.href === "./home.html" || window.location.href === "./profile.html") {
//     window.location.href = "./login.html";
//   }
// }