const display = document.querySelector(".display");
const buttons = document.querySelectorAll(".buttons button");

let justCalculated = false; 

buttons.forEach(button => {
    button.addEventListener("click", () => {
        const value = button.textContent;

        // زرار C
        if (button.classList.contains("btn-clear")) {
            display.value = "";
            justCalculated = false;
            return;
        }

        // زرار =
        if (button.classList.contains("btn-eq")) {
            try {
                display.value = eval(display.value);
                justCalculated = true; 
            } catch {
                display.value = "Error";
            }
            return;
        }

      
        
        if (justCalculated && !isNaN(value)) {
            display.value = value; 
            justCalculated = false;
            return;
        }

        
        display.value += value;
        justCalculated = false;
    });
});
