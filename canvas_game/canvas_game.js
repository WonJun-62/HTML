//전역변수
var context;
var velocity;
var angle;
var ballV;
var ballVx;
var ballVy;
var ballX = 10;
var ballY = 250;
var ballRadius = 10;
var score = 0;
var image = new Image();
image.src = "lawn.png";
var backimage = new Image();
backimage.src = "net.png";
var timer

//초기화 함수
function init(){
    ballX = 10;     //ball 시작위치
    ballY = 250;
    ballRadius = 10;
    context = document.getElementById('canvas').getContext('2d');
    draw();
}

//발사 버튼을 누르면 호출
function start(){
    init();
    velocity = Number(document.getElementById("velocity").value);
    angle = Number(document.getElementById("angle").value);
    var angleR = angle * Math.PI / 180;

    ballVx = velocity * Math.cos(angleR);
    ballVy = -velocity * Math.sin(angleR);

    draw();
    timer = setInterval(calculate, 100);
    return false;
}

//전체 화면 그리기
function draw(){
    context.clearRect(0, 0, 500, 300); //화면 지우기
    drawBall();
    drawBackground();
}

//공 그리기
function drawBall(){
    context.beginPath();
    context.arc(ballX, ballY, ballRadius, 0, 2.0 * Math.PI, true);
    context.fillStyle = "red";
    context.fill();
}

//배경 그리기
function drawBackground(){
    context.drawImage(image, 0, 270);
    context.drawImage(backimage, 450, 60);
}

//공의 현재 속도와 위치 업데이트
function calculate(){
    ballVy = ballVy + 1.98; //중력
    
    ballX = ballX + ballVx;
    ballY = ballY + ballVy;

    //공이 목표물에 맞았으면
    if((ballX >= 450) && (ballX <= 480) && (ballY >= 60) && (ballY <= 210)){
        score++;
        document.getElementById("score").innerHTML = "점수=" + score;
        clearInterval(timer);
    }

    //공이 경계를 벗어남
    if(ballY >= 300 || ballY < 0){
        clearInterval(timer);
    }
    draw();
}