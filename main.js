function setup(){
    canvas = createCanvas(400,400);
    canvas.position(200,200);

    video = createCapture(VIDEO);
    video.size(400,400);
    video.position(400,400);

    posenet = ml5.poseNet(video,modelLoaded)
    posnet.on("pose",gotposes);
}

function modelLoaded(){
    console.log("model loaded");

}

function gotposes(){
    
}