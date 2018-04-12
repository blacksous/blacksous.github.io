$(document).ready(function () {
    // Product Object Constructor
    function Products(classification, product, ap_Price, yld, ep_Price) {
        this.classification = classification; // type of product (e.g. Dairy, Produce, Protein)
        this.product = product; // Exact Product (e.g. Chicken Breast, Prime Brisket, etc.)
        this.asPurchased = ap_Price; // Our Purchase Price of Product
        this.yield = yld; // Yield of product
        this.ediblePortion = ep_Price; // Our Sales Price to Re-sellers or private entities
    }

    $("#add_product").submit(function (event) {
        var isValid = true;
        var classification = $("#classification").val();
        var product = $("#product").val();
        var ap_Price = parseFloat($("#ap_Price").val());
        var yld = parseFloat($("#yld").val());
        var ep_Price = parseFloat($("#ep_Price").val());

        // data validation of form
        if(classification == ""){
            classification.next().text("Must select a product type.");
            isValid = false;
        } else {
            classification.next().text("");
        }

        if (product == "") {
            product.next().text("Must input a product name.");
            isValid = false;
        } else {
            product.next().text("");
        }

        if (isNan(ap_Price)){
            ap_Price.next().text("AP Cost must be a number.");
            isValid = false;
        } else if (ap_Price >= 0){
            ap_Price.next().text("AP Cost must be greater than zero.");
            isValid = false;
        } else {
            ap_Price.next().text("");
        }

        if(isValid === false) {
            event.preventDefault();
        } else {
            Products($("#classification").val(), $("#product").val(), $(""))
            var prodstring = JSON.stringify(Products);
            var fs = require('fs');
            fs.writeFile("data.json", prodstring);
        }
    })

});



