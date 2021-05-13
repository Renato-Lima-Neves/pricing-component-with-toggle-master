const switchBtn = document.querySelector('.switch');
const cardPriceAnually = document.querySelectorAll('.anually');
const cardPriceMonthly = document.querySelectorAll('.monthly')
const checkBox = document.querySelector('.checkbox');

const togglePrices = () => {
    if(checkBox.checked == true) {
       cardPriceMonthly.forEach(e => e.style.display = 'block');
       cardPriceAnually.forEach(e => e.style.display = 'none');
    } else {
        cardPriceMonthly.forEach(e => e.style.display = 'none');
        cardPriceAnually.forEach(e => e.style.display = 'block');
    }
}

switchBtn.addEventListener('click', togglePrices);