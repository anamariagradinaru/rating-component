const form = document.querySelector('form');
const submitButton = document.querySelector('#submitButton');
const card2 = document.querySelector('.card2');
const card1 = document.querySelector('.card1');
const rating = document.querySelector('.card2-rating');

form.addEventListener('submit', (event) => {
    event.preventDefault();
    card1.style.display = 'none';
    card2.style.display = 'flex';
    const value = document.querySelector('input[name="button"]:checked').value;
    rating.textContent = `You selected ${value} out of 5`;
});
