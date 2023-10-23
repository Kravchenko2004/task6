// Задание 5
function buttonClicked() {
    let product = document.getElementById('selectProducts');
    let count = document.getElementById('inputCounts');
    let display = document.getElementById('calculator-display');

    if (/^\d+$/.test(count.value)) {
        display.value = parseInt(product.value) * parseInt(count.value);
    } else {
        alert("Для ввода нужно указывать числа!")
    }
};

// Задание 6
const prices = {
    "eye_extensions": 500,
    "eye_lamination": {
        1: 600,
        2: 800,
        3: 1000
    },
    "lash_laminating": {
        "not-natural": 1200,
        "natural": 1600
    }
};

function update() {
    let radio = document.querySelector('input[name = radioList]:checked');
    let select = document.getElementById('selectItem');
    let checkbox_div = document.getElementById('checkbox-div');
    let checkbox_input = document.getElementById('checkbox-input');
    let countService = document.getElementById('countService');
    let calculator_screen = document.getElementById('calc-screen');

    if (!(/^\d+$/.test(countService.value))) {
        alert("Укажите число!");

        return; 
    }

    switch (radio.value) {
        case "1":
            select.style.display = "none";
            checkbox_div.style.display = "none";
            calculator_screen.value = prices['eye_extensions'] * parseInt(countService.value);
            break;
        case "2":
            select.style.display = "block";
            checkbox_div.style.display = "none";
            calculator_screen.value = prices['eye_lamination'][parseInt(select.value)] * parseInt(countService.value);
            break;
        case "3":
            select.style.display = "none";
            checkbox_div.style.display = "block";
            
            if (checkbox_input.checked) {
                calculator_screen.value = prices['lash_laminating']['not-natural'] * parseInt(countService.value);
            } else {
                calculator_screen.value = prices['lash_laminating']['natural'] * parseInt(countService.value);
            }
            break
        default:
            console.log("Ошибка. Нет такого числа!");
    }
};

document.addEventListener("DOMContentLoaded", (event) => {
    console.log("DOM loaded and parsed");

    let radios = document.getElementsByName('radioList');
    radios.forEach((e) => {
        e.addEventListener("change", update);
    });

    let checkbox = document.getElementById('checkbox-input');
    checkbox.addEventListener("change", update);

    let select = document.getElementById('selectItem');
    select.addEventListener("change", update);

    let countService = document.getElementById('countService');
    countService.addEventListener("change", update);
});

update();