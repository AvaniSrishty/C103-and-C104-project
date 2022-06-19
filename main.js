Webcam.set({
    width:500,
    height:350,
    image_format:'png',
    png_quality:100
});

document.getElementById("camera");

Webcam.attach("#camera")
function takesnapshot(){

Webcam.snap(function(data_uri){
console.log(data_uri);
document.getElementById("result").innerHTML = "<img id='capture_image' src='"+data_uri+"'>"
});


}
console.log(ml5.version)

classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/lne5wrMr8/',modelLoaded);