

let grandTotal = document.getElementById("grandtotal-06212022");

console.log(grandTotal);
let btn = document.getElementById("calculate");
let grandTotalConverted = 0;


btn.addEventListener("click", function () {

    console.log(grandTotal.value);
   grandTotalConverted = Number(grandTotal.value);
   console.log(grandTotalConverted + 20);
    
   let tipFifteen = grandTotalConverted * 0.15;
   let tipFifteenFinal = tipFifteen.toFixed(2);
   let tipEighteen = grandTotalConverted * 0.18;
   let tipEighteenFinal = tipEighteen.toFixed(2);
   let tipTwenty = grandTotalConverted * 0.20;
   let tipTwentyFinal = tipTwenty.toFixed(2);

   console.log(tipFifteenFinal);
   console.log(tipEighteenFinal);
   console.log(tipTwentyFinal);

   document.getElementById("15pct").innerHTML = tipFifteenFinal;
   document.getElementById("18pct").innerHTML = tipEighteenFinal;
   document.getElementById("20pct").innerHTML = tipTwentyFinal;


});