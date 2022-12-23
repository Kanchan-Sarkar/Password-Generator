function generatePassword(lower,upper,number,symbol,length){
    let generatedPassword ="";
    const typesCount = lower + upper + number + symbol;
    const typesArr = [{ lower}, { upper}, { number }, { symbol }].filter((item)=> Object.values(item)[0]);

    for(let i=0;i<length;i+=typesCount){
        typesArr.forEach((type) =>{
            const funcName = Object.keys(type)[0];
            generatedPassword += randomFunc[funcName]();
        });
    }
    const finalPassword = generatedPassword.slice(0,length);
    return finalPassword;
}

let button = document.getElementById("clipboardBtn");
button.addEventListener("click", (e) => {
    e.preventDefault();
    var copyText = document.getElementById("PasswordResult");
    {
    if (copyText.value.length<1){
        popupgenerate();
    }
}

  /* Select the text field */
  copyText.select();
  copyText.setSelectionRange(0, 99999); /* For mobile devices */

   /* Copy the text inside the text field */
  navigator.clipboard.writeText(copyText.value);

  /* Alert the copied text */
   popup();
});

const generate = document.getElementById("generateBtn");
generate.addEventListener("click", () => {
    const length = document.getElementById("Passwordlength").value;
    const hasUpper = document.getElementById("uppercase").checked;
    const hasLower = document.getElementById("lowercase").checked;
    const hasNumber= document.getElementById("numbers").checked;
    const hasSymbol = document.getElementById("symbols").checked;
    const result = document.getElementById("PasswordResult");
    result.innerText = generatePassword(
        hasLower,
        hasUpper,
        hasNumber,
        hasSymbol,
        length
    );
});


function getRandomLower(){
    return String.fromCharCode(Math.floor(Math.random() *26) + 97);
}

function getRandomUpper(){
    return String.fromCharCode(Math.floor(Math.random() *26) + 65);
}

function getRandomNumber(){
    return +String.fromCharCode(Math.floor(Math.random() *10) + 48);
}

function getRandomSymbol(){
    const symbols = "!@#$%^&*(){}[]=<>/,.";
    return symbols[Math.floor(Math.random() * symbols.length)];
}

const randomFunc = {
    lower: getRandomLower,
    upper: getRandomUpper,
    number: getRandomNumber,
    symbol: getRandomSymbol,
};

function popup(){
const popupScreen = document.querySelector(".popup-screen");
    popupScreen.classList.add("active");
    setTimeout(() => {
        popupScreen.classList.remove("active");
    },3000);

const closeBtn = document.querySelector("#closebtn");
closeBtn.addEventListener("click", (f) => {
    f.preventDefault();
    popupScreen.classList.remove("active");
});
}

function popupgenerate(){
const popupScreen1 = document.querySelector(".popup-screen1");
    popupScreen1.classList.add("active");
    setTimeout(() => {
        popupScreen1.classList.remove("active");
    },2000);

const closeBtn1 = document.querySelector("#closebtn2");
closeBtn1.addEventListener("click", (f) => {
    f.preventDefault();
    popupScreen1.classList.remove("active");
});
}