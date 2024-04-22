
function calcular() {
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);
    const operacao = document.getElementById('operacao').value;

    let resultado;

    switch (operacao) {
        case 'add':
            resultado = num1 + num2;
            break;
        case 'sub':
            resultado = num1 - num2;
            break;
        case 'mul':
            resultado = num1 * num2;
            break;
        case 'div':
            if (num2 === 0) {
                resultado = "Erro: Divisão por zero!";
            } else {
                resultado = num1 / num2;
            }
            break;
        default:
            resultado = "Operação desconhecida!";
    }

    document.getElementById('resultado').innerText = `O resultado foi: ${resultado}`;
}