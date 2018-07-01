
int fx=0;
int fx1=80;
int fx2=360;
int bubb1=400;
int bubb2=200;

void setup(){
 size(400,400);
  frameRate(30);
  
}


void draw(){
void bubbles=function(size,bubbleX,bubbleY){
  int rand = round(random(-2,2));

  fill(31, 145, 134);
  ellipse(bubbleX+rand,bubbleY,size,size);
  fill(199, 209, 255);
 
  ellipse((bubbleX+rand)-(size/5),bubbleY-(size/3.5),size/4,size/5);
  
};
void fish=function(centerX, centerY, bodyLength, bodyHeight, bodyColor,tailColor,eyeSize,eyeColor){

noStroke();
fill(bodyColor);
// body
ellipse(centerX, centerY, bodyLength, bodyHeight);
// tail
fill(tailColor);
int tailWidth = round(bodyLength/4);
int tailHeight = round(bodyHeight/2);
triangle(centerX-bodyLength/2, centerY,
         centerX-bodyLength/2-tailWidth, centerY-tailHeight,
         centerX-bodyLength/2-tailWidth, centerY+tailHeight);
// eye
fill(eyeColor);
ellipse(centerX+bodyLength/4, centerY, bodyHeight/eyeSize, bodyHeight/eyeSize);

};

background(121, 209, 189);
fish(fx2,60,80,100, color(255, 0, 0),color(242, 128, 136),5,color(0,0,0));
fish(190,300,200,100,color(random(0,255),random(0,255),random(0,255)),color(random(0,255),random(0,255),random(0,255)),5,color(random(0,200)));
fish(random(fx1,fx1+30),random(100,200),random(100,200),random(50,150),color(140, 235, 17),color(93, 212, 49),5,color(0));
fill(0, 0, 0);
bubbles(40,200,bubb1);
bubbles(20,40,bubb2);
fish(fx,200,50,30,color(242, 222, 109), color(255, 199, 110), 3, color(0, 0, 0));
fx+=random(1,2);
if(fx>=425){
 fx=-25;
}
fx1+=random(-2,4);
if(fx1>=425){
 fx1=-25;
}
fx2+=random(0,1.5);
if(fx2>=425){
 fx2=-25;
}

  if(bubb1>=-10&& bubb1<=450){
  bubb1+=-3;
  
  }else{
   bubb1=410;
  
  }
 if(bubb2>=-10&& bubb1<=450){
  bubb2+=-2;
  
  }else{
   bubb2=410;
  
  }

};
