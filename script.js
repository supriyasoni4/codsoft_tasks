const input = document.getElementById('input');
const btns = document.querySelectorAll('.buttons button');

btns.forEach(button => {
    button.addEventListener('click', () => {
        const value = button.getAttribute('data-value');

        if (value == 'AC') {
            input.value = '';
        }
        else if (value == '=') {
            try {
                input.value = eval(input.value) || '0';
            }
            catch {
                input.value = 'error';
            }
        }
        else {
            input.value = input.value + value;
        }
    });
});