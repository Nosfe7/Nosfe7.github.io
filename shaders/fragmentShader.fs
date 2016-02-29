
uniform sampler2D texture;
varying highp vec2 vUv;

void main() {
	gl_FragColor = texture2D(texture,gl_PointCoord);
}