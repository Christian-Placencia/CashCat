let scene, camera, renderer, model;

function init() {
    // Crear la escena
    scene = new THREE.Scene();
    // Crear la cámara
    camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    // Crear el renderizador y configurar el canvas
    renderer = new THREE.WebGLRenderer({ canvas: document.getElementById('bg-canvas'), alpha: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    
    // Cargar el modelo 3D
    const loader = new THREE.GLTFLoader();
    loader.load('character.gltf', (gltf) => {
        model = gltf.scene;
        
        // Escalar el modelo a un tamaño más pequeño
        model.scale.set(0.020, 0.020, 0.020); // Escalar a 1/20 del tamaño original
        
        scene.add(model);
        model.position.set(0, -1, 0); // Ajustar la posición del modelo si es necesario
    }, undefined, function (error) {
        console.error(error);
    });

    // Agregar luces a la escena
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5); // Luz ambiental
    scene.add(ambientLight);
    const directionalLight = new THREE.DirectionalLight(0xffffff, 1); // Luz direccional
    directionalLight.position.set(1, 1, 1).normalize();
    scene.add(directionalLight);

    camera.position.z = 5; // Ajustar la posición de la cámara

    animate(); // Iniciar la animación
}

function animate() {
    requestAnimationFrame(animate);
    if (model) {
        model.rotation.y += 0.01; // Rotar el modelo para que sea visible
    }
    renderer.render(scene, camera); // Renderizar la escena
}

// Redimensionar la ventana
window.addEventListener('resize', () => {
    camera.aspect = window.innerWidth / window.innerHeight; // Ajustar aspecto de la cámara
    camera.updateProjectionMatrix(); // Actualizar proyección
    renderer.setSize(window.innerWidth, window.innerHeight); // Ajustar tamaño del renderizador
});

// Inicializar la escena 3D
init();
