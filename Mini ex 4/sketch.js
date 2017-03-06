var img1, img2, sound1, sound2, rewinding;
    
    function preload() {
    img1 = loadImage("Images/1 Rewind.png");    //Loads the "Rewind" image
    img2 = loadImage("Images/2 Nodes.png");     //Loads the notes
    sound1 = loadSound("Assets/Off Pepper Steak.mp3");
    sound2 = loadSound("Assets/Rewind.mp3");
    }
    
function setup() {
    createCanvas(600, 400); //Draws the background
sound1.setVolume(1);
sound1.play();
rewinding = false;
}
    
function draw() {   
    background(0); //background color
    
    image(img2, 350, 160); //The note images
    
    stroke(255); //Color of the circle border
    strokeWeight(4); //Thickness of the circle border
    noFill(); //Leaves the circle empty
    if (mouseX > 100 && mouseX < 300 && mouseY > 100 && mouseY < 300) {
        fill (75, 165, 108); //Fills the circle with green color when the mouse is within its boarders
        if (mouseIsPressed && !rewinding) {    
        fill (45, 145, 88);
        sound1.stop();
        sound2.setVolume(1);
        sound2.play();
        rewinding = true;
        }
    }
    
    if (rewinding && !sound2.isPlaying()) {
      sound2.stop();
      sound1.play();
      rewinding = false;
        
    }
   
   ellipse(200, 200, 200, 200); //Draws the circle
    image(img1, 115, 180); //The "Rewind" text in front of the circle
}