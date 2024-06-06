function calcular() {
    var num1 = parseFloat(document.getElementById("num1").value);
    var num2 = parseFloat(document.getElementById("num2").value);
    var operador = document.getElementById("operador").value;
    var result;

    switch (operador) {
        case "soma":
            result = num1 + num2;
            break;
        case "sub":
            result = num1 - num2;
            break;
        case "mult":
            result = num1 * num2;
            break;
        case "div":
            if (num2 !== 0) {
                result = num1 / num2;
            } else {
                result = "Erro: divisão por zero";
            }
            break;
        default:
            result = "Operação inválida";
    }

    document.getElementById("resultado").innerText = "Resultado: " + result;
}
