var song=""

function preload(){
    song= loadSound('music.mp3');
}
var scoreRigthwrist=0
var scoreLeftwrist=0
var rigthWristX=0
var rigthWristY=0
var leftWristX=0
var leftWristY=0

function setup(){
    canvas = createCanvas(600, 500);
    canvas.center();
    video = createCapture(VIDEO);
    //video.hide();
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}
function modelLoaded(){
    console.log("posenet is initialized")
}
function gotPoses(results)
  {
    if(results.length > 0)
    {
      console.log(results);
     scoreRigthwrist = results[0].pose.keYpoints[10].score
     scoreLefthwrist = results[0].pose.keYpoints[9].score
     console.log("scoreRightWrist = " + scoreRightWrist + " scoreLeftWrist = " + scoreLeftWrist);

      rigthWristX= results[0].pose.rigthWrist.x
      rigthWristY= results[0].pose.rigthWrist.y
      console.log("rightWristx = " + rigthWristX + " rigthWristy = " + rigthWristY);
    }
     leftWristX= results[0].pose.leftWrist.x
     lefthWristY= results[0].pose.leftWrist.y
      console.log("leftWristx = " + leftWristX + " leftWristy = " + leftWristY);
  }
  function drawn(){
    image(video, 0, 0, 600, 500);
    fill("#FF0000")
    stroke("#FF0000")
    if(){
      if(){

      }else if(){
        
      }else if(){
  
      }else if(){
  
      }else if(){} 
     }
    
    
  }
  function play(){
    song.play()
    song.setVolume(0.5)
    song.rate(2.5)
  }