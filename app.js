

//const eighteenValue = document.getElementById("18pct");
//const twentyValue = document.getElementById("20pct");
let btn = document.getElementById("calculate");

//let fifteenValueTemp = 2;


btn.addEventListener("click", function () {

    console.log(grandTotalValue);

    let grandTotal = document.getElementById("grandtotal-06212022");
    grandTotal.setAttribute("value", grandTotalValue);

    let grandTotalValue = document.getElementById("grandtotal-06212022").value;
    

 
    let tipFifteen = grandTotalValue * 0.15;
    let tipEighteen = grandTotalValue * 0.18;
    let tipTwenty = grandTotalValue * 0.20;

   

    document.getElementById("15pct").innerHTML = tipFifteen;
    document.getElementById("18pct").innerHTML = tipEighteen;
    document.getElementById("20pct").innerHTML = tipTwenty;

    
})