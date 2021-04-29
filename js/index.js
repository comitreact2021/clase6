nombre1 = 'Pepe';
edad1 = 25;
altura1 = 180;

nombre2 = 'Elon';
edad2 = 50;
altura2 = 182;

function sumar(num1, num2) {
  return num1 + num2;
}

if (nombre1 === 'Pepe' && sumar(3, 3) > 5 && edad1 > 20) {
  console.log('Entre...');
} else {
  console.log('No era cierto');
}
