const btnSend = document.querySelector('#btnSend');
const input1 = document.querySelector('#input1');
btnSend.addEventListener('click', () => {
    if (input1.value !== '') {
        alert(`Вы отправили ${input1.value.trim()}`);
        input1.value = '';
    }
});

const btn2 = document.querySelector('#btn2');
const selectItem = document.querySelector('#task-select');
btn2.addEventListener('click', () => {
    alert(`Выбран: ${selectItem[selectItem.options.selectedIndex].textContent}`);
    selectItem.value = selectItem[0].value;
});