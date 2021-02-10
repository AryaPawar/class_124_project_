function setup(){
video=createCapture(VIDEO);
video.size(550, 500);

canvas = createCanvas(550, 500);
canvas.position(550, 100);
posenet= ml5.poseNet(video, modelLoaded);
posenet.on('pose', gotPoses);
}
function draw(){
    background('#0000CD');
}
function modelLoaded(){
    console.log('posenet is intialized'); 
}
function gotPoses(results){
if(results.length > 0){
    console.log(results);
}
}
