// 
// 
// 
// 
// 
// 
let size = 20, color

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0);
  noStroke()
  color = {
    r: random(255),
    g: random(255),
    b: random(255)
  }

  // socket.on('broadcastDrawing', (data) => {
  //   fill(color.r, color.g, color.b)
  //   ellipse(data.x, data.y, size, size)
  // })
}

function displayClients(clients) {
//  console.log
}


function keyPressed() {
  if (key == ' ') {
    color.r = random(255)
    color.g = random(255)
    color.b = random(255)
    console.log("hey")
  }
  if(key == 'b'){
    color.r = 0
    color.g = 0
    color.b = 0
  }
  if(key =='r'){
    background(0)
  }
}

function mouseDragged() {
  fill(color.r,color.g,color.b)
  ellipse(mouseX, mouseY, size)
  let data = {
    x: mouseX,
    y: mouseY,
    c: color
  }
  // socket.emit('clientDrawing', data)
}