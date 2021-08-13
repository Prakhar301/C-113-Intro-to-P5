function preload(){
    var img=loadImage("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwinVHmJM47c5RE5Rpv6BMAEanol7jRGtQ9A&usqp=CAU")
}
function setup(){
    var canvas=createCanvas(400,400);
    canvas.position(600,350);
    var video=createCapture(VIDEO);
    video.hide();
    var tint_color="";
}
function draw(){
    image(video,0,0,480,640);
    tint(tint_color);
}
function take_snapshot(){
    save('snapshot.png')
}
function filter_tint(){
    tint_color=document.getElementById("color").value;
}