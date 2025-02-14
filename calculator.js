

function display(input) {
    document.getElementById("display").value += input;
}

function clrDisplay() {
    document.getElementById("display").value = " ";
}

function factorial() {
    const display = document.getElementById("display");
    let n = display.value;

    if (n < 0) {
        display.value = "Error";
        return;
    }

    let fact = 1;
    for (let i = 1; i <= n; i++) {
        fact *= i;
    }

    display.value = fact; 
}

function calculate() {
    const display = document.getElementById("display");
    try {
        display.value = eval(display.value);
    } catch {
        display.value = "Error";
    }
}
