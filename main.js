document.getElementById("newRowBtn").addEventListener("click", newRow);

function newRow(){
  let accounts = document.getElementById("accounts");
  let row = accounts.insertRow();
  let newAccount = row.insertCell(0);
  let newBalance = row.insertCell(1);
  let newInterestRate = row.insertCell(2);
  let newPayment = row.insertCell(3);
  let newDelete = row.insertCell(4);
  newAccount.innerHTML = "<input type='text'>";
  newBalance.innerHTML = "<input type='number' min='0.01' step='0.01'>";
  newInterestRate.innerHTML = "<input type='number' min='0.01' step='0.01'>";
  newPayment.innerHTML = "<input type='number' min='0.01' step='0.01'>";
  newDelete.innerHTML = "<span id='deleteRowBtn'><i class='fa fa-minus-circle'></i></span>";
  newDelete.className = "delete";
}
