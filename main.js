
rightwristX = 0;
rightwristY = 0;
leftwristX = 0;
leftwristY = 0;
distance = 30;


function setup(){
    canvas = createCanvas(400,400);
    canvas.position(200,200);

    video = createCapture(VIDEO);
    video.size(400,400);
    video.position(400,400);

    posenet = ml5.poseNet(video,modelLoaded);
    posenet.on('pose',gotposes);
}

function modelLoaded(){
    console.log("model loaded");

}

function gotposes(results){

    if(results.length > 0){
        console.log(results);

        rightwristX = results[0].pose.rightWrist.x;
        leftwristX = results[0].pose.leftWrist.x;

        rightwristY = results[0].pose.rightWrist.y;
        leftwristY = results[0].pose.leftWrist.y;

        distance = floor(leftwristX - rightwristX);
        console.log(distance);

        fill("red");
        circle(rightwristX,rightwristY,10);
    }
    
}

function draw(){
    background("#03fcd7");
    textSize(distance);//for setting the text size
    //stroke("#7703fc");
    text("Aayush Roy",100,100);//for displaying text on the canvas
}
