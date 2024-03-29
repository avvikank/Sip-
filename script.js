document.addEventListener("DOMContentLoaded", function() {
    const sipAmountInput = document.getElementById("sipAmount");
    const rateInput = document.getElementById("rate");
    const tenureInput = document.getElementById("tenure");
    const maturityValueSpan = document.getElementById("maturityValue");

    function calculateMaturityValue() {
        const sipAmount = parseFloat(sipAmountInput.value);
        const rate = parseFloat(rateInput.value) / 100;
        const tenure = parseInt(tenureInput.value);

        if (!isNaN(sipAmount) && !isNaN(rate) && !isNaN(tenure)) {
            const maturityValue = sipAmount * (((1 + rate) ** tenure - 1) / rate) * (1 + rate);
            maturityValueSpan.textContent = "₹ " + maturityValue.toFixed(2);
        } else {
            maturityValueSpan.textContent = "₹ 0.00";
        }
    }

    sipAmountInput.addEventListener("input", calculateMaturityValue);
    rateInput.addEventListener("input", calculateMaturityValue);
    tenureInput.addEventListener("input", calculateMaturityValue);
});
