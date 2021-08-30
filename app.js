// pin generate function
function getPin() {
    const pin = Math.round(Math.random() * 10000);
    const pinString = pin + "";
    if (pinString.length == 4) {
        return pin;
    } else {
        console.log('the number is 3 digit', pin);
        return getPin();
    }
}

function generatePin() {
    const pin = getPin();
    document.getElementById('display-pin').value = pin;
}

// calculation function

document.getElementById('key-pad').addEventListener('click',function(event){
    const number = event.target.innerText;
    const typedNumber = document.getElementById('typed-number');
    if(isNaN(number)){
        if(number == 'C'){
            typedNumber.value = "";
        }
    }
    else{
        const previousTypedNumber = typedNumber.value;
        const newTypedNumber = previousTypedNumber + number;
        typedNumber.value = newTypedNumber;
    }
    
})
function verifyPin(){
    const pin = document.getElementById('display-pin').value; 
    const typedNumber = document.getElementById('typed-number').value; 
    const pinNotMatched = document.getElementById('pin-not-matched');
    const pinMatched = document.getElementById('pin-matched');
    if(pin == typedNumber){
        pinMatched.style.display = 'block';
        pinNotMatched.style.display = 'none';
    }
    else{
        pinNotMatched.style.display = 'block';
        pinMatched.style.display = 'none';
    }

}