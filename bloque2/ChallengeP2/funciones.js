// funcion BigThreeLoaded 
function bigThree(a, b, c) {
    const numMayor = Math.max(a, b, c);
    return numMayor

}

// AVGReloaded

function promedio(a, b, c) {
    const avrg = (a + b + c) / 3;
    return avrg;
}

// [Plusx5]
const cargaNumero = () => {
    let miSuma = 0;
    for (let i = 0; i < 5; i++) {
        const num = parseInt(prompt(`ingrese el numero a sumar`));
        miSuma = miSuma + num;
    }
    return miSuma;
}

// [newArray]
const arrayFinal = (array1, array2) => {
    const arrayAux = array1.concat(array2);
    return arrayAux;
}


// [SiPeroNo]
const noEstan = (array1, array2) => {
    array1 = array1.filter(val => !array2.includes(val));
    array1.length !== 0 ? null : array1 = ["todos iguales"];
    return array1;
}


//[Filter]
const filtro = (array) => {
    const newArray = [];
    for (let i = 0; i < array.length; i++) {
        newArray.includes(array[i]) ? null : newArray.push(array[i]);
    }
    return newArray;
}

// [NoLength]

function contarCaracteres(str) {
    //Pasa la cadena a minusculas
    //str = str.toLowerCase()
    //saca los espacios los espacios en blanco
    str = str.replace(/\s/g, "");

    final = {} //Donde guardamos los resultados
    for (let char in str) { //indice de cada caracter

        if (str[char] in final) { //Si el caracter ya fue contado, incrementa el contador
            final[str[char]] = final[str[char]] + 1

        } else { // Si no fue contabilizado, inicializa a 1 el contador
            final[str[char]] = 1

        }
    }
    return final
}

//[WalterWhite]
function cuentaEspacios(str) {
    contador = 0;
    for (let i = 0; i < str.length; i++) {
        str[i] == " " ? contador += 1 : null;
    }
    console.log(contador)
    return contador
}

//[Capitalize]
function primeraMayuscula(str) {
    if (str && typeof(str) === "string") {
        str = str.split(" ");
        for (var i = 0, x = str.length; i < x; i++) {
            if (str[i]) {
                str[i] = str[i][0].toUpperCase() + str[i].substr(1);
            }
        }
        return str.join(" ");
    } else {
        return str;
    }
}

// [toArray]
function string2array(str) {
    let separador = /:\s|,\s |\s/;
    let myarray = str.split(separador);
    console.log(myarray)
    return myarray;

}

//[AlCesarLoQueEsDelCesar]
function cifradoCesar() {
    let textoAcifrar = document.getElementById("textoAcifrar").value
        //  document.getElementById("textoCifrado").value = textoAcifrar;
    let desplazamiento = parseInt(document.getElementById("sel1").value)

    let resultado = "";
    for (var i = 0; i < textoAcifrar.length; i++) {

        //get the character code of each letter
        var c = textoAcifrar.charCodeAt(i);

        // handle uppercase letters
        if (c >= 65 && c <= 90) {
            resultado += String.fromCharCode((c - 65 + desplazamiento) % 26 + 65);

            // handle lowercase letters
        } else if (c >= 97 && c <= 122) {
            resultado += String.fromCharCode((c - 97 + desplazamiento) % 26 + 97);

            // its not a letter, let it through
        } else {
            resultado += textoAcifrar.charAt(i);
        }
    }
    // return resultado
    document.getElementById("textoCifrado").value = resultado;

}