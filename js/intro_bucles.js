//let cantidad = 8;

//cantidad = cantidad + 1;
//cantidad += 1;
//cantidad++;

let empresas = [
  'Lego',
  'Fravega',
  'LG',
  'ATMA',
  'Lenovo',
  'Dell',
  'Apple',
  'Samsung',
];

console.log('Cantidad de elementos', empresas.length);

/*for (let cantidad = 0; cantidad < empresas.length; cantidad++) {
  console.log(empresas[cantidad]);
}*/

/*let cantidad = 0;

while (cantidad < empresas.length) {
  console.log(empresas[cantidad]);
  cantidad++;
}*/

/* console.log('Fin');

empresas.forEach(mostrarEmpresa);

function mostrarEmpresa(empresa) {
  console.log(empresa);
} */

let cantidad = 0;
do {
  console.log(empresas[cantidad]);
  cantidad++;
} while (cantidad < empresas.length);
