var listaEntrada = new Array();
var listaRespuesta = new Array();
var listaVerificacion = new Array();
var listaTalloYHojas = new Array();
var frecuencia = new Array();
var frecuenciaTemporal = new Array();
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
        //document.write(listaVerificacion[i] + ", ");
        var test = document.createElement("p");
        var test2 = document.createTextNode(listaVerificacion[i] + ", ");
        test.appendChild(test2);
        document.getElementById("numerosIngresados").appendChild(test);
    }

    // ordenada los números

    for (var i = 0; i < listaRespuesta.length; i++) {
        //cuenta los caractere para trasformar a decimal
        var guardarElNumeroPosicion = listaRespuesta[i];
        var numeroTransformarCaracter = guardarElNumeroPosicion.split("");
        var totalCaracter = numeroTransformarCaracter.length;

        if (totalCaracter === 2) {
            var decimal = guardarElNumeroPosicion * 0.1;
            listaTalloYHojas.push(decimal);
            console.log(decimal);
            var promedio = decimal + decimal;
        } if (totalCaracter === 3) {
            var decimal = guardarElNumeroPosicion * 0.01;
            listaTalloYHojas.push(decimal);
        }
    }

    //trasforma a tallos y hojas
    //frecuencia
    var contarNumerosRepetidos = 1;//pendiente arreglar

    for (var i = 0; i < listaTalloYHojas.length; i++) {
        if (listaTalloYHojas[i] === listaTalloYHojas[i + 1]) {
            contarNumerosRepetidos++;
            frecuenciaTemporal.push(contarNumerosRepetidos);
            var test = document.createElement("LI");
            var test2 = document.createTextNode(listaTalloYHojas[i].toFixed(1));
            test.appendChild(test2);
            document.getElementById("tallos1").appendChild(test);
        } else {
            var test = document.createElement("LI");
            var test2 = document.createTextNode(listaTalloYHojas[i].toFixed(1));
            test.appendChild(test2);
            document.getElementById("tallos1").appendChild(test);
            contarNumerosRepetidos = 1;
            frecuencia.push(contarNumerosRepetidos);
        }
    }

    //Media

    var promedio2 = promedio / n;
    console.log(promedio+"/"+promedio2);
    var promedioImprimir = document.createElement("LI");
    var promedioImprimir2 = document.createTextNode(promedio2.toFixed(1));
    promedioImprimir.appendChild(promedioImprimir2);
    document.getElementById("promedioId").appendChild(promedioImprimir);

    //moda
    var uniqs = listaTalloYHojas.filter(function (item, index, array) {
        return array.indexOf(item) === index;
    })

    for (var i = 0; i < uniqs.length; i++) {
        var test = document.createElement("LI");
        var test2 = document.createTextNode(uniqs[i].toFixed(1));
        test.appendChild(test2);
        document.getElementById("modaId").appendChild(test);
    }

    //mediana
    var iniciarBucle = listaTalloYHojas.length % 2;
    var mediana = 0;
    if (iniciarBucle == 1) {
        var mediasEnproceso = listaTalloYHojas.length - 1;
        var mediana2 = mediasEnproceso / 2;
        mediana = mediana2;
        var medianaImprimir = document.createElement("LI");
        var medianaImprimir2 = document.createTextNode(listaTalloYHojas[mediana].toFixed(1));
        medianaImprimir.appendChild(medianaImprimir2);
        document.getElementById("medianaId").appendChild(medianaImprimir);

    } if (iniciarBucle == 0) {
        var mediasEnproceso = listaTalloYHojas.length / 2;
        mediana = listaTalloYHojas[mediasEnproceso-1] + listaTalloYHojas[mediasEnproceso];
        var resultadoDelamedia=mediana/2;
        var medianaImprimir = document.createElement("LI");
        var medianaImprimir2 = document.createTextNode(resultadoDelamedia.toFixed(1));
        medianaImprimir.appendChild(medianaImprimir2);
        document.getElementById("medianaId").appendChild(medianaImprimir);
    }

    //imprime la frecuencia
    //add array frecuencia no porcentual

    for (var i = 0; i < frecuencia.length; i++) {
        var frecuenciaAddNoPorcentual = frecuencia[i] / n;
        frecuenciNoPorcentual.push(frecuenciaAddNoPorcentual);
        var medianaImprimir = document.createElement("LI");
        var medianaImprimir2 = document.createTextNode(frecuencia[i]);
        medianaImprimir.appendChild(medianaImprimir2);
        document.getElementById("frecuenciaId").appendChild(medianaImprimir);
    }

    
    //imprimir frecuencia no porcentual
    //add acumulativa
    for (var i = 0; i < frecuenciNoPorcentual.length; i++) {
        var acumulativa = frecuenciNoPorcentual[i]+frecuenciNoPorcentual[i+1];
        var contar = frecuenciaAddNoPorcentual + frecuenciaAcumulativa;
        frecuenciaAcumulativa.push(contar);
        var medianaImprimir = document.createElement("LI");
        var medianaImprimir2 = document.createTextNode(frecuenciNoPorcentual[i]);
        medianaImprimir.appendChild(medianaImprimir2);
        document.getElementById("frecuenciaNoPorcentualId").appendChild(medianaImprimir);
    }

    for (var i = 0; i < frecuenciaAcumulativa.length; i++) {
        var medianaImprimir = document.createElement("LI");
        var medianaImprimir2 = document.createTextNode(frecuenciaAcumulativa[i]);
        medianaImprimir.appendChild(medianaImprimir2);
        document.getElementById("frecuenciaAcumulativaId").appendChild(medianaImprimir);
    }

}

