function get_calc(btn) {
    if(btn.value == "=") {
        document.calculator.display.value = eval(document.calculator.display.value);
    } else if (btn.value == "AC") {
        document.calculator.display.value = "";
    } else {
        document.calculator.display.value += btn.value;
        document.calculator.display.multi_btn.value = "*";
        document.calculator.display.div_btn.value = "/";
    }
}