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

alert('hubo un error');

prompt('¿cuál es tu edad?');

console.log(parseInt('31416'));


////diferencia entre método y función////


const numero1 = 20;
const numero2 = '330';

console.log(parseInt(numero1)); //Esto es una función en

console.log(numero2.toString()); //esto es un método
