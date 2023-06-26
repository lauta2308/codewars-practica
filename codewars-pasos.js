//Alfabeto codewars

// https://www.codewars.com/kata/5a4331b18f27f2b31f000085/

// Verificamos si la palabra ingresada es una sola. Si es mas de una, se envía un error y se termina.

// Si es una palabra, iteramos por la longitud de caracteres

// Por cada iteración, se busca la letra en el alfabeto y se toma su índice. Si el indice es 0, se reemplaza por la última letra del alfabeto. Si el índice no es 0, se verifica si es vocal. En caso de que sea vocal, se la reemplaza por la letra que tenga el índice anterior en el alfabeto. Si no es vocal, se itera el alfabeto desde la siguiente letra hasta el final. En cada iteración, se verifica si la letra es vocal. Si es vocal, se la reemplaza por la letra original y se sale del ciclo, si no es vocal, se sigue iterando hasta encontrar una. Si no se encuentra una vocal, significa que la letra debe ser reemplazada por la A.

const alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
const consonants = ['b','c','d','f','g','h','j','k','l','m','n','p','q','r','s','t','v','w','x','y','z'];
const vowels = ['a','e','i','o','u'];

function replaceLetters(string){
    let newWord = "";

    for(let i = 0; i<string.length; i++){

        let indiceAlfabeto = alphabet.indexOf(string[i], 0); 

        if(indiceAlfabeto === 0){
            newWord = newWord+= alphabet[alphabet.length-1];
        } else if(vowels.includes(string[i])){
          
            newWord = newWord+= alphabet[indiceAlfabeto-1];

        } else if(consonants.includes(string[i])){
            for(let i = indiceAlfabeto; i<= alphabet.length; i++){

                
                if(vowels.includes(alphabet[i])){
                    newWord = newWord+= alphabet[i];
                    break;
                } 

                if(i === alphabet.length){
                    newWord = newWord+="a";
                }
            }
        }
       
    }
    console.log(`${string} = ${newWord}`);
}

replaceLetters("lautaro");



// Index of second occurence

// https://www.codewars.com/kata/63f96036b15a210058300ca9/

// Verificamos si el primer parámetro es un String. Si no lo es, se muestra un error y finaliza.

// Si es un String, se verifica si el segundo parámetro es una letra. Si no lo es, se muestra un error y finaliza.

// si los parámetros son correctos, se verifica si la letra del segundo parámetro está presente en el String. Si no está presente, se retorna -1 y finaliza

// Si la letra está presente, se itera el String del primer parámetro. En cada iteración verificamos si la letra en esa posición es igual a la letra del segundo parámetro. Si es igual, verificamos si es la segunda vez que aparece. En caso de que se repita por segunda vez, se retorna el número de esa iteración y finaliza. Si sólo se repite una vez, se retorna -1 y finaliza.


function second_symbol(string, letter){
    letter = letter.toLowerCase();
    string = string.toLowerCase();
    if(typeof(string) !== "string"){
        return "Not a string"
    }

    if(letter.length > 1){
        return "letter should be one"
     
    }

    if(string.includes(letter)){
        let index = "";
        let occurrenceCount = 0;

        for(let i = 0; i<string.length; i++){
            if(string[i] === letter){
                occurrenceCount = occurrenceCount+1;
                if(occurrenceCount === 2){
                    index = i;
                    break;
                  
                } 
            }
        }

        if(occurrenceCount === 2){
            return index;
        } else {
            return -1;
        }

    } else {
        return -1;
    }

}

console.log(second_symbol('Hello world!!!','l'));
console.log(second_symbol('Hello world!!!', 'O'));
console.log(second_symbol("jbjtGWyenuwZmvwdJbQUUfSOACXkkprTEpkiJbhBLgYmMdEZZdmpPdlmfQHnNPmOpVWnIXBcaytOzjCGB", "F"));



// Find the unique number

// https://www.codewars.com/kata/585d7d5adb20cf33cb000235/

// Verificamos si el número del índice 0 es igual al último número. Si no lo es, verificamos si el número es igual al de la posición 1. En caso de  que no lo sea, retornamos el número de la posición 0 y finaliza.

// En caso de que alguna de las dos condiciones anteriores sean verdaderas, se itera el arreglo desde la posición 2 y en cada iteración se verifica si la letra de esa posición es igual a la letra de la posición anterior. Si es igual, se pasa a la siguiente iteración, si no lo es, se retorna el número de esa posición y finaliza.


function findUniq(array){
    if(array[0] !== array[array.length-1] && array[0] !== array[1]){
        return array[0];
    } else {
       
        for(let i = 1; i<array.length; i++){
            if(array[i] === array[i-1]){
                continue;
            } else {
                console.log(i);
                return array[i];
            }
        }
    }
}


console.log(findUniq([ 1, 1, 1, 2, 1, 1 ]));
console.log(findUniq([ 0, 0, 0.55, 0, 0 ]));


// Casino chips

// https://www.codewars.com/kata/5e0b72d2d772160011133654/

// Verificar si los 3 tipos de fichas tienen la misma cantidad. Si tienen la misma cantidad, retornar el número de fichas y finaliza.

// Si no son la misma cantidad, verificar si hay dos fichas que tengan la misma cantidad. Si no hay dos fichas que sean de la misma cantidad, realizar la suma de las dos menores. Si el resultado de ésto es mayor que la cantidad de fichas de color restante, retornar el número sumándole la diferencia entre su mismo valor y la cantidad restante. En caso de que el resulado no haya sido menor, retornar el numero obtenido.

// Si hay dos fichas que tengan la misma cantidad, verificar si el número de una de éstas es mayor que la de color restante, en caso de que sea mayor, retornar la cantidad de una de las fichas de mayor tamaño. en caso de que no sea mayor, restar el número de fichas de mayor tamaño con uno de los otros dos, a ese resultado, sumarle la diferencia entre ese número y el de la ficha restante y retornar el resultado. finaliza.


function casinoChips(array){

    let days;
    let operacion = 0;
    array = array.sort(function(a, b) {
        return a - b;
      });

    

      switch (true) {

        // 3 fichas con la misma cantidad
        case array[0] === array[1] && array[0] === array[2]: 
        days = array[0];

        break;

        // dos fichas de igual cantidad y menor que la restante 

        case array[0] === array[1] && array[0] < array[2]: 
        operacion = array[2] - array[1];
        if(operacion > array[0]){
            days = operacion - array[0];
        } else {
            days = operacion + array[0];
        }
       
        break;

        // dos fichas de igual cantidad mayores que la restante
        case array[1] === array[2] && array[1] > array[0]:
        days = array[1];
        break;


    // 3 fichas diferentes
      case array[0] < array[1] && array[1] < array[2]:
        operacion = array[0] + array[1];

        if(operacion < array[2]){
            days = operacion;
        } else{
            days = operacion - (operacion - array[2]);

        }
        break;
        default:
            break;

    }
    
    console.log(`${array} = ${days}`)
    
    
}



casinoChips([4,5,6]);
casinoChips([3,3,4]);
casinoChips([1,1,4]);
casinoChips([1,1,2]);
casinoChips([5,4,2]);
casinoChips([4,4,1]);
casinoChips([4,4,10]);
casinoChips([4,4,5]);
casinoChips([40,10,3]);
casinoChips([4,2,1]);
casinoChips([10,3,5]);



// Panagram

// Creo un arreglo donde cada posición va a representar una letra en el alfabeto ordenadas.

// Itero el String recibido por parámetro

// Si quedan iteraciones por hacer, en cada iteración verificamos si la letra se encuentra en el arreglo del alfabeto. Si está presente, itero el alfabeto y reemplazo la letra por un string vacío y paso a la siguiente iteración. Si no se encuentra igual continúo a la siguiente iteración.


// Cuando no quedan iteraciones por hacer, elimino todos los espacios vacíos del arreglo

// Verifico si el arreglo tiene al menos un elemento. SI lo tiene, la palabra no es panagrama, si no lo tiene sí lo es.




function isPangram(string){
    let alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']

    for(let i = 0; i<string.length; i++){
     
        let indexLetter = alphabet.indexOf(string[i]);

        if(indexLetter !== -1){
            alphabet[indexLetter] = "";
        }

       
    }


    let result  = alphabet.every(element => element === "");


    if(result){
        result = "is a pangram";
    } else {
        result = "not a pangram";
    }

    console.log(`${string} = ${result}`);

}



isPangram("The quick brown fox jumps over the lazy dog");
isPangram("hello world");
