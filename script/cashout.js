// Add click event listener to cashout button
document.getElementById("cashout-btn").addEventListener("click", function () {
  // 1. Get the agent/mobile number input
  const cashoutNumber = getValueFromInput("cashout-number");

  // 2. Validate agent number length (must be 11 digits)
  if (cashoutNumber.length != 11) {
    alert("Invalid Number");
    return;
  }

  // 3. Get the cashout amount input
  const cashoutAmount = getValueFromInput("cashout-amount");

  const currentBalance = getBalance();

  // 5. Calculate new balance after cashout
  const newBalance = currentBalance - Number(cashoutAmount);
  console.log(newBalance);

  // 6. Validate if new balance is negative (insufficient funds)
  if (newBalance < 0) {
    alert("Invalid Amount");
    return;
  }

  // 7. Get the PIN input for verification
  const pin = getValueFromInput("cashout-pin");

  // 8. Verify PIN and process cashout
  if (pin === "1234") {
    alert("Cashout successful");
    console.log("New balance", newBalance);
    setBalace(newBalance);
        //1. history container ke dhore anbo age
    const history = document.getElementById("history-container");

    //2. new div create korbo
    const newHistory = document.createElement("div");
    //3. new div e inner html add korbo
    newHistory.innerHTML = `
         <div class="transaction-card p-5 bg-base-100">
      Cashout ${cashoutAmount} TAKA Success to ${cashoutNumber} ,at ${new Date()}
      </div>
    `;
    //4.history container e new div append krbo
    history.append(newHistory);
  } else {
    alert("Invalid Pin");
    return;
  }
});

// document.getElementById("cashout-btn").addEventListener("click", function() {
// //1- get the agent number & validate
// const cashoutNumberInput = document.getElementById("cashout-number");
// const cashoutNumber = cashoutNumberInput.value;
// console.log(cashoutNumber);
// if(cashoutNumber.lenght != 11){
//     alert("Invalid Agent Number");
//     return; //return dele eikhne close hye jabe...r return na use korle nicher code sho run hye new payment dekhai debe 11 nicher agent number input niye
// }
// //2- get the amount ,validate,convrt to Number
// const cashoutAmountInput = document.getElementById("cashout-amount");
// const cashoutAmount = cashoutAmountInput.value;
// console.log(cashoutAmount);
// //3- get the current balance, validate, convert to Number
// const balanceElement = document.getElementById("balance");
// const balance = balanceElement.innerText;
// console.log(balance);
// //4- Calculate new Balance
// const newBalance = Number(balance) - Number(cashoutAmount);

// if(newBalance < 0){
//     alert("Invalid Amount");
//     return;
// }

// //5- Get the pin and verify
// const cashoutPinInput = document.getElementById("cashout-pin");
// const pin = cashoutPinInput.value;
// if(pin === '1234'){
// //5-1 >>> true:: show an alert > set balance
// alert('Cashout successful');
// console.log("New balance", newBalance)
// balanceElement.innerText = newBalance

// }
// else{
// //5-6 >>> false:: how an error alert > return
// alert("Invalid pin");
// return;
// }
// });
