import * as THREE from 'three';
import {OrbitControls} from 'three/examples/jsm/controls/OrbitControls'
import { FBXLoader } from 'three/examples/jsm/loaders/FBXLoader.js';

// Scene
const scene = new THREE.Scene();
const geometry = new THREE.SphereGeometry(3, 64, 64);
const material = new THREE.MeshStandardMaterial({
    color: "#a9a997",
});
let obj = new THREE.Mesh(geometry, material);
const manager = new THREE.LoadingManager();
const loader = new FBXLoader(manager);
loader.load('/3dmodel.fbx', function (fbx) {
    fbx.position.y = -.5;
    scene.add( fbx );
}, undefined, function ( error ) {
    console.error( error );
});

// Sizes
let tjscont = document.getElementById('threejs-container')
let sizes = {
    width: window.innerWidth,
    height: window.innerHeight
}

// Light
const light = new THREE.PointLight(0xffffff, 1, 200);
light.position.set(25, 10, 0);
scene.add(light);

// Camera
const camera = new THREE.PerspectiveCamera( 25, sizes.width / sizes.height, 1, 100 );
camera.position.z = 20;
camera.position.y = 0;
camera.position.x = 0;
scene.add(camera);


// Render
const canvas = document.querySelector('#threejs-container');
const renderer = new THREE.WebGLRenderer( {canvas, alpha: true});
renderer.setSize( sizes.width, sizes.height );
renderer.setPixelRatio(window.devicePixelRatio);


// Model Loaded
let preloader = document.getElementById('preloader');
function loadingComplete() {
    manager.onLoad = () => {
            preloader.style.display = 'none'}, 1;
}
loadingComplete();


// Controls
const controls = new OrbitControls(camera, canvas);
controls.enabled = false;
controls.enableDamping = true;
controls.enablePan = false;
controls.enableZoom = false;
controls.autoRotate = true;
controls.autoRotateSpeed = -1.25;

// Resize
window.addEventListener('resize', () => {
    const newWidth = window.innerWidth;
    const newHeight = window.innerHeight;
    camera.aspect = newWidth/ newHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(newWidth, newHeight);
    }
)

// On Scroll
let prevScrollPos = window.pageYOffset;
window.addEventListener('scroll', () => {
    const currentScrollPos = window.pageYOffset;
    const isScrollingUp = currentScrollPos < prevScrollPos;
    const isScrollingDown = currentScrollPos > prevScrollPos;

    if (isScrollingUp) {
        obj.rotation.y = obj.rotation.y - (currentScrollPos - prevScrollPos)* .00025 ;
        controls.autoRotateSpeed = 1.25;
    } else if (isScrollingDown) {
        obj.rotation.y = obj.rotation.y - (currentScrollPos - prevScrollPos)* .00025 ;
        controls.autoRotateSpeed = -1.25;
    }
    
    prevScrollPos = currentScrollPos;
})

// Hide
const loop = () => {
    controls.update();
    renderer.render( scene, camera );
    window.requestAnimationFrame(loop);
}
loop();