function calculateTip() {
  const tip_output = document.getElementById("tip_output");
  let amount = document.getElementById("amount").value;
  let people = document.getElementById("people").value;
  let tip = document.getElementById("tip").value;

  if (amount === "" || tip === 0) {
    alert("Please enter values");
    return;
  }

  if (people === "" || people <= 1) {
    alert("Please enter number of people");
    return;
  }

  let total = (amount * (tip / 100)) / people;
  total = Math.round(total);
  total = total.toFixed(2);

  console.log(total);

  if (tip_output) {
    tip_output.innerHTML = total + "$ per person";
  }
}
