const lights = [
  { x: 78, y: 7 },
  { x: 231, y: 83 },
  { x: 408, y: 95 },
  { x: 537, y: 48 },
  { x: 544, y: 110 },
  { x: 690, y: 53 },
  { x: 669, y: 122 },
  { x: 810, y: 44 },
  { x: 889, y: 144 },
  { x: 1080, y: 116 },
  { x: 981, y: 83 },
  { x: 1293, y: 54 },
  { x: 1442, y: 35 },
  { x: 1543, y: 63 },
  { x: 1722, y: 55 },
  { x: 1828, y: 65 },
  { x: 1904, y: 17 }
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