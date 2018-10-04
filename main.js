const accounts = document.getElementById("accounts");
let rowCount = accounts.rows.length;

document.getElementById("newRowBtn").addEventListener("click", newRow);

function newRow(){
  let newRow = accounts.insertRow(-1);
  let newAccount = newRow.insertCell(0);
  let newBalance = newRow.insertCell(1);
  let newInterestRate = newRow.insertCell(2);
  let newPayment = newRow.insertCell(3);
  let newDelete = newRow.insertCell(4);
  newAccount.innerHTML = "<input type='text'>";
  newBalance.innerHTML = "<input type='number' min='0.01' step='0.01'>";
  newInterestRate.innerHTML = "<input type='number' min='0.01' step='0.01'>";
  newPayment.innerHTML = "<input type='number' min='0.01' step='0.01'>";
  rowCount++;
  newRow.id = 'row-' + rowCount;
  newDelete.innerHTML = "<input class='delete' type='button' value='Delete Row'>";
}

let deleteBtn = document.getElementsByClassName("deleteRowBtn");



$('input[type="button"].delete').click(function(e){
  let currentRow = $(this).parent();
  currentRow.remove();
  alert('success!');
});
$('input[type="button"].delete').off('click');
