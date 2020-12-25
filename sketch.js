let classifier;
// Model URL
let imageModelURL = 'https://teachablemachine.withgoogle.com/models/hCxj4SjNs/';
// label to classify images
let label = "";
let img;
var div,div1;
// Load the model first
function preload() {
  classifier = ml5.imageClassifier(imageModelURL + 'model.json');
  
}

function setup() {
  createCanvas(400, 400);
  input = createFileInput(handleFile);
  input.position(800,650); 
}


function draw(){
  if (img) {
    image(img, 0, 0, width, height);
  }
}
// A function to run when we get any errors and the results
function gotResult(error, results) {
  // Display error in the console
  if (error) {
    console.error(error);
  }
  // The results are in an array ordered by confidence.
  console.log(results);
 div1 = createDiv('Label: ' + results[0].label);
  div1.style('font-size','20px')
  div1.style('font-style','italics','color', 'spaceblack')
 div = createDiv('Confidence: ' + nf(results[0].confidence, 0, 2));
   clr =  createDiv('Press -Any Key- to clear the output')
 div.style('font-size','20px')
 div.style('font-style','italics')
clr.style('background','lightpink')
}

function handleFile(file) {
  if (file.type === 'image') {
    img = createImg(file.data, '');
    img.hide();
  } else {
    img = null;
  }
  classifier.classify(img, gotResult);
}

function keyPressed(){
  div1.hide()
  div.hide()
   clr.hide()
}