document.getElementById('btn-deposit').addEventListener('click', () => {
    const depositAmountElement = document.getElementById('user-deposit');
    const depositAmountString = depositAmountElement.value;
    const previousDepositAmount = parseFloat(depositAmountString);

    const previousDepositString = document.getElementById('deposit-field');
    const previousDepositTotal = previousDepositString.innerText;
    const DepositAmount = parseFloat(previousDepositTotal)

    const currentTotal = previousDepositAmount + DepositAmount;
    previousDepositString.innerText = currentTotal;

    const currentBalanceElement = document.getElementById('balance-field');
    const currentBalanceString = currentBalanceElement.innerText;
    const currentBalance = parseFloat(currentBalanceString);
    
    const newBalance = currentBalance + previousDepositAmount;
    currentBalanceElement.innerText = newBalance;

    document.getElementById('user-deposit').value = '';
})
// withdraw 
document.getElementById('btn-withdraw').addEventListener('click',()=>{
    const userWithdrawElement = document.getElementById('user-withdraw');
    const userWithdrawString = userWithdrawElement.value;
    const userWithdrawAmount = parseFloat(userWithdrawString);


    const previousWithdrawBalanceElement =  document.getElementById('withdraw-field');
    const previousWithdrawBalanceString = previousWithdrawBalanceElement.innerText;
    const previousWithdrawBalance = parseFloat(previousWithdrawBalanceString)
    
    const withdrawBalance = userWithdrawAmount + previousWithdrawBalance;
     previousWithdrawBalanceElement.innerText = withdrawBalance;
    // console.log(withdrawBalance);

    
    const currentBalanceElement = document.getElementById('balance-field');
    const currentBalanceString = currentBalanceElement.innerText;
    const currentBalance = parseFloat(currentBalanceString)
    const newBalance  = currentBalance - userWithdrawAmount;
    currentBalanceElement.innerText = newBalance
    // console.log(typeof currentBalance);


    userWithdrawElement.value = '';
})