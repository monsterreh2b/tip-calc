 


//const eighteenValue = document.getElementById("18pct");
//const twentyValue = document.getElementById("20pct");
let btn = document.getElementById("calculate");

//let fifteenValueTemp = 2;


btn.addEventListener("click", function () {
    let grandTotal = document.getElementById("grandtotal-06212022");
    let grandTotalValue = document.getElementById("grandtotal-06212022").value;
    grandTotal.setAttribute("value", grandTotalValue);
 
    let tipFifteen = grandTotalValue * 0.15;

    //console.log(tipFifteen);

    document.getElementById("15pct").innerHTML = tipFifteen;

    //document.getElementById("15pct").innerHTML = 
    
    //let tipFifteen = document.getElementById("15pct").value = grandTotalValue * 0.15;
    //console.log(tipFifteen);
    
    //grandTotalValue.setAttribute("value", grandTotalValue.innerHTML);
    //console.log(grandTotalValue);
    //console.log(grandTotalValue * 0.15);
    //fifteenValueTemp = grandTotalValue.value * 0.15;
    //console.log(fifteenValueTemp);
   
    //fifteenValue.innerHTML = fifteenValue.value;
})