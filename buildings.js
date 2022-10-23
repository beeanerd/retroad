function setup() {
    createCanvas(600, 600, WEBGL);
    setParams(random(10000), building1)
    
    debugMode();
  }
  
  var building1={};
  
  function draw() {
    background(220);
    
    push();
    v1 = createVector(0, 0, 0);
    createBuilding(building1, v1, 45*PI/180);
    pop();
    
    orbitControl();
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
      cylinder(size/2, height);
    } else if (prim === 3) {
      cone(size/2, height);
    }
    translate(0,height/2,0);
  }
  
  function setParams(seed, building) {
    randomSeed(seed);
    building.height1 = -(random(80)+40)
    building.size1 = random(50)+70
    building.height2 = -(random(60)+30)
    building.size2 = random(building.size1-50)+45
    building.height3 = -(random(40)+30)
    building.size3 = random(building.size2-45)+45
    building.prim1 = floor(random(2)+1);
    building.prim2 = floor(random(2)+1);
    building.prim3 = floor(random(3)+1);
    building.num = floor(random(3)+1);
  }