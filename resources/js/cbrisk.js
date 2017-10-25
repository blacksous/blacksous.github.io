function rBrisket() {
      var rtf = document.getElementById("rtf").value;
      var raw = 0;
      var yld = 0.3621; // Yield % converted to Decimal

      raw += (rtf / yld) / 16; // Yield converted from wz to lbs

      raw = Number((raw).toFixed(2)); //Shortening to hundredths decimal place

      document.getElementById("raw").innerHTML = "Order " + raw + "# of Raw Brisket";
}

document.getElementById("rtf").addEventListener("change", rBrisket, false);

function fBrisket() {
  var rts = document.getElementById("rts").value;
  var svd = 0;
  var yld = 0.6; // Yield % converted to Decimal

  svd += (rts / yld);

  document.getElementById("frtf").innerHTML = "You need" + svd + "oz of RTF Brisket";
}

document.getElementById("rts").addEventListener("change", fBrisket, false);
