// Add click event listener to cashout button
document.getElementById("transfer-money-btn").addEventListener("click", function () {
  // 1. Get the agent/mobile number input
  const transferNumber = getValueFromInput("User-Account-number");

  // 2. Validate agent number length (must be 11 digits)
  if (transferNumber.length != 11) {
    alert("Invalid Number");
    return;
  }

  // 3. Get the transfer amount input
  const transferAmount = getValueFromInput("transfer-amount-input");

  const currentBalance = getBalance();

  // 5. Calculate new balance after cashout
  const newBalance = currentBalance - Number(transferAmount);
  console.log(newBalance);

  // 6. Validate if new balance is negative (insufficient funds)
  if (newBalance < 0) {
    alert("Invalid Amount");
    return;
  }

  // 7. Get the PIN input for verification
  const pin = getValueFromInput("transfer-pin");

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
      transfered ${transferAmount} TAKA Success to ${transferNumber} ,at ${new Date()}
      </div>
    `;
    //4.history container e new div append krbo
    history.append(newHistory);
  } else {
    alert("Invalid Pin");
    return;
  }
});