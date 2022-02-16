leftWristX = 0;
rightWristX = 0;

difference = 0;

function setup(){
    video = createCapture(VIDEO);
    video.size(500, 500);
    canvas = createCanvas(600, 600);
    canvas.position(560, 160);
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function gotPoses(results){
    if (results.length > 0) {
        console.log(results);
        leftWristX = results[0].pose.leftWristX.x;
        rightWristX = results[0].pose.rightWristX.x;
        difference = floor(leftWristX - rightWristX);
    }
}