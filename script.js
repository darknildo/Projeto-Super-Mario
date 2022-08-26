const mario = document.querySelector('.mario');
const pipe = document.querySelector('.pipe');
const audioStart = new Audio('./audio/theme.mp3')
const audioGameOver = new Audio('./audio/gameover.mp3')
const grass = document.querySelector('.grass');
const textStart = document.querySelector('text-start')
const floor1 = document.querySelector('.floor-1')
const floor2 = document.querySelector('.floor-2')
const floor3 = document.querySelector('.floor-3')



const jump = () => {
    mario.classList.add('jump');
    setTimeout(() => {

        mario.classList.remove('jump');
    }, 1000);
}

/* Inicia o Game */

const start = () => {


    pipe.classList.add('pipe-animation');
    document.getElementById("text-start").style.color = "black";
    function grassAnimation() {
        grass.classList.add('grass-animation');
    } setInterval(grassAnimation, 8000);

    function floorAnimation1() {
        floor1.classList.add('floor-animation-1');
    } setInterval(floorAnimation1, 0);

    function floorAnimation2() {
        floor2.classList.add('floor-animation-2');
    } setInterval(floorAnimation2, 0);

    function floorAnimation3() {
        floor3.classList.add('floor-animation-3');
    } setInterval(floorAnimation3, 3100);


    audioStart.play();
}


document.addEventListener('keydown', start);



/* Parar o Game */



const loop = setInterval(() => {
    const pipePosition = pipe.offsetLeft;
    const marioPosition = +window.getComputedStyle(mario).bottom.replace('px', '');
    const grassPosition = grass.offsetLeft;
    const floorPosition1 = floor1.offsetLeft;
    const floorPosition2 = floor2.offsetLeft;
    const floorPosition3 = floor3.offsetLeft;

    if (pipePosition <= 120 && pipePosition > 0 && marioPosition < 80) {

        pipe.style.animation = 'none';
        pipe.style.left = `${pipePosition}px`;

        pipe.style.animation = 'none';
        pipe.style.bottom = `${marioPosition}px`;

        mario.src = './assets/game-over.png';
        mario.style.width = '75px'
        mario.style.marginleft = '50px'

        grass.style.animation = 'none';
        grass.style.left = `${grassPosition}px`;

        floor1.style.animation = 'none';
        floor1.style.left = `${floorPosition1}px`;

        floor2.style.animation = 'none';
        floor2.style.left = `${floorPosition2}px`;

        floor3.style.animation = 'none';
        floor3.style.left = `${floorPosition3}px`;






        function stopAudioStart() {
            audioStart.pause();
        } stopAudioStart();

        audioGameOver.play();

        function stopAudio() {
            audioGameOver.pause();
        } setTimeout(stopAudio, 8000)




        document.getElementById("text-start").style.color = "yellow";
        document.getElementById("text-start").innerHTML = "<strong>GAME OVER</strong class>";
        document.getElementById("text-start").innerHTML = "<strong> - GAME OVER -</strong class>";
       
        clearInterval(loop);

    }




}, 10)

document.addEventListener('keydown', jump);
