document.getElementById("add-money-btn").addEventListener("click", function () {
  //1. get the bank account
  const bankAccount = getValueFromInput("add-money-bank");
  if (bankAccount === "Select a bank") {
    alert("Please select a bank");
    return;
  }
  //2- get back account number
  const accNo = getValueFromInput("add-money-number");
  if (accNo.length != 11) {
    alert("invalid account number");
    return;
  }
  //get amount
  const amount = getValueFromInput("add-money-amount");
  const currentBalance = getBalance();
  const newBalance = currentBalance + Number(amount);

  const pin = getValueFromInput("add-money-pin");
  if (pin == "1234") {
    alert(`Add Money Success from ${bankAccount} at ${new Date()}`);
    setBalace(newBalance);
    //1. history container ke dhore anbo age
    const history = document.getElementById("history-container");

    //2. new div create korbo
    const newHistory = document.createElement("div");
    //3. new div e inner html add korbo
    newHistory.innerHTML = `
         <div class="transaction-card p-5 bg-base-100">
      Add Money Success from ${bankAccount} ,acc-no ${accNo} at ${new Date()}
      </div>
    `;
    //4.history container e new div append krbo
    history.append(newHistory);
  } else {
    alert("Invalid Pin");
    return;
  }
});
