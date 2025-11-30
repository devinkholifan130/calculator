// Ambil elemen
const numberInput = document.getElementById("number-input");
const calculateBtn = document.getElementById("calculate-sqrt-btn");
const resultBox = document.getElementById("sqrt-result");

// Event ketika tombol ditekan
calculateBtn.addEventListener("click", () => {
    const value = parseFloat(numberInput.value);

    // Validasi
    if (isNaN(value)) {
        resultBox.textContent = "Please enter a valid number.";
        return;
    }

    if (value < 0) {
        resultBox.textContent = "Cannot calculate square root of negative numbers.";
        return;
    }

    // Hitung akar kuadrat
    const sqrtValue = Math.sqrt(value);

    // Tampilkan hasil
    resultBox.textContent = `√${value} = ${sqrtValue}`;
});
