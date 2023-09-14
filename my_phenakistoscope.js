const SLICE_COUNT = 10;

function setup_pScope(pScope){
  pScope.output_mode(ANIMATED_DISK);
  pScope.scale_for_screen(true);
  pScope.draw_layer_boundaries(true);
  pScope.set_direction(CCW);
  pScope.set_slice_count(SLICE_COUNT);

  pScope.load_image("grasscentre" , "png");
  pScope.load_image_sequence("tree" , "png", 10);
  pScope.load_image("mandala" , "png");
  angleMode(DEGREES);
}

function setup_layers(pScope){

  new PLayer(null, 255,255,235);
 
  var layer1 = new PLayer(yellow);
  layer1.mode( RING );
  layer1.set_boundary( 200, 1000 );

  var layer2 = new PLayer(pink);
  layer2.mode( RING );
  layer2.set_boundary( 0, 400 );

  var layer3 = new PLayer(centre);
  layer3.mode( RING );
  layer3.set_boundary( 0, 400 );

  var treeseq = new PLayer(tree);
  treeseq.mode(RING)
  treeseq.set_boundary(0,1000);

  var layer4 = new PLayer(bird);
  layer4.mode( RING );
  layer4.set_boundary( 0, 1000 );
}

function tree(x, y, animation, pScope){
  translate(0,0);
  scale(0.5);
  rotate(0);

  pScope.draw_image_from_sequence("tree", x, y-1250, animation.frame);
}
function yellow(x, y, animation, pScope){
  
  noStroke();
  fill(255, 228, 156);
ellipse(x-250,y-250,1000);
}
function pink(x, y, animation, pScope){

noStroke();
fill(235,123,86);
ellipse(x,y-300,800);

fill(255, 231, 224);
ellipse(0-100*animation.frame,-960,100,100);
ellipse(100-100*animation.frame,-990,100,100);
ellipse(200-100*animation.frame,-970,100,100);
ellipse(300-100*animation.frame,-930,100,100);
ellipse(-100-100*animation.frame,-990,100,100);
ellipse(-200-100*animation.frame,-970,100,100);
ellipse(-300-100*animation.frame,-950,100,100);
}
function centre (x, y, animation, pScope){

scale(.9);
  pScope.draw_image("grasscentre",x,y);
scale(0.8);
  pScope.draw_image("mandala",x,y);




}
function bird (x,y, animation, pScope){

  var ybird = 1
  var lflap = 1 
  var rflap = 1 
  ybird = 300+animation.frame*0;

  if(animation.frame<0.5){
    lflap =  -20 - 70*animation.frame*2; //20-90
    rflap =  20 + 70*animation.frame*2; //20-90
  }
  else{
    lflap =  -90 + 70 * animation.frame; //20-90
    rflap =  90 - 70 * animation.frame; //20-90
  }
  
 //bird 1
  push();
  translate(0-400*animation.frame,-50-400*animation.frame);

  stroke(40);
  noFill();
  strokeWeight(8);

  push();
  translate(88, -300-ybird);
  rotate(rflap);

  arc(34, -5, 75, 50, 180, -60);
  pop();

  push();
  translate(88, -300-ybird);
  rotate(lflap);
  ellipse(0, 0, 10, 10);
  arc(-15, 14, 75, 50, 180, -60);
  pop();

  pop();

//bird 2 
  push();
  translate(100-600*animation.frame,-150-400*animation.frame);
  scale(0.7);
  stroke(40);
  noFill();
  strokeWeight(8);

  push();
  translate(88, -300-ybird);
  rotate(rflap);
 
  arc(34, -5, 75, 50, 180, -60);
  pop();

  push();
  translate(88, -300-ybird);
  rotate(lflap);
  ellipse(0, 0, 10, 10);
  arc(-15, 14, 75, 50, 180, -60);
  pop();

  pop();



//bird 3 
  push();
  translate(0-600*animation.frame,-200-400*animation.frame);
  scale(0.9);
  stroke(40);
  noFill();
  strokeWeight(8);

  push();
  translate(88, -300-ybird);
  rotate(rflap);

  arc(34, -5, 75, 50, 180, -60);
  pop();

  push();
  translate(88, -300-ybird);
  rotate(lflap);
  ellipse(0, 0, 10, 10);
  arc(-15, 14, 75, 50, 180, -60);
  pop();

  pop();


//bird 4 
  push();
  translate(0-600*animation.frame,-200-400*animation.frame);
  scale(0.5);
  stroke(40);
  noFill();
  strokeWeight(8);

  push();
  translate(88, -300-ybird);
  rotate(rflap);

  arc(34, -5, 75, 50, 180, -60);
  pop();

  push();
  translate(88, -300-ybird);
  rotate(lflap);
  ellipse(0, 0, 10, 10);
  arc(-15, 14, 75, 50, 180, -60);
  pop();

  pop();

}

