let burger = document.getElementById('burger');
let content = document.getElementById('content');

burger.addEventListener('click', () => {
    burger.classList.toggle('open');
    content.classList.toggle('hide');
});