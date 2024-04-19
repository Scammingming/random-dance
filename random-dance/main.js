// TITLE

// Set up Canvas and Graphics Context
let cnv = document.getElementById("myCanvas");
let ctx = cnv.getContext("2d");
cnv.width = 800;
cnv.height = 600;

// Global Variable
let myArray = [];

for (let i = 0; i < 100; i++) {
  myArray[i] = 300;
}

// Main Program Loop
requestAnimationFrame(draw);

function draw() {
  // Logic
  let barWidth = cnv.width / myArray.length;

  // Drawing
  ctx.clearRect(0, 0, cnv.width, cnv.height);

  //Draw Bar graph
  ctx.fillStyle = "orange";
  ctx.strokeStyle = "grey";
  for (let i = 0; i < myArray.length; i++) {
    ctx.fillRect(i * barWidth, cnv.height - myArray[i], barWidth, myArray[i]);
    ctx.strokeRect(i * barWidth, cnv.height - myArray[i], barWidth, myArray[i]);
  }

  // Request another Animation Frame
  requestAnimationFrame(draw);
}

document.addEventListener("keydown", keydownHandler);

function keydownHandler(event) {
  console.log(event.code);
  if (event.code == "Space")
    for (let i = 0; i < myArray.length; i++) {
      let choice = Math.floor(Math.random() * 10);
      if (choice % 2 == 0) myArray[i] += Math.random() * 5;
      else myArray[i] += Math.random() * -5;
    }
  if (event.code == "KeyR") {
    for (let i = 0; i < myArray.length; i++) {
      myArray[i] = 300;
    }
  }
}
