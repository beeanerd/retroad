var x = 0;
var length = 0;
var degree = 0;
var liveDegree = 0;
var rotationVector;
var difficulty = 15;
var directions = ["left", 1579, "right", 1943, "right", 1234, "left", 1632, "left", 1214, "right"];
var directionCount = 0;
var currentDir;
var nextDir;
var bikeDeg=0;

var buildings = []

var bike;
function preload() {
  bike = loadModel('bike.obj');
}

function setup() {
  createCanvas(600, 600, WEBGL);
  // debugMode();
  camera(0, 0, width, 0, 0, 0, 0, 1, 0);
  rotationVector = createVector(0, width);
  length = random(1000) + 1000;
  makeBuildings(width/4, length);
  nextDir = floor(random(2));
}

function draw() {
  
  noStroke();
  background(0);
  pointLight(255,255,255,0,0,width/2);
  pointLight(100,100,100,0,0,3*width/4);
  ambientMaterial(255,50,200);
  
  
  push();
  rotateX(PI/2);
  rotateZ(PI/2);
  rotateZ(bikeDeg*PI/180);
  translate(0,0,-width*sqrt(3)/8)
  model(bike);
  pop();
  if (x - width*1.25 < length) {
    x += difficulty;
    hextube(length, degree, x);
  } else {
    currentDir = nextDir;
    nextDir = floor(random(2))
    if (currentDir === 1) {
      degree += 45;
    } else {
      degree -= 45;
    }
    length = random(1000) + 1000;
    x = 0;
    makeBuildings(width/4, length);
  }
  if (x > length) {
    if (nextDir === 1) {
      hextube(length, degree + 45, x - ((width*1.25+length)/length)*length);
    } else {
      hextube(length, degree - 45, x - ((width*1.25+length)/length)*length);
    }
  }

  
  degreeUpdate();
  // orbitControl();
  
}

function degreeUpdate() {
  if (liveDegree != degree) {
    if (liveDegree < degree) {
      liveDegree += difficulty/10;
    } else {
      liveDegree -= difficulty/10;
    }
    turnCamera(liveDegree);
  }
}

function turnCamera(deg) {
  rotationVector.rotate(-deg * PI/180);
  camera(rotationVector.x, 0, rotationVector.y, 0, 0, 0, 0, 1, 0)
  rotationVector.rotate(deg * PI/180);
}

function keyPressed() {
  if (keyCode === LEFT_ARROW) {
    bikeDeg += -45;
  } else if (keyCode === RIGHT_ARROW) {
    bikeDeg -= -45;
  }
}

function hextube(length, rotation, position) {
  push();
  rotateY(rotation * PI/180)
  translate(-5*width/32, sqrt(3)*width/8,-length+position-width/4)
  for (let i = 0; i < buildings[0].length; i++) {
    push();
    createBuilding(buildings[0][i].b, buildings[0][i].v, 0);
    pop();
  }
  pop();
  push();
  rotateY(rotation * PI/180);
  rotateX(PI/2);
  translate(0, -length + position, sqrt(3) * width/8);
  // rotate(PI/3);
  fill(0);
  rect(-width/8, -height/4, width/4, length);
  pop();
  
  push();
  rotateY(rotation * PI/180)
  rotateZ(PI);
  translate(-5*width/32, sqrt(3)*width/8,-length+position-width/4)
  for (let i = 0; i < buildings[1].length; i++) {
    push();
    createBuilding(buildings[1][i].b, buildings[1][i].v, 0);
    pop();
  }
  pop();
  push();
  rotateY(rotation * PI/180);
  rotateX(PI/2);
  translate(0, -length + position, -sqrt(3) * width/8);
  // rotate(PI/3);
  fill(0);
  rect(-width/8, -height/4, width/4, length);
  pop();
  
  
  push();
  rotateY(rotation * PI/180)
  rotateZ(PI/3);
  translate(-5*width/32, sqrt(3)*width/8,-length+position-width/4)
  for (let i = 0; i < buildings[2].length; i++) {
    push();
    createBuilding(buildings[2][i].b, buildings[2][i].v, 0);
    pop();
  }
  pop();
  
  push();
  rotateY(rotation * PI/180);
  rotateX(PI/2);
  translate((-3*width/16), -length+position,(-sqrt(3) * width/8)/2);
  rotateY(PI/3);
  fill(0);
  rect(-width/8, -height/4, width/4, length);
  pop();
  
  
  push();
  rotateY(rotation * PI/180)
  rotateZ(-PI/3);
  translate(-5*width/32, sqrt(3)*width/8,-length+position-width/4)
  for (let i = 0; i < buildings[3].length; i++) {
    push();
    createBuilding(buildings[3][i].b, buildings[3][i].v, 0);
    pop();
  }
  pop();
  
  push();
  rotateY(rotation * PI/180);
  rotateX(PI/2);
  translate((3*width/16), -length + position, (-sqrt(3) * width/8)/2);
  rotateY(-PI/3);
  fill(0);
  rect(-width/8, -height/4, width/4, length);
  pop();
  
  
  push();
  rotateY(rotation * PI/180)
  rotateZ(-2*PI/3);
  translate(-5*width/32, sqrt(3)*width/8,-length+position-width/4)
  for (let i = 0; i < buildings[4].length; i++) {
    push();
    createBuilding(buildings[4][i].b, buildings[4][i].v, 0);
    pop();
  }
  pop();
  
  push();
  rotateY(rotation * PI/180);
  rotateX(PI/2);
  translate((-3*width/16), -length + position, (sqrt(3) * width/8)/2);
  rotateY(-PI/3);
  fill(0);
  rect(-width/8, -height/4, width/4, length);
  pop();
  
  
  push();
  rotateY(rotation * PI/180)
  rotateZ(2*PI/3);
  translate(-5*width/32, sqrt(3)*width/8,-length+position-width/4)
  for (let i = 0; i < buildings[5].length; i++) {
    push();
    createBuilding(buildings[5][i].b, buildings[5][i].v, 0);
    pop();
  }
  pop();
  
  push();
  rotateY(rotation * PI/180);
  rotateX(PI/2);
  translate((3*width/16), -length + position, (sqrt(3) * width/8)/2);
  rotateY(PI/3);
  fill(0);
  rect(-width/8, -height/4, width/4, length);
  pop();
}

function makeBuildings(w, h) {
  buildings.length = 0;
  for (let i = 0; i < 6; i++) {
    
    buildings.push([])
    let y = 0;
    while (y < h) {
      let x = 0;
      while (x < w) {
        // print(x)
        let b = {}
        setParams(b)
        x+=b.size1*2.5
        let v = createVector(x, 0, y);
        buildings[i].push({b:b, v:v});
      }
      y +=75
    }
  }
  
}

function createBuilding(building, pos, rotz) {
  translate(pos);
  rotateZ(rotz);
  if (building.num === 1) {
    createPrimitive(building.prim3,building.size1,building.height1*2.5);
  } else if (building.num === 2) {
    createPrimitive(building.prim1,building.size1,building.height1*1.5);
    createPrimitive(building.prim3,building.size2,building.height2*1.5);
  } else if (building.num === 3) { 
    createPrimitive(building.prim1,building.size1,building.height1);
    createPrimitive(building.prim2,building.size2,building.height2);
    createPrimitive(building.prim3,building.size3,building.height3);
  }
}

function createPrimitive(prim, size, height) {
  translate(0,height/2,0);
  if (prim === 1) {
    box(size, height, size);
  } else if (prim === 2) {
    cylinder(size/2, height, 7);
  } else if (prim === 3) {
    cone(size/2, height, 6);
  }
  translate(0,height/2,0);
}

function setParams(building) {
  building.height1 = -(random(24)+8)
  building.size1 = random(10)+14
  building.height2 = -(random(20)+6)
  building.size2 = random(building.size1-10)+9
  building.height3 = -(random(16)+6)
  building.size3 = random(building.size2-9)+9
  building.prim1 = 1//floor(random(2)+1);
  building.prim2 =1// floor(random(2)+1);
  building.prim3 = floor(random(3)+1);
  building.num = floor(random(3)+1);
}
