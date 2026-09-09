const display = document.querySelector(".display");
const buttons = document.querySelectorAll(".buttons button");

let justCalculated = false; // حالة بعد الضغط على =

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
                justCalculated = true; // تم الحساب
            } catch {
                display.value = "Error";
            }
            return;
        }

      
        // لو المستخدم ضغط رقم بعد =
        if (justCalculated && !isNaN(value)) {
            display.value = value; // ابدأ من جديد
            justCalculated = false;
            return;
        }

        // باقي الأزرار
        display.value += value;
        justCalculated = false;
    });
});
