const lights = [
  { x: 66, y: 7 },
  { x: 187, y: 66 },
  { x: 252, y: 60 },
  { x: 327, y: 75 },
  { x: 381, y: 40 },
  { x: 437, y: 88 },
  { x: 476, y: 87 },
  { x: 431, y: 39 },
  { x: 553, y: 42 },
  { x: 582, y: 85 },
  { x: 635, y: 16 },
  { x: 665, y: 95 },
  { x: 770, y: 125 },
  { x: 895, y: 64 },
  { x: 702, y: 65 },
  { x: 788, y: 68 },
  { x: 872, y: 22 },
  { x: 1036, y: 42 },
  { x: 1105, y: 27 },
  { x: 1178, y: 30 },
  { x: 1302, y: 52 },
  { x: 1379, y: 45 },
  { x: 1462, y: 50 },
  { x: 1526, y: 13 }
];

const canvas = document.getElementById("jsElems");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

function drawLight(x, y, intensity) {
  const gradient = ctx.createRadialGradient(x, y, 0, x, y, 20);
  gradient.addColorStop(0, `rgba(255,255,255,${intensity})`);
  gradient.addColorStop(1, "rgba(255,200,120,0)");

  ctx.fillStyle = gradient;
  ctx.beginPath();
  ctx.arc(x, y, 20, 0, Math.PI * 2);
  ctx.fill();
}
//DEBUG
// lights.forEach(light => {
//   const flicker = 0.5 + Math.random() * 0.5;
//   drawLight(light.x, light.y, flicker);
// });

function flickerLight() {
  let light = lights[Math.round(Math.random() * (lights.length - 1))]
  const flicker = 0.5 + Math.random() * 0.5;
  drawLight(light.x, light.y, flicker);

  window.setTimeout(() => { ctx.clearRect(0, 0, canvas.width, canvas.height); }, 200)
  window.setTimeout(() => { flickerLight() }, 1000 + Math.random() * 100)
}
flickerLight();

//FOR GETTING POSITIONS
// clickPos = []
// canvas.addEventListener("click", (e) => {
//   const rect = canvas.getBoundingClientRect();
//   const x = e.clientX - rect.left;
//   const y = e.clientY - rect.top;

//   // console.log({ x, y });
//   clickPos.push({ x, y });
//   console.log(clickPos);
// });