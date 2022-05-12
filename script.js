const toggLe = document.querySelector('.toggle');
const toggleBtn = document.querySelector('.togglebtn')
const progressBar = document.getElementById('progressbar');


toggLe.addEventListener('click', function () {
    toggleBtn.classList.toggle('togglebtnleft')
})

progressBar.addEventListener('input', function () {
    let percentage = (progressBar.value / progressBar.max) * 100;
    progressBar.style.background = `linear-gradient(to right, #3264fe ${percentage}%, #d5d5d5 ${percentage}%)`

})