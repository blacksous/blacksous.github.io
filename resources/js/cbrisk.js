/*  Brisket Calculator v0.1
*   Last Updated on : 2017-10-25

    Author: Patrick Betts
    Date: 2017-10-25

    Filename: cbrisk.js
*/

var amountNeeded = parseInt(document.getElementById("amount_needed").value);
var startingAmount = 0;
var rawToFinishYield = 0;
var rawToServeYield = 0;
var finishToServeYield = 0;
var product;


var calculationType = function () {
    if (document.getElementsByTagName("input").name === "type") {
        if (document.getElementsByTagName("input").value === "rtf_to_raw"){
            rtfToRaw(amountNeeded);
            return startingAmount;
        } else if (document.getElementsByTagName("input").value === "rts_to_raw"){
            rtsToRaw(amountNeeded);
            return startingAmount;
        } else if (document.getElementsByTagName("input").value === "rts_to_rtf"){
            rtsToRtf(amountNeeded);
            return startingAmount;
        }
    }
}

function rtfToRaw(num) {
    startingAmount = rawToFinishYield / num;
};

function rtsToRaw(num) {
    startingAmount = rawToServeYield / num
};

function rtsToRtf(num) {
    startingAmount = finishToServeYield / num
};

function pickProduct() {
    if (product === "brisket") {
        rawToFinishYield = 36.21 / 100;
        rawToServeYield = (36.21 / 100) / (60 / 100);
        finishToServeYield = 60 / 100;
    } else {
        alert("Please select a product");
    }
};

function calculate() {
    pickProduct();
    calculationType();

    document.getElementById("needed").innerHTML = amountNeeded + " wz";
    document.getElementById("start_with").innerHTML = startingAmount + " wz";

};



window.onload =

