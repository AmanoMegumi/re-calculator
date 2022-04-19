const operatorReg = /^(\+|-|\*|\/)$/;

function get_calc(btn) {
    const preValue = document.calculator.display.value.slice(-1);
    let value = btn.value;

    if(operatorReg.test(value) && operatorReg.test(preValue)) {
        return;
    }

    if(btn.value === "=") {
        document.calculator.display.value = eval(document.calculator.display.value);
    } else if (btn.value === "AC") {
        document.calculator.display.value = "";
    } else {
        document.calculator.display.value += btn.value;
    }
}