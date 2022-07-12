const grandTotalValue = document.getElementById("grandtotal-06212022");
const fifteenValue = document.getElementById("15pct");
const eighteenValue = document.getElementById("18pct");
const twentyValue = document.getElementById("20pct");
const btn = document.getElementById("calculate");

let fifteenValueFinal = grandTotalValue.innerHTML * 0.15;


btn.addEventListener("click", function () {
   
    grandTotalValue.setAttribute("value", grandTotalValue.innerHTML);
    console.log(grandTotalValue.value);
    fifteenValue.setAttribute("value", fifteenValueFinal);
    console.log(fifteenValueFinal);
    //fifteenValue.innerHTML = fifteenValue.value;
});