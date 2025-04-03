document.addEventListener("DOMContentLoaded", function() {
    const audio = document.getElementById("musica");
    audio.currentTime = 235; // Começa no minuto 3:55
    audio.play();
});

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / 500, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(window.innerWidth, 500);
document.getElementById("scene-container").appendChild(renderer.domElement);

const light = new THREE.PointLight(0xffffff, 1.5, 100);
light.position.set(5, 5, 5);
scene.add(light);

const ambientLight = new THREE.AmbientLight(0x404040);
scene.add(ambientLight);

const frutas = ["🍒", "🍋", "🍉", "🍊", "🍇", "🍌"];
let resultado = [];

const geometry = new THREE.CylinderGeometry(3, 3, 0.5, 64);
const material = new THREE.MeshStandardMaterial({
    color: 0xffcc00,
    metalness: 0.8,
    roughness: 0.2,
    emissive: 0xffaa00
});
const roleta3D = new THREE.Mesh(geometry, material);
scene.add(roleta3D);
camera.position.z = 7;

function animate() {
    requestAnimationFrame(animate);
    renderer.render(scene, camera);
}
animate();

function girarRoleta() {
    roleta3D.rotation.y = 0;
    let velocidade = 0.5;
    let interval = setInterval(() => {
        roleta3D.rotation.y += velocidade;
        velocidade *= 0.95;
        if (velocidade < 0.01) {
            clearInterval(interval);
            verificarResultado();
        }
    }, 50);
}

function verificarResultado() {
    resultado = [
        frutas[Math.floor(Math.random() * frutas.length)],
        frutas[Math.floor(Math.random() * frutas.length)],
        frutas[Math.floor(Math.random() * frutas.length)]
    ];
    alert("Resultado: " + resultado.join(" - "));

    if (Math.random() < 0.02) {
        alert("PARABÉNS! Você ganhou R$5 no PIX! Me cobre no WhatsApp: 11913423204");
    }
}