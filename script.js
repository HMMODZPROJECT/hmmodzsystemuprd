// Matrix effect
const canvas = document.getElementById("matrix");
const ctx = canvas.getContext("2d");

// full screen
canvas.height = window.innerHeight;
canvas.width = window.innerWidth;

const letters = "01ABCDEFGHIJKLMNOHMMODZVIPTEAM182819278839-&@+#(2)@あいうえお";
const fontSize = 14;
const columns = canvas.width / fontSize; 
const drops = [];

for (let x = 0; x < columns; x++) {
  drops[x] = 1; 
}

function draw() {
  // semi transparent background
  ctx.fillStyle = "rgba(255, 192, 203, 0.1)"; // pink transparan
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  ctx.fillStyle = "#ff1493"; // pink terang
  ctx.font = fontSize + "px monospace";

  for (let i = 0; i < drops.length; i++) {
    const text = letters.charAt(Math.floor(Math.random() * letters.length));
    ctx.fillText(text, i * fontSize, drops[i] * fontSize);

    if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
      drops[i] = 0;
    }

    drops[i]++;
  }
}

setInterval(draw, 33);

// resize
window.addEventListener("resize", () => {
  canvas.height = window.innerHeight;
  canvas.width = window.innerWidth;
});