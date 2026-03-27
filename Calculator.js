function calculateTip() {

     let bill = parseFloat(document.getElementById("bill").value);
     let tipPercent = parseFloat(document.getElementById("tip").value);
     let people = parseInt(document.getElementById("people").value);

    if (isNaN(bill) || isNaN(tipPercent) || isNaN(people) || people <= 0) {
        alert("Please enter valid values!");
        return;
    }

    let totalTip = (bill * tipPercent) / 100;
    let totalBill = bill + totalTip;

    let tipPerPerson = totalTip / people;
    let totalPerPerson = totalBill / people;
     document.getElementById("result").innerHTML =
   "Tip per Person: ₹" + tipPerPerson.toFixed(2) +    "<br>Total per Person: ₹" + totalPerPerson.toFixed(2);
 }