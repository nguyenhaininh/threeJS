
import * as THREE from './build/three.module.js';

import { BasisTextureLoader } from './examples/jsm/loaders/BasisTextureLoader.js';

var camera, scene, renderer;
var mesh;

var clock = new THREE.Clock();

init();
animate();

function init() {

	renderer = new THREE.WebGLRenderer( { antialias: true } );
	renderer.setPixelRatio( window.devicePixelRatio );
	renderer.setSize( window.innerWidth, window.innerHeight );
	renderer.outputEncoding = THREE.sRGBEncoding;
	document.body.appendChild( renderer.domElement );

	camera = new THREE.PerspectiveCamera( 50, window.innerWidth / window.innerHeight, 1, 2000 );
	camera.position.z = 500;

	scene = new THREE.Scene();

	var geometry = new THREE.BoxBufferGeometry( 200, 200, 200 );
	var material = new THREE.MeshBasicMaterial();

	mesh = new THREE.Mesh( geometry, material );

	scene.add( mesh );

	var loader = new BasisTextureLoader();
	loader.setTranscoderPath( 'js/libs/basis/' );
	loader.detectSupport( renderer );
	loader.load( 'textures/compressed/PavingStones.basis', function ( texture ) {

		texture.encoding = THREE.sRGBEncoding;
		material.map = texture;
		material.needsUpdate = true;

	}, undefined, function ( error ) {

		console.error( error );

	} );

	window.addEventListener( 'resize', onWindowResize, false );

}

function onWindowResize() {

	camera.aspect = window.innerWidth / window.innerHeight;
	camera.updateProjectionMatrix();

	renderer.setSize( window.innerWidth, window.innerHeight );

}

function animate() {

	requestAnimationFrame( animate );

	var delta = clock.getDelta() * 0.5;

	mesh.rotation.x += delta;
	mesh.rotation.y += delta;

	renderer.render( scene, camera );

}