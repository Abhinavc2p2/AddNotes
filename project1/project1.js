const closedbook = document.querySelector('.closed');
const openbook = document.querySelector('.open');

closedbook.addEventListener('click', () => {
    if (openbook.classList.contains('open')) {
        openbook.classList.add('active');
        closedbook.classList.remove('active');
    }
});
openbook.addEventListener('click', () => {
    if (closedbook.classList.contains('closed')) {
        closedbook.classList.add('active');
        openbook.classList.remove('active');
    }
});