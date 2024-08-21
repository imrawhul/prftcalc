function clr() {
  document.getElementById("lot").value = '';
  document.getElementById("qty").value = '';
  document.getElementById("bPrice").value = '';
  document.getElementById("sPrice").value = '';
  document.getElementById("investedAmt").innerHTML = '';
  document.getElementById("cAmt").innerHTML = '';
  document.getElementById("profit").innerHTML = '';
  document.getElementById("outputs").style.display = "none";
}

function calculate() {
  document.getElementById("outputs").style.display = "block";
  var lot = document.getElementById("lot").value;
  var qty = document.getElementById("qty").value;
  var bPrice = document.getElementById("bPrice").value;
  var sPrice = document.getElementById("sPrice").value;
  var outputs = document.getElementById("outputs");


  lot = parseFloat(lot).toFixed(2);
  qty = parseFloat(qty).toFixed(2);
  bPrice = parseFloat(bPrice).toFixed(2);
  sPrice = parseFloat(sPrice).toFixed(2);

  var iAmount = parseFloat(lot * qty * bPrice).toFixed(2);
  var cAmount = parseFloat(lot * qty * sPrice).toFixed(2);
  var prft = cAmount - iAmount;

  if (isNaN(iAmount)) {
    investedAmt.innerHTML = "Bhakk!";
    document.getElementById("outputs").style.display = "block"
  }
  else {
    document.getElementById("outputs").style.display = "block"
    investedAmt.innerHTML = "Invested Amount: " + iAmount;
    cAmt.innerHTML = "Current Amount: " + cAmount;
    profit.innerHTML = "Total Profit : " + prft;
    if (prft > 0) {
      outputs.style.border = "1px solid #1fa81f";
      outputs.style.backgroundColor = "rgba(0, 242, 95, 0.15)";
      
    }
    else{
      outputs.style.border = "1px solid #ee2840";
      outputs.style.backgroundColor = "rgba(255, 61, 95, 0.15)";
      }

  }

}