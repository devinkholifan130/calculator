// Ambil elemen layar kalkulator
const calculatorScreen = document.querySelector('.calculator-screen');

// Variabel utama
let expression = "";

// Update layar
function updateScreen(value) {
    calculatorScreen.value = value;
}

// Event Listener utama untuk semua tombol
document.querySelector('.calculator-keys').addEventListener('click', event => {
    const target = event.target;
    if (!target.matches('button')) return;

    const value = target.value;

    // Tombol AC
    if (value === 'all-clear') {
        expression = "";
        updateScreen("");
        return;
    }

    // Backspace
    if (value === 'backspace') {
        expression = expression.slice(0, -1);
        updateScreen(expression);
        return;
    }

    // Square root → √x
    if (value === 'sqrt') {
        if (expression !== "") {
            expression = Math.sqrt(parseFloat(expression)).toString();
            updateScreen(expression);
        }
        return;
    }

    // Square → x²
    if (value === 'square') {
        if (expression !== "") {
            expression = Math.pow(parseFloat(expression), 2).toString();
            updateScreen(expression);
        }
        return;
    }

    // Percent → x / 100
    if (value === 'percent') {
        if (expression !== "") {
            expression = (parseFloat(expression) / 100).toString();
            updateScreen(expression);
        }
        return;
    }

    // Plus-Minus → -x
    if (value === 'plusminus') {
        if (expression !== "") {
            expression = (parseFloat(expression) * -1).toString();
            updateScreen(expression);
        }
        return;
    }

    // Tombol sama dengan "="
    if (value === '=') {
        try {
            expression = eval(expression).toString();
            updateScreen(expression);
        } catch {
            updateScreen("Error");
            expression = "";
        }
        return;
    }

    // Tambah angka, operator, titik, bracket
    expression += value;
    updateScreen(expression);
});
