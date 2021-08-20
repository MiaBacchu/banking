// handle deposit button event
document.getElementById('deposit-button').addEventListener('click', function () {
    // get the ammount deposited
    const depositInput = document.getElementById('deposit-input');
    const newDepositAmmount = parseFloat(depositInput.value);
    depositInput.value = '';
    // adding section
    const depositTotal = document.getElementById('deposit-total');
    const previousDipositAmmount = parseFloat(depositTotal.innerText);
    const newDepositTotal = previousDipositAmmount + newDepositAmmount;
    depositTotal.innerText = newDepositTotal;
    // update balance
    const balanceTotal = document.getElementById('balance-total');
    const previousBalanceTotal = parseFloat(balanceTotal.innerText);
    const newBalanceTotal = previousBalanceTotal + newDepositAmmount;
    balanceTotal.innerText = newBalanceTotal;

})

// handle withdraw button event
document.getElementById('withdraw-button').addEventListener('click', function () {
    const withdrawInput = document.getElementById('withdraw-input');
    const newWithdrawAmount = parseFloat(withdrawInput.value);
    withdrawInput.value = '';
    // adding
    const withdrawTotal = document.getElementById('withdraw-total');
    const previousWithdrawTotal = parseFloat(withdrawTotal.innerText);
    const newWithdrawTotal = previousWithdrawTotal + newWithdrawAmount;
    withdrawTotal.innerText = newWithdrawTotal;
    // update balance
    const balanceTotal = document.getElementById('balance-total');
    const previousBalanceTotal = parseFloat(balanceTotal.innerText);
    const newBalanceTotal = previousBalanceTotal - newWithdrawAmount;
    balanceTotal.innerText = newBalanceTotal;

})