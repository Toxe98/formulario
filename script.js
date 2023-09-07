function enviar() {
  let nombre = document.getElementById("nombre").value;
  let apellido = document.getElementById("apellido").value;
  let fecha_de_nacimiento = document.getElementById("fecha").value;
  

  fetch(
    
    
    "https://jsonplaceholder.typicode.com/users",
    {
      headers: { "Content-type": "application/json; charset=utf-8" },
      method: "POST",
      body: JSON.stringify({
        nombre: nombre,
        apellido: apellido,
        fecha: fecha_de_nacimiento
      })
    })
    .then((response) => response.json())
    .then((data) => console.log(data));
};
