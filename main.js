function setup() {
  canvas = createCanvas(300, 300);
  canvas.center();
  video = createCapture(VIDEO);
  video.hide();
  classifier= ml5.imageClassifier('MobileNet',modelloaded)
}
function modelloaded(){
  console.log("model is loaded");
}
function draw(){
  image(video,0,0,300,300);
  classifier.classify(video,gotResults);
}

function gotResults(error,results){
  if(error){
    console.error(error);
  }else{
    console.log(results);
    document.getElementById("Object").innerHTML=results[0].label;
    document.getElementById("Accuracy").innerHTML=results[0].confidence.toFixed(3);
  }
}


 

