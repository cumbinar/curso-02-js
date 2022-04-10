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


//cómo se comunican las funciones////
function iniciarApp() {
    usuarioAutenticado('Cumbi'); //llama a la función posterior, una función dentro de otra función///
}

iniciarApp();

function usuarioAutenticado(usuario) {
    console.log('Autenticando Usuario....Espera');
    console.log(`Autenticación exitosa: ${usuario}`);
}


//añadir funciones a un objeto////////////////////////////////

const reproductor = {
    reproducir: function (id) {
        console.log(`en reproducción la canción ${id}`);
    },

        pausar: function() {
            console.log('pausando')
    }
    
}

reproductor.reproducir(3750);
reproductor.reproducir(38);
reproductor.reproducir(3025);
reproductor.pausar();


const listaCanciones = {
    cancionero: function(ritmo) {
        console.log(`Lista de Cumbi, temas ${ritmo}`);
    }
}

listaCanciones.cancionero("salsa");
listaCanciones.cancionero("merengue");
listaCanciones.cancionero("chucuchucu");
listaCanciones.cancionero("carrilera");
listaCanciones.cancionero("carranga");


//arrow functions////////////////////////////////////////////////////////////////

const aprendiendo = function(){
    console.log('Aprendiendo JavaScript');
} /*esta es la forma de función tipo expresión*/

aprendiendo();

const aprendiendo2 = () => console.log('Esta es una arrow function');
/*esta es una arrow function*/
aprendiendo2();

const aprendiendo3 = () => 'Aprendiendo timbales con Cumbi';

console.log(aprendiendo3());

//Parámetros y argumentos en arrow functions///

const aprendiendo4 = (tecnologia, tecnologia2) => `Estoy aprendiendo ${tecnologia} y ${tecnologia2}`;

console.log(aprendiendo4('JavaScript', 'Node.js'));
console.log(aprendiendo4('python', 'html'));
console.log(aprendiendo4('scss', 'css'));
console.log(aprendiendo4('Java', 'gulp'));


//arrow functions en un forEach y un map///

const carrito = [
    { nombre: 'Monitor 27 pulgadas', precio: 2567 },
    { nombre: 'Televisor', precio: 2567 },
    { nombre: 'Smart Phone', precio: 56807 },
    { nombre: 'Tablet', precio: 2567 },
    { nombre: 'altavoz', precio: 67 },
    { nombre: 'Teclado', precio: 857}
]

const nuevoArreglo = carrito.map(producto => `${producto.nombre} - Precio: ${producto.precio}`);

console.log(nuevoArreglo);

carrito.forEach( producto => console.log(`${producto.nombre} - Precio: ${producto.precio}`));


//otras opciones de arrow functions////////

const miMusica = {
    play: id => console.log(`Reproduciendo canción con el id ${id}`),
    detener: () => console.log('Pausando..'),
    borrar: id => console.log(`Borando la canción con el id ${id}`),
    crearCancionero: nombre => console.log(`Creando la playlist de ${nombre}`),
    reproducirCancionero: nombre => console.log(`Reproducuiendo la playlist de ${nombre}`)

}

miMusica.play(555);
miMusica.detener();
miMusica.borrar(567);
miMusica.crearCancionero('Salsa');
miMusica.reproducirCancionero('Chucuchucu');