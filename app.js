

let grandTotal = document.getElementById("grandtotal-06212022");

console.log(grandTotal);
let btn = document.getElementById("calculate");
let grandTotalConverted = 0;


btn.addEventListener("click", function () {

    console.log(grandTotal.value);
   grandTotalConverted = Number(grandTotal.value);
   console.log(grandTotalConverted + 20);
    
   let tipFifteen = grandTotalConverted * 0.15;
   let tipEighteen = grandTotalConverted * 0.18;
   let tipTwenty = grandTotalConverted * 0.20;

   console.log(tipFifteen);
   console.log(tipEighteen);
   console.log(tipTwenty);

    document.getElementById("15pct").innerHTML = tipFifteen;
    document.getElementById("18pct").innerHTML = tipEighteen;
    document.getElementById("20pct").innerHTML = tipTwenty;


});