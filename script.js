let buttons = document.querySelectorAll(".btn")
let display = document.getElementById("result")
let currentInput = ''
let delet = document.getElementById("clear")
let equals = document.getElementById("equals")
display.value = currentInput

buttons.forEach(button => {
    button.addEventListener('click', () => {
        currentInput += button.textContent; 
        display.value = currentInput;
    });
});
delet.addEventListener("click" ,()=>{
    display.value = ''
    currentInput = ''
})
equals.addEventListener('click',()=>{
    if (currentInput === "") {
        return; 
    }
    let expression = currentInput.replace(/×/g, "*").replace(/÷/g, "/");
    let result = eval(expression);
    display.value = result;
    currentInput = result.toString();
})
