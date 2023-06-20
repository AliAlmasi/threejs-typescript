// import three.js and the orbit controls from three.js
import * as THREE from 'three';
import {OrbitControls} from 'three/examples/jsm/controls/OrbitControls';

// create a scene
const scene = new THREE.Scene();
scene.background = new THREE.Color(0x21252b);

// create a camera
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

// position the camera
camera.position.z = 2;

// create a renderer
const renderer = new THREE.WebGLRenderer();

// add orbit controls to the camera, controlling the renderer
new OrbitControls(camera, renderer.domElement)

renderer.setSize(window.innerWidth, window.innerHeight);

// 4. add renderer to DOM
document.body.appendChild(renderer.domElement);

// create the material and the geometry of the cube
const geometry = new THREE.BoxGeometry(1, 1, 1);
const material = new THREE.MeshBasicMaterial({color: 0x00ff00, wireframe: true});

// create the cube
const cube = new THREE.Mesh(geometry, material);
// add the cube to the scene
scene.add(cube);

// define the render procedure
function render() {
    renderer.render(scene, camera);
}

// define so the camera's aspect will resize automatically when the window resizes
function onWindowResize() {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
    render();
}

// resize the scene (based on the window resizing definition)
window.addEventListener(`resize`, onWindowResize, false);

// define the animation
function animate() {
    requestAnimationFrame(animate);
    cube.rotation.x +=0.001
    cube.rotation.y +=0.001
    render();
}

animate();