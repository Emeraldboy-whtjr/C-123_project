
rightwristX = 0;
leftwristX = 0;
distance = 0;


function setup(){
    canvas = createCanvas(400,400);
    canvas.position(200,200);

    video = createCapture(VIDEO);
    video.size(400,400);
    video.position(400,400);

    posenet = ml5.poseNet(video,modelLoaded);
    posnet.on("pose",gotposes);
}

function modelLoaded(){
    console.log("model loaded");

}

function gotposes(results){

    if(results){
        console.log(results);

        rightwristX = results[0].pose.rightWrist.x;
        leftwristX = results[0].pose.leftWrist.x;

        distance = floor(rightwristX - leftwristX);
    }
    
}

function draw(){
    background("#03fcd7");
    textSize(distance);//for setting the text size
    fill("#7703fc");
    text("Aayush Roy",100,100);//for displaying text on the canvas
}
