var Angle;

function setup(){
	var cnv = createCanvas(600, 500);
	cnv.parent('graph');
	Angle = createSlider(-15, 15, -15, 0.1);
	Angle.parent('graph');
	Angle.class('Bar');
	background(51);


}

var Tang = function(){
	background(51);
	stroke(255);
	strokeWeight(1);
	translate(300, 250);
	stroke(255);
	text(0,1,0);
	line(0,0,0,200);
	line(0,0,0,-200);
	line(0,0,200,0);
	line(0,0,-200,0);
	noFill();

	var Angl = Angle.value();
	Angl1 = map(Angl, -52, 52, -100, 100);
	var Alfa = Angl1;

	for(var x = -100; x < Alfa; x = x + 0.01){
		var y = tan(x) * 20;
		point(x * 15, -y);
	}
}

var Paral = 0;
var Para = function(){
	if(Paral == 1){
		Paral = 0
	}
	else{
		Paral = 1
	}
}
function draw(){
	background(51);
	Tang();
	if(Paral == 1){
			line(-300, 35, 300, 35);
			line(-300, -35, 300, -35);
		}
}
