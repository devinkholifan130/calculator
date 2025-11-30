// Ambil elemen input dan elemen result
const totalInput = document.getElementById("total");
const percentageInput = document.getElementById("percentage");
const calculateBtn = document.getElementById("calculate-btn");
const resultBox = document.getElementById("result");

// Event tombol Calculate
calculateBtn.addEventListener("click", () => {
    const totalValue = parseFloat(totalInput.value);
    const percentageValue = parseFloat(percentageInput.value);

    // Validasi input
    if (isNaN(totalValue) || isNaN(percentageValue)) {
        resultBox.innerHTML = `<span style="color: red;">Please enter both values correctly.</span>`;
        return;
    }

    // Hitung persentase
    const result = (percentageValue / 100) * totalValue;

    // Tampilkan hasil
    resultBox.innerHTML = `
        <strong>${percentageValue}%</strong> of <strong>${totalValue}</strong> is
        <span style="color: green; font-weight: bold;">${result}</span>.
    `;
});
