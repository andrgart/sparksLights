const sparkBox = document.querySelector('.sparks_box');
const focusBox = document.querySelector('.focus');

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

    let rndLeft = Math.floor(Math.random() * rect.width);
    sparkRotate.style.left = rndLeft + "px";

    let sparkSize = 4 + Math.floor(Math.random() * 16);
    spark.style.width = sparkSize + "px";
    spark.style.height = sparkSize + "px";


    sparkRotate.append(spark);
    sparkBox.append(sparkRotate);
}

sparkBox.addEventListener('mousemove', (event) => {
    const width = focusBox.offsetWidth;
    const height = focusBox.offsetHeight;

    setTimeout(() => {
        focusBox.style.left = (event.pageX - rect.left) - (width / 2) + "px";
        focusBox.style.top = (event.pageY - rect.top) - (height / 2) + "px";
    }, 50)
});