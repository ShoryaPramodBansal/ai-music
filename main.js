peter_pan_song = "";
Harry_Potter_Theme_song = "";

leftWrist_x = 0;
leftWrist_y = 0;

rightWrist_x = 0;
rightWrist_y = 0;

scoreleftWrist = 0;
song_Peter_pan = "";

scorerightWrist = 0;
song_Harry_Potter_Theme = "";

function setup(){
    canvas = createCanas(600,530);
    canvas.center();

    video - createCapture(VIDEO);
    video.hide();
}

function draw(){
    image(video, 0, 0, 600, 530);
}

function preload(){
    peter_pan_song = loadSound("music2.mp3");
    Harry_Potter_Theme_song = loadSound("music.mp3");
}

function draw(){
    image(video,0,0,600,530);

    fill("#37ff00");
    stroke("#ff0000");

    song_Peter_pan = Peter_pan_song.isPlaying();
    console.log("Peter Pan Song = "+song_Peter_pan);

    song_Harry_Potter_Theme = song_Harry_Potter_Theme.isPlaying();
    console.log("Harry Potter Theme Song = "+song_Harry_Potter_Theme);

    if(scoreleftWrist > 0.2){
        circle(leftWrist_x,leftWrist_y,20);
        Harry_Potter_Theme_song.stop();
        if(song_Peter_pan == false){
            peter_pan_song.play();
        }
        else{
            document.getElementById("song_id").innerHTML = "Song Name: Peter Pan Song";
        }
    }

    if(scorerightWrist > 0.2){
        circle(rightWrist_x,rightWrist_y,20);
        Peter_pan_song.stop();
        if(song_Peter_pan == false){
            peter_pan_song.play();
        }
        else{
            document.getElementById("song_id").innerHTML = "Song Name: Harry Potter Theme Song";
        }
    }
}

function modelLoaded(){
    console.log("PoseNet Is intialized");
}

function gotPoses(results){
    if(results.length > 0) {
        console.log(results);
        
        scoreleftWrist = results[0].pose.keypoints[9].score;
        console.log("leftWrist_Score = "+scoreleftWrist);
       
        scorerightWrist = results[0].pose.keypoints[10].score;
        console.log("rightWrist_Score = "+scorerightWrist);

        leftWrist_x = results[0].pose.leftWrist.x;
        leftWrist_y = results[0].pose.leftWrist.y;
        console.log("leftWrist_x = " +leftWrist_x+" leftWrist_y = "+leftWrist_y);

        rightWrist_x = results[0].pose.rightWrist.x;
        rightWrist_y = results[0].pose.rightWrist.y;
        console.log("rightWrist_x = " +rightWrist_x+" rightWrist_y = "+rightWrist_y);
    }
}

