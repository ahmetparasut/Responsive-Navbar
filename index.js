const toggleBtn = document.querySelector('.nav-toggle');
const navCenter = document.querySelector('.nav-center');


toggleBtn.addEventListener('click', () => {
    navCenter.classList.toggle('open')
    toggleBtn.classList.toggle('toggle')
})

