// Add click event listener to cashout button
document.getElementById("getbonous-money-btn").addEventListener("click", function () {
  // 1. Get the agent/mobile number input
  const CouponeNumber = getValueFromInput("getbonous-coupon-code");

  // 2. Validate agent number length (must be 11 digits)
  if (CouponeNumber.length != 4) {
    alert("Invalid Number");
    return;
  }


  const currentBalance = getBalance();
  console.log(currentBalance);


  if (currentBalance < 0) {
    alert("Invalid Amount");
    return;
  }

  // 7. Get the PIN input for verification
  const pin = getValueFromInput("getbonous-coupon-code");

  // 8. Verify PIN and process cashout
  if (pin === "1234") {
    alert("You have get the bonus succesfully");
    console.log("currentBalance", currentBalance);
    setBalace(currentBalance);

    //1. history container ke dhore anbo age
    const history = document.getElementById("history-container");

    //2. new div create korbo
    const newHistory = document.createElement("div");
    //3. new div e inner html add korbo
    newHistory.innerHTML = `
         <div class="transaction-card p-5 bg-base-100">
      Bonus ${currentBalance} TAKA Success to CouponeCode ${CouponeNumber} ,at ${new Date()}
      </div>
    `;
    //4.history container e new div append krbo
    history.append(newHistory);
  } else {
    alert("Invalid Pin");
    return;
  }
});