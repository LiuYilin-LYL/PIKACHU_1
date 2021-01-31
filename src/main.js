
playAudio = document.querySelector('.head')
function playSound() {
    let audio1 = new Audio('./mp3/Pika1.mp3');
    audio1.play()
}



playAudio.addEventListener('click', playSound, true);
playAudio.addEventListener('touch', playSound, false);