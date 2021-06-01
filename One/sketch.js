let foo = new p5.Speech(); // speech synthesis object

function setup() {
    noCanvas();
     // say something 
}

function mousePressed(){
    foo.speak('Sex Dungeon');
}
