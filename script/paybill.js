document.getElementById("Bill-pay-btn").addEventListener("click", function () {
  //1. get the bank account
  const bankAccount = getValueFromInput("Pay-bill-bank");
  if (bankAccount === "Select a bank") {
    alert("Please select a bank");
    return;
  }
  //2- get back account number
  const accNo = getValueFromInput("Bill-account-number");
  if (accNo.length != 11) {
    alert("invalid account number");
    return;
  }
  //get amount
  const amount = getValueFromInput("Billamount-to-pay");
  const currentBalance = getBalance();
  const newBalance = currentBalance - Number(amount);

  const pin = getValueFromInput("Bill-money-pin");
  if (pin == "1234") {
    alert(`Pay Bill Success to ${bankAccount} at ${new Date()}`);
    setBalace(newBalance);
    //1. history container ke dhore anbo age
    const history = document.getElementById("history-container");

    //2. new div create korbo
    const newHistory = document.createElement("div");
    //3. new div e inner html add korbo
    newHistory.innerHTML = `
         <div class="transaction-card p-5 bg-base-100">
      Pay Bill to ${bankAccount}, acc-no ${accNo}, Amount: ${amount} at ${new Date()}}
      </div>
    `;
    //4.history container e new div append krbo
    history.append(newHistory);
  } else {
    alert("Invalid Pin");
    return;
  }
});
