precision mediump float;

uniform sampler2D texture;
uniform float rotation;

void main() {
	
	

	gl_FragColor = texture2D(texture,gl_PointCoord);
}