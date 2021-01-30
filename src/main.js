
playAudio = document.querySelector('.skin')
function playSound() {
    let audio1 = new Audio('./mp3/Pika1.mp3');
    audio1.play()
}



playAudio.addEventListener('click', playSound, false);
playAudio.addEventListener('touch', playSound, false);