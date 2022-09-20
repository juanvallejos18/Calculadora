window.addEventListener('load', ()=> { 
    const display = document.querySelector('.calculator-display');
    const keypadButtons = document.getElementsByClassName('keypad-button');

    const keypadButtonsArray = Array.from(keypadButtons);

    keypadButtonsArray.forEach( (button) => {
    button.addEventListener('click', ()=> {

        calculadora(button, display);
    })
    
    })
});

function calculadora(button, display) {
    switch (button.innerHTML){
        case 'C':
            borrar(display);
            breack;
        case '=':
            calcular (display);
            breack;
        default:
            actualizar(display, button);
            breack;

    }
    

}

function calcular(display) {
    display.innerHTML = eval(display.innerHTML)
}

function actualizar(display, button) {
    if (display.innerHTML == 0) {
        display.innerHTML = '';
    }
    display.innerHTML += button.innerHTML;
}

function borrar(display) {
    display.innerHTML = 0; 
}