difference=0

rightwristx=0;
leftwristx=0;

function setup()
{
    video = createCapture(VIDEO);
    video.size(550,550);
    canvas = createCanvas(550,550);
    canvas.position(560,130);
    posenet = ml5.poseNet(video,modelloaded);
    posenet.on("pose",getposes);

}


function modelloaded()
{
    console.log("posenet is initialised");
}

function getposes(results)
{
    console.log(results);
    leftwristx=results[0].pose.leftWrist.x;
    rightwristx=results[0].pose.rightWrist.x;
    difference=floor(leftwristx-rightwristx);

}

function draw()
{
    document.getElementById("font_size").innerHTML="font size= "+difference;
    textSize(difference);
    fill("#6C91C2");
    text("hello",50,400);
    
}