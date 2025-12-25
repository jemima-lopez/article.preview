
const shareBtn = document.getElementById('shareBtn');
const shareBox = document.getElementById('shareBox');

shareBtn.addEventListener('click', () => {
    shareBtn.classList.toggle('active');
    shareBox.classList.toggle('show');
});
