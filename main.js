const accounts = document.getElementById("accounts");
let rowCount = accounts.rows.length;

document.getElementById("newRowBtn").addEventListener("click", newRow);

function newRow(){
  let newRow = accounts.insertRow(-1);
  let newAccount = newRow.insertCell(0);
  let newBalance = newRow.insertCell(1);
  let newInterestRate = newRow.insertCell(2);
  let newPayment = newRow.insertCell(3);
  newAccount.innerHTML = "<input type='text'>";
  newBalance.innerHTML = "<input type='number' min='0.01' step='0.01'>";
  newInterestRate.innerHTML = "<input type='number' min='0.01' step='0.01'>";
  newPayment.innerHTML = "<input type='number' min='0.01' step='0.01'>";
  rowCount++;
  newRow.id = 'row-' + rowCount;
}

document.getElementById("deleteRowBtn").addEventListener("click", deleteRow);

function deleteRow(){
  let accounts = document.getElementById("accounts");
  let rowCount = accounts.rows.length;
  accounts.deleteRow(rowCount -1);
}
