// machien id >>>input

function getValueFromInput(id){
    const input = document.getElementById(id);
    const value = input.value;
    console.log(id, value);//id r value ekshte dekhabe console e ooutput ta 
    return value;
}

// Machine >> balence
//
function getBalance(){
  const balanceElement = document.getElementById("balance");
  const balance = balanceElement.innerText;
  console.log("Current balance", Number(balance));
  return Number(balance);
}

// machine value >> set balance
//ei code e new balance update hye show korbe
function setBalace(value){
    const balanceElement = document.getElementById("balance");
    balanceElement.innerText = value;
}

//machine id > hide all > show id
function showOnly(id){
  
    const addmoney = document.getElementById("add-money");
    const cashout = document.getElementById("cashout");
    const history = document.getElementById("history");
    const transfer = document.getElementById("transfer");
    const getbonous = document.getElementById("getbonous");
    const Paybill = document.getElementById("Paybill");

//   console.log("show only clicked");
addmoney.classList.add("hidden");
cashout.classList.add("hidden");
history.classList.add("hidden");
transfer.classList.add("hidden");
getbonous.classList.add("hidden")
Paybill.classList.add("hidden")

//id wala element take tmi show koro
const selected = document.getElementById(id);
selected.classList.remove("hidden")
}
