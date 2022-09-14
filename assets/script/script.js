//! Dovrai impostare una funzione che calcola un 
//! range di anni (puoi utilizzare una sottrazione)
function rangeYear(x, y) {
    let rangeYear = Math.abs(x - y);
    return rangeYear;
}

//! Imposta una funzione freccia e invocala mostra un output
let rangeOfYear = (x, y) => Math.abs(x - y);
console.log(rangeOfYear(2020, 1923)) // 97

//! Definisci all'interno di un'altra funzione

function Calculator() {
    function sum(x, y) {
        return Number(x + y);
    }
    function subtraction(x, y) {
        return x - y;
    }
    function divide(x, y) {
        return x / y;
    }
    function multiply(x, y) {
        return x * y;
    }
    return {
        sum,
        subtraction,
        divide,
        multiply,
    }
}

Calculator = Calculator();
console.log(Calculator.subtraction(1, 2)) // -1
console.log(Calculator.sum(1, 2)) // 3
console.log(Calculator.divide(1, 2)) // 0.5
console.log(Calculator.multiply(1, 2)) // 2

//? Calculator è stato definito volutamente con la lettera maiuscola all'inizio, e non
//? ..in camelCase perchè si tratta di un Oggetto, come nel caso di Math.propety

//! Utilizza gli operatori che conosci, in particolare quelli di comparazione

console.log(1 + 2 === 3); // Equal
console.log(1 + 2 !== 1); // Not equal
console.log(1 + 2 < 5); // Less
console.log(1 + 2 > 1); // Greater

console.log(1 + 2 && 1) // 1 
console.log(1 + 2 || 1) // 3


//! ESERCIZIO EXTRA -