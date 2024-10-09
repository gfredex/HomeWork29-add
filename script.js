const btnSend = document.querySelector('#btnSend');
const input1 = document.querySelector('#input1');
btnSend.addEventListener('click', () => {
    if (input1.value !== '') {
        alert(`Вы отправили ${input1.value.trim()}`);
        input1.value = '';
    }
});