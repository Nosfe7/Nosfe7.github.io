precision mediump float;

// matrice di modellazione e di vista
uniform mat4 modelViewMatrix;
// matrice di proiezione
uniform mat4 projectionMatrix;

//Varia dimensioni della particella con la distanza dal punto di emissione
uniform vec3 emitterPosition;
attribute vec3 position;
attribute float size; 

//Opacità particella
uniform float opacity;

uniform float timer;

void main() {

	//vUv = uv;

	float dist = distance(emitterPosition, position);

	
	gl_PointSize =  size / pow(dist, 1.5);
	
	gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0);

	
}