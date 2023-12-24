"use strict";
var $ = function (id) {
    return document.getElementById(id);
};

var processEntry = function() {
    var income = parseInt( $("income").value );
    if (income < 0 || isNaN(income)) {
        alert("income must be greater than 0 and a valid number.");
        $("income").value = "";
      } else {
        $("tax").value = calculateTax(income);
      }
    $("income").focus();
}

function calculateTax(income){
    var tax = 0;
    if (income >= 0 && income <= 9275){
        tax = (income * 0.10);
    }else if (income <= 37650) {
        tax = (income - 9275) * 0.15 + 927.50;
    }else if (income <= 91150 ) {
        tax = (income - 37650) * 0.25 + 5183.75;
    }else if (income <= 190150) {
        tax = (income - 91150) * 0.28 + 18558.75 ;
    }else if (income <= 413350 ) {
    tax = (income - 190150) * 0.33 + 46278.75 ;
    }else if (income <= 415050) {
    tax = (income - 413350) * 0.35 + 119934.75 ;
    }else {
        tax = (income - 415050) * 0.396 + 120529.75 ;
    }
    tax = tax.toFixed(2);
    return tax;
}

window.onload = function () {
    $("calculate").onclick = processEntry;
};