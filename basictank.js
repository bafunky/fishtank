float[] fishx= {50.0, 150.0, 200.0, 300.0, 400.0, 450.0, 500.0, 550.0, 700.0, 750.0};
float[] speed= {1.0, 0.8, 0.4, 1.1, 1.05, 1.3, 1.5, 1.2, 0.9, 0.6};
int[] fishy= {5, 50, 280, 100, 240, 105, 20, 220, 90, 180};


void setup(){
size(750,300);
frameRate(30);
background(30,60,150);
noStroke();
fill(200,10,0);
}


void draw(){

  background(30,60,150);
  
for(int i=0; i<10; i=i+1){
ellipse(fishx[i], fishy[i], 50,20);
fishx[i]= fishx[i] + speed[i];

if(fishx[i] > 800){
fishx[i]= -50.0;
fishy[i]= round(random(0,350));

}


}





}
