const sparkBox = document.querySelector('.sparks_box');
const sparkSpawner = document.querySelector('.sparks_spawn');
const focusBox = document.querySelector('.focus');
const circle = document.querySelector('.touch_circle');

const rect = sparkBox.getBoundingClientRect();


let timerId = setInterval(createSpark, 700 + Math.floor(Math.random() * 700));
setTimeout(() => { clearInterval(timerId) }, Math.floor(rect.width/25) * 1000);


function createSpark() {
    console.log('spark');
    let sparkRotate = document.createElement("div");
    let spark = document.createElement("div");

    sparkRotate.classList.add('spark_up');
    sparkRotate.classList.add('spark_up_anim');
    spark.classList.add('spark');

    let rndLeft = Math.floor(Math.random() * rect.width) - 40;
    sparkRotate.style.left = rndLeft + "px";

    let sparkSize = 4 + Math.floor(Math.random() * 16);
    spark.style.width = sparkSize + "px";
    spark.style.height = sparkSize + "px";


    sparkRotate.append(spark);
    sparkSpawner.append(sparkRotate);
}

const width = focusBox.offsetWidth;
const height = focusBox.offsetHeight;

const circleWidth = circle.offsetWidth;
const circleHeight = circle.offsetHeight;

sparkBox.addEventListener('mousemove', (event) => {
    setTimeout(() => {
        focusBox.style.left = (event.pageX - rect.left) - (width / 2) + "px";
        focusBox.style.top = (event.pageY - rect.top) - (height / 2) + "px";
    }, 50)
});

sparkBox.addEventListener('click', (event) => {
    circle.style.left = "-100px";
    circle.style.top = "-100px";
});

/* touch events*/
sparkBox.addEventListener('touchmove', (event) => {
    let xUp = event.touches[0].clientX;                                    
    let yUp = event.touches[0].clientY;

    setTimeout(() => {
        focusBox.style.left = (xUp - rect.left) - (width / 2) + "px";
        focusBox.style.top = (yUp - rect.top) - (height / 2) + "px";

        circle.style.left = (xUp - rect.left) - (circleWidth / 2) + "px";
        circle.style.top = (yUp - rect.top) - (circleHeight / 2) + "px";
    }, 50)
});

sparkBox.addEventListener('touchend', () => {
    circle.style.left = "-100px";
    circle.style.top = "-100px";
});
