float[] fishx= {50.0, 150.0, 200.0, 300.0, 400.0, 450.0, 500.0, 550.0, 700.0, 750.0};
float[] speed= {1.0, 0.8, 0.4, 1.1, 1.05, 1.3, 1.5, 1.2, 0.9, 0.6};
int[] fishy= {5, 50, 280, 100, 240, 105, 20, 220, 90, 180};
color[] fishcolor= {color( random(0,255), random(0,255), random(0,255)), color( random(0,255), random(0,255), random(0,255)), color( random(0,255), random(0,255), random(0,255)), color( random(0,255), random(0,255), random(0,255)), color( random(0,255), random(0,255), random(0,255)), color( random(0,255), random(0,255), random(0,255)), color( random(0,255), random(0,255), random(0,255)), color( random(0,255), random(0,255), random(0,255)), color( random(0,255), random(0,255), random(0,255)), color( random(0,255), random(0,255), random(0,255)), color( random(0,255), random(0,255), random(0,255))};



void setup(){
size(750,300);
frameRate(30);
background(30,60,150);
noStroke();
fill(200,10,0);
}


void draw(){

  background(160,170,255);
  
for(int i=0; i<10; i=i+1){
  fill(fishcolor[i]);
  ellipse(fishx[i], fishy[i], 50,20);
  triangle(fishx[i]-40, fishy[i]+15, fishx[i]-40, fishy[i]-15, fishx[i]-20, fishy[i]);
  fill(0,0,0);
  ellipse(fishx[i]+15, fishy[i]+5, 3,3);
  fishx[i]= fishx[i] + speed[i];

  if(fishx[i] > 800){
    fishx[i]= -50.0;
    fishy[i]= round(random(0,350));
    fishcolor[i]= color( random(0,255), random(0,255), random(0,255));
  }


}





}
