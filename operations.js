function application(){
    let result = prompt("CALCULADORA" + 
                        "\nSelecciona la opcion a realizar." +
                        "\n1. Suma." +
                        "\n2. Resta." +
                        "\n3. Multiplicacion." +
                        "\n4. Division.");
    let first, second = 0;
    switch(result){
        case "1":{
            first = prompt("Ingresa el primer valor.");
            second = prompt("Ingresa el segundo valor.");
            alert("El resultado de la suma es: " + addition(Number.parseInt(first), Number.parseInt(second)));
            break;
        }

        case "2":
            first = prompt("Ingresa el primer valor.");
            second = prompt("Ingresa el segundo valor.");
            alert("El resultado de la resta es: " + rest(Number.parseInt(first), Number.parseInt(second)));
            break;

        case "3":
            first = prompt("Ingresa el primer valor.");
            second = prompt("Ingresa el segundo valor.");
            alert("El resultado de la multiplicacion es: " + multiplication(Number.parseInt(first), Number.parseInt(second)));
            break;

        case "4":
            first = prompt("Ingresa el primer valor.");
            second = prompt("Ingresa el segundo valor.");
            alert("El resultado de la division es: " + division(Number.parseInt(first), Number.parseInt(second)));
            break;

            default:
                break;
    }
}


function multiplication(first, second){
    return first * second;
}

function division(first, second){
    if(second ==! 0)
        return first / second;
    return null;
}

function addition(first, second){
    return first + second;
}

function rest(first, second){
    return first + second;
}