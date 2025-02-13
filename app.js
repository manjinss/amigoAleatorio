
    // un array para guardar el listado de amigos
let amigosArr = [];
    // con document.getElementById() 
    // puedo obtener un elemento por el id de la etiqueta en html funcionan como objetos
const ingresoDelNombre = document.getElementById("amigo");

    // eso tes para tener una variable de el listado de amigos
    // y poder
const auxiliarParaVerLista = document.getElementById("amigosEnlistados");

    //funcion para agregar amigos a la lista
function agregarAmigo(){
    mostrar();
        //guardo el texto que viene del sistema en una variable
    let auxNombre = ingresoDelNombre.value;
        // para poder revisar el dato ingresado y asegurarme que no ingrese un dato vacio
    if( auxNombre !== "" && auxNombre !== null )
    {
            // agregamos al arreglo el valor obtenido
        amigosArr.push(auxNombre);
            // creamos una etiqueta <li> para poner un listado 
        let lista = document.createElement("li");
        lista.textContent = auxNombre;
        lista.id = "amigosEnlistados";

            // Agregar el li a la lista ul teniendo de referencia el id
        document.getElementById('listaAmigos').append(lista);

            // ya agregado todo limpiamos la variable para tener espacio para el siguiente dato
        ingresoDelNombre.value = '';
        ingresoDelNombre.focus();
    }
    else 
    {
        alert('Por favor ingresa un nombre');
    }

        //debuging
    console.log('Array de amigos:', amigosArr);
}

let botonpresionado = 0 ;
    // funcion para escoger un amigo de la lista
function sortearAmigo(){

        // guardamos el tamaño de la lista de amigos
    let contadorDeAmigos = amigosArr.length;
        // con esto sacamos un numero aleatorio en entero
        // para poderlo utilizar para sacar el dato aleatorio
    let numeroaleatorio = Math.floor(Math.random() * contadorDeAmigos);
    
        // aqui elegimos a la persona de la lista con el numero aleatorio
    let amigoElegido = amigosArr [numeroaleatorio];

        //el contador lo uso para identificar la primera ves que se usa el boton
        // y asi crear el espacio donde se va a colocar la respuesta
    if (botonpresionado == 0)
    {
            // con esto creamos el elemento div para mostrar el resultado
        let resultado = document.createElement("div");
            // con esto le ponemos las caracteristicas y valores necesarios
        resultado.className = "resultadoAmigo";
        resultado.textContent = "Tu Amigo Asignado es ->"+ amigoElegido;
        resultado.id = "pantallita";
            // aqui situamos con append el elemento div
        document.getElementById('resultado').append(resultado);

            // con esto nos aseguramos que el espacio para el resultado solo se muestre una vez
        botonpresionado++;
    }

        // ya habiendo creado el espacio para la respuesta con esto nos aseguramos
        // que se pueda remplazar el espacio y no se cree otro espacio
    else 
    {
        let nuevoResultado = document.getElementById('pantallita')
        nuevoResultado.innerHTML = "Tu Amigo Asignado es ->"+ amigoElegido;
    }
        // aqui despues de tener el resultado ocultamos el listado de amigos
    ocultamos();

        // esto es para hacer debug y mirar en consola los valores internos
    console.log('numero random:', numeroaleatorio);
    console.log('contador maximo:', contadorDeAmigos);
    console.log('nombre de amigo', amigoElegido);
}

function ocultamos() {
        
    let ocultamos = document.querySelectorAll("[id='amigosEnlistados']");
    ocultamos.forEach(function(elemento) {elemento.style.display = "none";});
}

function mostrar(){

    let ocultamos = document.querySelectorAll("[id='amigosEnlistados']");
    ocultamos.forEach(function(elemento) {elemento.style.display = "list-item";})

    //display: list-item;
}