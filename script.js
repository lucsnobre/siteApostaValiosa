
        function girarRoleta() {
            alert("A roleta 3D será adicionada em breve!");
        }

        // Configuração da cena 3D
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(75, window.innerWidth / 500, 0.1, 1000);
        const renderer = new THREE.WebGLRenderer({ antialias: true });
        renderer.setSize(window.innerWidth, 500);
        renderer.setClearColor(0x000000);
        document.getElementById("scene-container").appendChild(renderer.domElement);

        // Adicionando luzes para brilho
        const light = new THREE.PointLight(0xffffff, 1.5, 100);
        light.position.set(5, 5, 5);
        scene.add(light);

        const ambientLight = new THREE.AmbientLight(0x404040);
        scene.add(ambientLight);

        // Criando um cilindro para representar a roleta com material brilhante
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
            roleta3D.rotation.y += 0.02;
            renderer.render(scene, camera);
        }

        animate();
