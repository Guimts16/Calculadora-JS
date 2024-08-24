const display = document.getElementById('display')
function deletar() {
    display.value = split()
}
function aparecerNoDisplay(input) {
    const leg = display.value.length
    console.log(leg)
    if (leg >= 11) {
        return;
    }
    if (display.value == "Erro") {
        display.value = input;
        return;
    }
    display.value += input;
}

function limpar() {
    display.value = ""
}

function calcular() {
    try {
        display.value = eval(display.value)
    } catch {
        display.value = "Erro"
    }
}