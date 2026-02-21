// console.log('Login script loaded successfully.');


  document.getElementById('login-btn').addEventListener('click', function() {


      //Get the mobile number input
  const numberInput = document.getElementById('input-number');
  const contactNumber = numberInput.value;
  console.log('Mobile Number Entered:', contactNumber);
  
  //Get the pin input
    const pinInput = document.getElementById('input-pin');
    const pin = pinInput.value;
    console.log('PIN Entered:', pin);
  //Match pin and mobile number
  if (contactNumber === '12345678901' && pin === '1234') {
     //3-1 true:::> alert> homepage
    alert('Login successful!');
    // window.location.replace(".home.html");
    window.location.assign("/home.html"); //assign use korle page ta history te add hye jabe
  }else {
    //3-1 false:::> alert> return
    alert('Login Failed');
    return;
  }
  

  });

  

