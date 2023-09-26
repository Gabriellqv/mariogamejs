const mario = document.querySelector('.mario');
const mario2 = document.querySelector('.mario2');
const pipe = document.querySelector('.pipe');
const jumpSound = new Audio('./sounds/mario-jump.mp3');
const deathSound = new Audio('./sounds/mario-death.mp3');
const songSound = new Audio('./sounds/mario-song.mp3');

const jump  = () => {

    mario.classList.add('jump');
    mario.src ='./images/marioJump.png';
    mario.style.width = '85px';
    mario.style.marginLeft = '50px';

    jumpSound.play();
    setTimeout(() => {
        
        mario.classList.remove('jump');
        mario.src ='./images/mario.gif';
        mario.style.width = '150px';
        mario.style.marginLeft = '5.7px';

    }, 500);

}

const loop = setInterval(() => {

    songSound.play();
    const pipePosition = pipe.offsetLeft;
    const marioPosition = +window.getComputedStyle(mario).bottom.replace('px', '');

    if (pipePosition <= 120 && pipePosition > 0 && marioPosition < 90) {
        
        pipe.style.animation = 'none';
        pipe.style.left = `${pipePosition}px`;

        mario.style.animation = 'none';
        mario.style.bottom = `${marioPosition}px`;

        songSound.pause();
        deathSound.play();
        mario.src ='./images/game-over.png';
        mario.style.width = '75px';
        mario.style.marginLeft = '50px';

        clearInterval(loop);

    }

}, 10);

document.addEventListener('keydown', jump);