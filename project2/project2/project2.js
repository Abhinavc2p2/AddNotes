const monkeyface = document.querySelector('.monkeyface');
const eyeclose = document.querySelector('.eyeclose');
const mouthclose = document.querySelector('.mouthclose');
const earclose = document.querySelector('.earclose');
const areja = document.querySelector('.areja');

monkeyface.addEventListener('click', () => {
    if (eyeclose.classList.contains('eyeclose')) {
        eyeclose.classList.add('active');
        monkeyface.classList.remove('active');
    }
});
eyeclose.addEventListener('click', () => {
    if (mouthclose.classList.contains('mouthclose')) {
        mouthclose.classList.add('active');
        eyeclose.classList.remove('active');
    }
});
mouthclose.addEventListener('click', () => {
    if (earclose.classList.contains('earclose')) {
        earclose.classList.add('active');
        mouthclose.classList.remove('active');
    }
});
earclose.addEventListener('click', () => {
    if (monkeyface.classList.contains('monkeyface')) {
        monkeyface.classList.add('active');
        earclose.classList.remove('active');
    }
});