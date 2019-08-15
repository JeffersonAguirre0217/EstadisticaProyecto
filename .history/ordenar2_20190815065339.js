var listaEntrada = new Array();
var listaRespuesta = new Array();
var listaVerificacion = new Array();
var tallo = new Array();
var hoja = new Array();
var listaTalloYHojas = new Array();
var frecuenciaTemporal = new Array();
var frecuenciaRepetida = new Array();
var frecuenciNoPorcentual = new Array();
var frecuenciaAcumulativa = new Array();

function ordenar() {

    // Ingreso de datos con validación
    var n = prompt('Cuantos números va a ordenar?:');
    while (!/^([0-9])*$/.test(n) || n == "") {
        n = prompt('Error al ingresar número, ingrese cuantos son');
    }
    for (i = 0; i < n; i++) {
        var numero = prompt('ingrese el número[' + (i + 1) + ']:');
        while (!/^([0-9])*$/.test(numero) || numero == "") {
            numero = prompt('Error al ingresar número, ingrese el número[' + (i + 1) + ']:');
        }
        listaEntrada.push(numero);
    }

    listaVerificacion = Array.from(listaEntrada);

    // Ordenamiento y carga de la lista de respuesta
    while (listaEntrada.length > 0) {
        // Las variables se deben resetear en cada iteración del while
        var numeroMenor = null;
        var posicion = -1;
        //Se obtiene el número menor de la la lista
        for (var i = 0; i < listaEntrada.length; i++) {
            if (numeroMenor == null) {
                numeroMenor = listaEntrada[i];
                posicion = i;
            }
            if (listaEntrada[i] < numeroMenor) {
                numeroMenor = listaEntrada[i];
                posicion = i;
            }
        }

        //Se agrega el número menor al array de respuesta
        listaRespuesta.push(numeroMenor);

        // Se elimina el número menor de la lista de entrada
        listaEntrada.splice(posicion, 1);
    }

    // Se imprime la lista de entrada
    for (var i = 0; i < listaVerificacion.length; i++) {
        var test = document.createElement("t");
        var test2 = document.createTextNode(listaVerificacion[i] + ", ");
        test.appendChild(test2);
        document.getElementById("numerosIngresados").appendChild(test);
    }
    //promedio
    var sumaPromedioOriginal= 0;
    // ordenada los números //separamos el numero entero en dos posiciones 0 y 1 //separa hojas y tallos en enteros de array diferentes
    for (var i = 0; i < listaRespuesta.length; i++) {
        var numeroSumar=parseInt(listaRespuesta[i]);
        sumaPromedioOriginal = sumaPromedioOriginal + numeroSumar;

        var guardarElNumeroPosicion = listaRespuesta[i];
        var numeroTransformarCaracter = guardarElNumeroPosicion.split("");
        
        tallo.push(numeroTransformarCaracter[0]);
        hoja.push(numeroTransformarCaracter[1])
    }

    //elimina las hojas repetidas y ordena en la vista
    var eliminaTalloRepetido = tallo.filter(function (item, index, array) {
        return array.indexOf(item) === index;
    })
    for (var i = 0; i < eliminaTalloRepetido.length; i++) {
        var test = document.createElement("LI");
        var test2 = document.createTextNode(eliminaTalloRepetido[i]);
        test.appendChild(test2);
        document.getElementById("tallosId").appendChild(test);
    }
    //frecuenciaRepetida
    var contarNumerosRepetidos = 1;
    for (i = 0; i < hoja.length; i++) {
        if (hoja[i] === hoja[i + 1]) {
            contarNumerosRepetidos++;

            var test = document.createElement("t");
            var test2 = document.createTextNode(hoja[i] + ", ");
            test.appendChild(test2);
            document.getElementById("hojasId").appendChild(test);
            
        } else {
            var test = document.createElement("P");
            var test2 = document.createTextNode(hoja[i]);
            test.appendChild(test2);
            document.getElementById("hojasId").appendChild(test);
            //frecuenciaTemporal.push(contarNumerosRepetidos);
        }
        frecuenciaTemporal.push(contarNumerosRepetidos);
        console.log( "frecuencia"+ frecuenciaTemporal);
    }
    
    //frecuencia

    //Media
    var promedioOriginal = sumaPromedioOriginal/ n;
    var promedioImprimir = document.createElement("LI");
    var promedioImprimir2 = document.createTextNode(promedioOriginal.toFixed(2));
    promedioImprimir.appendChild(promedioImprimir2);
    document.getElementById("promedioId").appendChild(promedioImprimir);
    
        /*/moda
        var uniqs = listaTalloYHojas.filter(function (item, index, array) {
            return array.indexOf(item) === index;
        })
    
        for (var i = 0; i < uniqs.length; i++) {
            var test = document.createElement("LI");
            var test2 = document.createTextNode(uniqs[i].toFixed(1));
            test.appendChild(test2);
            document.getElementById("modaId").appendChild(test);
        }*/

    //mediana 0 par 1 inPar
    var iniciarBucle = listaRespuesta.length % 2;
    var mediana = 0;
    if (iniciarBucle == 1) {
        var mediasEnproceso = n - 1;
        var mediana = mediasEnproceso / 2;
        var medianaImprimir = document.createElement("LI");
        var medianaImprimir2 = document.createTextNode(listaRespuesta[mediana]);
        medianaImprimir.appendChild(medianaImprimir2);
        document.getElementById("medianaId").appendChild(medianaImprimir);

    } if (iniciarBucle == 0) {
        var mediasEnproceso = n/ 2;
        var m1 = parseInt(listaRespuesta[mediasEnproceso]);
        var m2= parseInt(listaRespuesta[mediasEnproceso -1]);
        mediana = m1+m2; 
        var resultadoDelamedia = mediana / 2;
        var medianaImprimir = document.createElement("LI");
        var medianaImprimir2 = document.createTextNode(resultadoDelamedia);
        medianaImprimir.appendChild(medianaImprimir2);
        document.getElementById("medianaId").appendChild(medianaImprimir);
    }

    //imprime la frecuencia
    //add array frecuencia no porcentual
   //cuartiles
   var q1 =1 * n;
   var rQ1= q1/4;
   var medianaImprimir = document.createElement("LI");
   var medianaImprimir2 = document.createTextNode(rQ1);
   medianaImprimir.appendChild(medianaImprimir2);
   document.getElementById("q1Id").appendChild(medianaImprimir);

   var q2 =2 * n;
   var rQ2= q2/4;

   var medianaImprimir = document.createElement("LI");
        var medianaImprimir2 = document.createTextNode(rQ2);
        medianaImprimir.appendChild(medianaImprimir2);
        document.getElementById("q2Id").appendChild(medianaImprimir);

   var q3 =3 * n;
   var rQ3= q3/4;
   var medianaImprimir = document.createElement("LI");
        var medianaImprimir2 = document.createTextNode(rQ3);
        medianaImprimir.appendChild(medianaImprimir2);
        document.getElementById("q3Id").appendChild(medianaImprimir);
        
    var ordenarMayorMenorTallo = eliminaTalloRepetido.sort(function (a, b){
            return a - b;});
            console.log("  ->" , ordenarMayorMenorTallo  );
    console.log( " Histograma");
    for(i = 0; i<ordenarMayorMenorTallo.length; i++){
        console.log(ordenarMayorMenorTallo[i] + " -" + "▓");
        console.log("  |");
    }
    console.log("  -- | -- | -- | -- | -- | -- | -- | -- | -- | -- | -- | --");
    console.log("  0  1    2    3    4    5    6    7    8    9    10");
    console.log(" ");
    console.log( " Diagrama de Bigotes");
    console.log( "       ||      ");
    console.log( "       ||      ");
    console.log( "┌" + "======" + rQ1 + "======" + "┐");
    console.log( "|" + "=============" + "|" );
    console.log( "|" + "=============" + "|");
    console.log( "|" + "=============" + "|");
    console.log( "|" + "======" + rQ2 + "======" + "|");
    console.log( "|" + "=============" + "|");
    console.log( "|" + "=============" + "|");
    console.log( "|" + "=============" + "|");
    console.log( "└" + "======" + rQ2 + "======" + "┘");
    console.log( "       ||      ");
    console.log( "       ||      ");

}
