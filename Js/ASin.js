var Angle;
var Click = 0;


function setup() {
	var cnv = createCanvas(600, 500);
	cnv.parent('graph');
	if(Click == 0){
	Angle = createSlider(-90, 90, -90, 0.01);
		}else {
			Angle = createSlider(0, 360, 0);
		}
	Angle.parent('graph');
	Angle.class('Bar');
	background(51);


}

var Mare = function(){
	strokeWeight(1);
	translate(300, 250);
	background(51);
	stroke(255)
	text(0,1,0)
	line(0,0,0,200);
	line(0,0,0,-200);
	line(0,0,200,0);
	line(0,0,-200,0);
	noFill();
	ellipse(0,0,400);
	var Alfa = radians(Angle.value());
	//Inbetween space is 50 px;
	for(var x = -90; x < Alfa; x = x + 0.01){
		strokeWeight(1);
		strokeWeight(2);
		y = asin(x) * 100;
		point(x * 90, -y);
		// point(0  +(x * x *x) , 50);
		// point(0  +(x * x *x) , -50);
		}}

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

		Mare();
		if(Paral == 1){
			line(-300, 35, 300, 35);
			line(-300, -35, 300, -35);
		}
	}
