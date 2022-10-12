const calcInput = document.querySelector('.calc-input');
const allButtons = document.querySelectorAll('.button');
const operators = ['+', '/', '-', '*'];

allButtons.forEach(button => {
    button.addEventListener('click', (e) => {
        const value = e.target.dataset.value

        if (value === '=') {
            if (calcInput.innerText.includes('/')) {
                const splitInput = calcInput.innerText.split('/')
                operate('/', splitInput[0], splitInput[1]) // passing the values we want
            }

            if (calcInput.innerText.includes('*')) {
                const splitInput = calcInput.innerText.split('*')
                operate('*', splitInput[0], splitInput[1]) 
            }
            if (calcInput.innerText.includes('+')) {
                const splitInput = calcInput.innerText.split('+')
                operate('+', splitInput[0], splitInput[1]) 

            }
            if (calcInput.innerText.includes('-')) {
                const splitInput = calcInput.innerText.split('-')
                operate('-', splitInput[0], splitInput[1]) 
            }
        }
        calcInput.innerText += value // concatenate user input if numbers
        if (value === 'clear') {
            calcInput.innerText = '';
        }
    })
});

const operate = (operator, value1, value2) => {

}