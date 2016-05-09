precision mediump float;

uniform sampler2D texture;
uniform float opacity;

void main() {
	
	

	gl_FragColor = texture2D(texture,gl_PointCoord);
	
	gl_FragColor.a = opacity;
}