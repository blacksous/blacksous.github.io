function cBrisket() {
      var rtf = document.getElementById("rtf").value;
      var raw = 0;
      var yld = 0.3621;

      raw += (rtf / yld) / 16;

      raw = Number((raw).toFixed(2));

      document.getElementById("raw").innerHTML = "Order " + raw + "# of Raw Brisket";
}

document.getElementById("rtf").addEventListener("change", cBrisket, false);

function fBrisket() {
  var rts = document.getElementById("rts").value;
  var svd = 0;
  var yld = 0.6;

  svd += (rts / yld);

  //rtf = Number((rtf).toFixed(1));

  document.getElementById("frtf").innerHTML = "You need" + svd + "oz of RTF Brisket";
}

document.getElementById("rts").addEventListener("change", fBrisket, false);
