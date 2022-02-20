leftWristX = 0;
rightWristX = 0;

difference = 0;

function setup(){
    video = createCapture(VIDEO);
    video.size(500, 500);
    canvas = createCanvas(550, 550);
    canvas.position(550, 150);
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function gotPoses(results){
    if (results.length > 0) {
        console.log(results);
        leftWristX = results[0].pose.leftWrist.x;
        rightWristX = results[0].pose.rightWrist.x;
        difference = floor(leftWristX - rightWristX);
    }
}

function draw(){
    background('#32cc7c');
    textSize(difference);
    fill('#00FF00');
    text('Hello', 50, 30);
    document.getElementById("font_size").innerHTML = "Width and Height of the Square will be" + difference + "px";
}