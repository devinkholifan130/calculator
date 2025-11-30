const screen = document.querySelector(".calculator-screen");
const keys = document.querySelector(".calculator-keys");

let expression = ""; // menyimpan input kalkulasi

keys.addEventListener("click", (event) => {
    const target = event.target;
    if (!target.matches("button")) return;

    const value = target.value;

    // AC
    if (value === "all-clear") {
        expression = "";
        screen.value = "";
        return;
    }

    // Delete
    if (value === "delete") {
        expression = expression.slice(0, -1);
        screen.value = expression;
        return;
    }

    // Scientific function buttons
    switch (value) {
        case "sin":
            expression += "sin(";
            screen.value = expression;
            return;

        case "cos":
            expression += "cos(";
            screen.value = expression;
            return;

        case "tan":
            expression += "tan(";
            screen.value = expression;
            return;

        case "log":
            expression += "log(";
            screen.value = expression;
            return;

        case "ln":
            expression += "ln(";
            screen.value = expression;
            return;

        case "exp":
            expression += "exp(";
            screen.value = expression;
            return;

        case "pi":
            expression += Math.PI.toString();
            screen.value = expression;
            return;

        case "e":
            expression += Math.E.toString();
            screen.value = expression;
            return;
    }

    // Equal button
    if (value === "=") {
        try {
            let calc = expression;

            // Replace scientific syntax → Math functions
            calc = calc.replace(/sin\(/g, "Math.sin(");
            calc = calc.replace(/cos\(/g, "Math.cos(");
            calc = calc.replace(/tan\(/g, "Math.tan(");
            calc = calc.replace(/log\(/g, "Math.log10(");
            calc = calc.replace(/ln\(/g, "Math.log(");
            calc = calc.replace(/exp\(/g, "Math.exp(");

            expression = eval(calc).toString();
            screen.value = expression;
        } catch {
            screen.value = "Error";
            expression = "";
        }
        return;
    }

    // Input angka, titik, operator
    expression += value;
    screen.value = expression;
});
