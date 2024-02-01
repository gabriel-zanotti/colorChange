const bgPage = document.querySelector('.container');
const colorSelect = document.querySelector('input');
const defaultColor = '#c2c2c2';

bgPage.style.backgroundColor = `${defaultColor}`;

function onChangeBg() {
    bgPage.style.backgroundColor = `${colorSelect.value}`;
}