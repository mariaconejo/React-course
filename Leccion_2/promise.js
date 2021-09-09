// Es para utilizar codigo asincrono PREGUNTA DE ENTREVISTA QUE SON Y COMO FUNCIONAN
// callback es una funcion que esta esperando algo para ejecutarse
// si hay un error (reject) rechaza la promesa
// then  retorna una Promesa. Recibe dos argumentos: funciones callback  para los casos de éxito y fallo de Promise.
const buyTicketSlowProcess = () => {
    return new Promise ((resolve, reject) =>{
        setTimeout(()=> {
            const error = false;
            if(error) reject('Something went wrong');
            else resolve('Ticket Bougth');
        },3000)
    })
}


console.log("I'm waiting...");

buyTicketSlowProcess()
  .then((message) => {
    console.log(message);
    return message;
  })
  .then((message) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        console.log(`${message} in uppercase`.toUpperCase());
      }, 3000);
    });
  })
  .catch((error) => console.log(error));

console.log("I can't wait");

// no es buena pratica encadenar tantas cadenas puede pasar algo llamad callbackhell o promisehell