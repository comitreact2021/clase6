let nombre1 = 'Pepe';
let nombre2 = 'Linus';

let clientes = ['Pepe', nombre2, 'Maria'];

console.log(clientes[1]);

clientes.push('German');
clientes.push(50);

clientes[1] = 'Steve';

console.log(clientes);

function saludar(client) {
  let nombre1 = 'Martin';
  const PI = 3.141592;
  nombre1 = 'Mariana';
  console.log(5 * PI * 2);

  console.log('Hello ' + nombre1);
}

saludar('Pepe');

console.log(nombre1);
