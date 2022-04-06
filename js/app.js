console.log("Hola Cumbi Tara");

//Funciones/////

/*function declaration*/

function sumar() {
    console.log(2 + 2);
} /*se declara la función*/
sumar(); /*se llama a la función*/
sumar();
sumar(); /*se uede llamar varias veces la función, se reutiliza*/

/*function expresion*/

const sumar2 = function() {
    console.log(3 + 5);
}
sumar2();


////funciones nativas en javaScript*////func

/*alert('hubo un error');

prompt('¿cuál es tu edad?');

console.log(parseInt('31416'));*/


////diferencia entre método y función////


const numero1 = 20;
const numero2 = '330';

console.log(parseInt(numero1)); //Esto es una función en

console.log(numero2.toString()); //esto es un método


///parámetros y argumentos en funciones////////////////////////////////

function multiplicar(a, b) {  // a y b son parametros
    console.log(a * b);
}

multiplicar(8, 5);  // 8 y 5 son argumentos

multiplicar(134, 321);

multiplicar(8, 13);  //se puede reutilizar

function saludar(nombre, apellido) {
    console.log(`Hola ${nombre} ${apellido}`);
}

saludar('Eduardo', 'Guevara');

saludar('Juan', 'Perez');

saludar('Roberto', 'Torres');


//parámetros por dafault////


function saludar1(nombre1 = 'Sin nombre', apellido1 = 'No tiene apellido') {
    console.log(`Hola ${nombre1} ${apellido1}`);
} /*se agrega por defecto si no se coloca un argumento*/

saludar1('Cumbitara');

saludar1('Eduardo', 'Guevara');

saludar1();

