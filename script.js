
const inputField = document.getElementById('input')
const outputField = document.getElementById('output')


function clearFields() {
    inputField.value = '';
    outputField.value = '';
}

function del(){

    inputField.value = inputField.value.slice(0, -1);
}