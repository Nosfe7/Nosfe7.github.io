function loadArrows(scene,loader){

	//INDIZI
				
				
	//Livello 1
	arrow = new THREE.Object3D();
	
	loader.load(
		// Path dell'oggetto da caricare in formato json
		'models/sign.json',
		// Funzione da richiamare quando l'oggetto è caricato
		function ( geometry) {
			//var texture = THREE.ImageUtils.loadTexture('models/maps/TorchUV.png');
			
			var material = new THREE.MeshPhongMaterial({color:new THREE.Color(0xff0000), specular: new THREE.Color(0x00ff00), shininess:100});
			//geometry.scale(1/10,1/10,1/10);
			var mesh = new THREE.Mesh( geometry, material );		
			arrow.add(mesh);
		}
	);
	
	scene.add(arrow);
	arrow.position.set(-7,1.05,10);
	arrow.rotation.y-= 180 * Math.PI / 180; //converto da radianti a gradi con Pi/180
	
	
	
	arrow1 = new THREE.Object3D();
	
	loader.load(
		// Path dell'oggetto da caricare in formato json
		'models/sign.json',
		// Funzione da richiamare quando l'oggetto è caricato
		function ( geometry) {

			
			var material = new THREE.MeshPhongMaterial({color:new THREE.Color(0x00ff00), shininess : 0});
			//geometry.scale(1/10,1/10,1/10);
			var mesh = new THREE.Mesh( geometry, material );		
			arrow1.add(mesh);
		}
	);
	
	scene.add(arrow1);
	arrow1.position.set(1,1.05,8);
	arrow1.rotation.y-= 90 * Math.PI / 180; //converto da radianti a gradi con Pi/180
	
	arrow2 = new THREE.Object3D();0xffff00
	
	loader.load(
		// Path dell'oggetto da caricare in formato json
		'models/sign.json',
		// Funzione da richiamare quando l'oggetto è caricato
		function ( geometry) {

			
			var material = new THREE.MeshPhongMaterial({color:new THREE.Color(0xffff00), specular:new THREE.Color(0Xff0000), shininess : 200});
			//geometry.scale(1/10,1/10,1/10);
			var mesh = new THREE.Mesh( geometry, material );		
			arrow2.add(mesh);
		}
	);
	
	scene.add(arrow2);
	arrow2.position.set(3,1.05,10);
	arrow2.rotation.y-= 180 * Math.PI / 180; //converto da radianti a gradi con Pi/180
	
	
	
	
	arrow3 = new THREE.Object3D();
	
	loader.load(
		// Path dell'oggetto da caricare in formato json
		'models/sign.json',
		// Funzione da richiamare quando l'oggetto è caricato
		function ( geometry) {

			
			var material = new THREE.MeshPhongMaterial({color:new THREE.Color(0xff7700)});
			//geometry.scale(1/10,1/10,1/10);
			var mesh = new THREE.Mesh( geometry, material );		
			arrow3.add(mesh);
		}
	);
	
	scene.add(arrow3);
	arrow3.position.set(8,1.05,7.5);
	arrow3.rotation.y-= 90 * Math.PI / 180; //converto da radianti a gradi con Pi/180
	
	
	arrow5 = new THREE.Object3D();
	
	loader.load(
		// Path dell'oggetto da caricare in formato json
		'models/sign.json',
		// Funzione da richiamare quando l'oggetto è caricato
		function ( geometry) {
			var material = new THREE.MeshPhongMaterial({color:new THREE.Color(0xff0000)});
			//geometry.scale(1/10,1/10,1/10);
			var mesh = new THREE.Mesh( geometry, material );		
			arrow5.add(mesh);
		}
	);
	
	scene.add(arrow5);
	arrow5.position.set(8,1.05,11.5);
	arrow5.rotation.y+= 90 * Math.PI / 180; //converto da radianti a gradi con Pi/180
	
	
	
	//Livello 2
	arrow6 = new THREE.Object3D();
	
	loader.load(
		// Path dell'oggetto da caricare in formato json
		'models/sign.json',
		// Funzione da richiamare quando l'oggetto è caricato
		function ( geometry) {
			//var texture = THREE.ImageUtils.loadTexture('models/maps/TorchUV.png');
			
			var material = new THREE.MeshPhongMaterial({color:new THREE.Color(0xff0000), specular:new THREE.Color(0x00ff00), shininess:100});
			//geometry.scale(1/10,1/10,1/10);
			var mesh = new THREE.Mesh( geometry, material );		
			arrow6.add(mesh);
		}
	);
	
	scene.add(arrow6);
	arrow6.position.set(16.5,1.05,-1);
	arrow6.rotation.y-= 180 * Math.PI / 180; //converto da radianti a gradi con Pi/180
	
	arrow7 = new THREE.Object3D();
	
	loader.load(
		// Path dell'oggetto da caricare in formato json
		'models/sign.json',
		// Funzione da richiamare quando l'oggetto è caricato
		function ( geometry) {
			//var texture = THREE.ImageUtils.loadTexture('models/maps/TorchUV.png');
			
			var material = new THREE.MeshPhongMaterial({color:new THREE.Color(0xffff00),  shininess:0});
			//geometry.scale(1/10,1/10,1/10);
			var mesh = new THREE.Mesh( geometry, material );		
			arrow7.add(mesh);0xff0000
		}
	);
	
	scene.add(arrow7);
	arrow7.position.set(14,1.05,-3);
	arrow7.rotation.y-= 90 * Math.PI / 180; //converto da radianti a gradi con Pi/180
	
	
	arrow8 = new THREE.Object3D();
	
	loader.load(
		// Path dell'oggetto da caricare in formato json
		'models/sign.json',
		// Funzione da richiamare quando l'oggetto è caricato
		function ( geometry) {
			//var texture = THREE.ImageUtils.loadTexture('models/maps/TorchUV.png');
			
			var material = new THREE.MeshPhongMaterial({color:new THREE.Color(0xff0000), shininess:0});
			//geometry.scale(1/10,1/10,1/10);
			var mesh = new THREE.Mesh( geometry, material );		
			arrow8.add(mesh);
		}
	);
	
	scene.add(arrow8);
	arrow8.position.set(24,1.05,-3);
	arrow8.rotation.y-= 90 * Math.PI / 180; //converto da radianti a gradi con Pi/180
	
	arrow9 = new THREE.Object3D();
	
	loader.load(
		// Path dell'oggetto da caricare in formato json0xff0000
		'models/sign.json',
		// Funzione da richiamare quando l'oggetto è caricato
		function ( geometry) {
			//var texture = THREE.ImageUtils.loadTexture('models/maps/TorchUV.png');
			
			var material = new THREE.MeshPhongMaterial({color:new THREE.Color(0x00ff00), shininess:0});
			//geometry.scale(1/10,1/10,1/10);
			var mesh = new THREE.Mesh( geometry, material );		
			arrow9.add(mesh);
		}
	);
	
	scene.add(arrow9);
	arrow9.position.set(24,1.05,1);
	arrow9.rotation.y+= 90 * Math.PI / 180; //converto da radianti a gradi con Pi/180
	
	arrow10 = new THREE.Object3D();
	
	loader.load(
		// Path dell'oggetto da caricare in formato json
		'models/sign.json',
		// Funzione da richiamare quando l'oggetto è caricato
		function ( geometry) {
			//var texture = THREE.ImageUtils.loadTexture('models/maps/TorchUV.png');
			
			var material = new THREE.MeshPhongMaterial({color:new THREE.Color(0xffff00), specular : new THREE.Color(0xffff00), shininess:100});
			//geometry.scale(1/10,1/10,1/10);
			var mesh = new THREE.Mesh( geometry, material );		
			arrow10.add(mesh);
		}
	);
	
	scene.add(arrow10);
	arrow10.position.set(22,1.05,5);
	arrow10.rotation.y+= 90 * Math.PI / 180; //converto da radianti a gradi con Pi/180
	
	
	arrow11 = new THREE.Object3D();
	
	loader.load(
		// Path dell'oggetto da caricare in formato json
		'models/sign.json',
		// Funzione da richiamare quando l'oggetto è caricato
		function ( geometry) {
			//var texture = THREE.ImageUtils.loadTexture('models/maps/TorchUV.png');
			
			var material = new THREE.MeshPhongMaterial({color:new THREE.Color(0xff558b),  shininess:0});
			//geometry.scale(1/10,1/10,1/10);
			var mesh = new THREE.Mesh( geometry, material );		
			arrow11.add(mesh);
		}
	);
	
	scene.add(arrow11);
	arrow11.position.set(20,1.05,3);
	//arrow11.rotation.y+= 180 * Math.PI / 180; //converto da radianti a gradi con Pi/180
	
	arrow12 = new THREE.Object3D();
	
	loader.load(
		// Path dell'oggetto da caricare in formato json
		'models/sign.json',
		// Funzione da richiamare quando l'oggetto è caricato
		function ( geometry) {
			//var texture = THREE.ImageUtils.loadTexture('models/maps/TorchUV.png');
			
			var material = new THREE.MeshPhongMaterial({color:new THREE.Color(0xffff00),  shininess:0});
			//geometry.scale(1/10,1/10,1/10);
			var mesh = new THREE.Mesh( geometry, material );		
			arrow12.add(mesh);
		}
	);
	
	scene.add(arrow12);
	arrow12.position.set(24,1.05,11);
	arrow12.rotation.y+= 180 * Math.PI / 180; //converto da radianti a gradi con Pi/180
	
	arrow13 = new THREE.Object3D();
	
	loader.load(
		// Path dell'oggetto da caricare in formato json
		'models/sign.json',
		// Funzione da richiamare quando l'oggetto è caricato
		function ( geometry) {
			//var texture = THREE.ImageUtils.loadTexture('models/maps/TorchUV.png');
			
			var material = new THREE.MeshPhongMaterial({color:new THREE.Color(0x00ff00),  shininess:0});
			//geometry.scale(1/10,1/10,1/10);
			var mesh = new THREE.Mesh( geometry, material );		
			arrow13.add(mesh);
		}
	);
	
	scene.add(arrow13);
	arrow13.position.set(20,1.05,11);
	//arrow13.rotation.y+= 180 * Math.PI / 180; //converto da radianti a gradi con Pi/180
	
	
	//Terzo livello
	arrow14 = new THREE.Object3D();
	
	loader.load(
		// Path dell'oggetto da caricare in formato json
		'models/sign.json',
		// Funzione da richiamare quando l'oggetto è caricato
		function ( geometry) {
			//var texture = THREE.ImageUtils.loadTexture('models/maps/TorchUV.png');
			
			var material = new THREE.MeshPhongMaterial({color:new THREE.Color(0x00ff00),  shininess:0});
			//geometry.scale(1/10,1/10,1/10);
			var mesh = new THREE.Mesh( geometry, material );		
			arrow14.add(mesh);
		}
	);
	
	scene.add(arrow14);
	arrow14.position.set(32,1.05,11);
	arrow14.rotation.y+= 180 * Math.PI / 180; //converto da radianti a gradi con Pi/180
	
	arrow15 = new THREE.Object3D();
	
	loader.load(
		// Path dell'oggetto da caricare in formato json
		'models/sign.json',
		// Funzione da richiamare quando l'oggetto è caricato
		function ( geometry) {
			//var texture = THREE.ImageUtils.loadTexture('models/maps/TorchUV.png');
			
			var material = new THREE.MeshPhongMaterial({color:new THREE.Color(0xff0000),  shininess:0});
			//geometry.scale(1/10,1/10,1/10);
			var mesh = new THREE.Mesh( geometry, material );		
			arrow15.add(mesh);
		}
	);
	
	scene.add(arrow15);
	arrow15.position.set(30,1.05,9);
	arrow15.rotation.y-= 90 * Math.PI / 180; 
	
	
	arrow16 = new THREE.Object3D();
	
	loader.load(
		// Path dell'oggetto da caricare in formato json
		'models/sign.json',
		// Funzione da richiamare quando l'oggetto è caricato
		function ( geometry) {
			//var texture = THREE.ImageUtils.loadTexture('models/maps/TorchUV.png');
			
			var material = new THREE.MeshPhongMaterial({color:new THREE.Color(0xffff00),  shininess:0});
			//geometry.scale(1/10,1/10,1/10);
			var mesh = new THREE.Mesh( geometry, material );		
			arrow16.add(mesh);
		}
	);
	
	scene.add(arrow16);
	arrow16.position.set(30,1.05,13);
	arrow16.rotation.y+= 90 * Math.PI / 180;
	
	arrow17 = new THREE.Object3D();
	
	loader.load(
		// Path dell'oggetto da caricare in formato json
		'models/sign.json',
		// Funzione da richiamare quando l'oggetto è caricato
		function ( geometry) {
			//var texture = THREE.ImageUtils.loadTexture('models/maps/TorchUV.png');
			
			var material = new THREE.MeshPhongMaterial({color:new THREE.Color(0x00ff00),  shininess:0});
			//geometry.scale(1/10,1/10,1/10);
			var mesh = new THREE.Mesh( geometry, material );		
			arrow17.add(mesh);
		}
	);
	
	scene.add(arrow17);
	arrow17.position.set(42,1.05,19);
	arrow17.rotation.y+= 90 * Math.PI / 180;
	
	arrow18 = new THREE.Object3D();
	
	loader.load(
		// Path dell'oggetto da caricare in formato json
		'models/sign.json',
		// Funzione da richiamare quando l'oggetto è caricato
		function ( geometry) {
			//var texture = THREE.ImageUtils.loadTexture('models/maps/TorchUV.png');
			
			var material = new THREE.MeshPhongMaterial({color:new THREE.Color(0xffcc00),  shininess:0});
			//geometry.scale(1/10,1/10,1/10);
			var mesh = new THREE.Mesh( geometry, material );		
			arrow18.add(mesh);
		}
	);
	
	scene.add(arrow18);
	arrow18.position.set(43,1.05,17);
	arrow18.rotation.y-= 180 * Math.PI / 180;
	
	
	arrow19 = new THREE.Object3D();
	
	loader.load(
		// Path dell'oggetto da caricare in formato json
		'models/sign.json',
		// Funzione da richiamare quando l'oggetto è caricato
		function ( geometry) {
			//var texture = THREE.ImageUtils.loadTexture('models/maps/TorchUV.png');
			
			var material = new THREE.MeshPhongMaterial({color:new THREE.Color(0xff0000), specular:new THREE.Color(0xffff00),  shininess:100});
			//geometry.scale(1/10,1/10,1/10);
			var mesh = new THREE.Mesh( geometry, material );		
			arrow19.add(mesh);
		}
	);
	
	scene.add(arrow19);
	arrow19.position.set(40,1.05,27);
	
	arrow20 = new THREE.Object3D();
	
	loader.load(
		// Path dell'oggetto da caricare in formato json
		'models/sign.json',
		// Funzione da richiamare quando l'oggetto è caricato
		function ( geometry) {
			//var texture = THREE.ImageUtils.loadTexture('models/maps/TorchUV.png');
			
			var material = new THREE.MeshPhongMaterial({color:new THREE.Color(0x00ff00), shininess:0});
			//geometry.scale(1/10,1/10,1/10);
			var mesh = new THREE.Mesh( geometry, material );		
			arrow20.add(mesh);
		}
	);
	
	scene.add(arrow20);
	arrow20.position.set(42,1.05,29);
	arrow20.rotation.y+= 90 * Math.PI / 180;
	
	
	arrow21 = new THREE.Object3D();
	
	loader.load(
		// Path dell'oggetto da caricare in formato json
		'models/sign.json',
		// Funzione da richiamare quando l'oggetto è caricato
		function ( geometry) {
			//var texture = THREE.ImageUtils.loadTexture('models/maps/TorchUV.png');
			
			var material = new THREE.MeshPhongMaterial({color:new THREE.Color(0x66ff33), shininess:0});
			//geometry.scale(1/10,1/10,1/10);
			var mesh = new THREE.Mesh( geometry, material );		
			arrow21.add(mesh);
		}
	);
	
	scene.add(arrow21);
	arrow21.position.set(44,1.05,27);
	arrow21.rotation.y-= 180 * Math.PI / 180;
	
	
	arrow22 = new THREE.Object3D();
	
	loader.load(
		// Path dell'oggetto da caricare in formato json
		'models/sign.json',
		// Funzione da richiamare quando l'oggetto è caricato
		function ( geometry) {
			//var texture = THREE.ImageUtils.loadTexture('models/maps/TorchUV.png');
			
			var material = new THREE.MeshPhongMaterial({color:new THREE.Color(0xff6600), shininess:0});
			//geometry.scale(1/10,1/10,1/10);
			var mesh = new THREE.Mesh( geometry, material );		
			arrow22.add(mesh);
		}
	);
	
	scene.add(arrow22);
	arrow22.position.set(30,1.05,29);

	
	arrow23 = new THREE.Object3D();
	
	loader.load(
		// Path dell'oggetto da caricare in formato json
		'models/sign.json',
		// Funzione da richiamare quando l'oggetto è caricato
		function ( geometry) {
			//var texture = THREE.ImageUtils.loadTexture('models/maps/TorchUV.png');
			
			var material = new THREE.MeshPhongMaterial({color:new THREE.Color(0x00ff00), specular:new THREE.Color(0xff0000), shininess:100});
			//geometry.scale(1/10,1/10,1/10);
			var mesh = new THREE.Mesh( geometry, material );		
			arrow23.add(mesh);
		}
	);
	
	scene.add(arrow23);
	arrow23.position.set(32,1.05,31);
	arrow23.rotation.y+= 90 * Math.PI / 180;
	
	
	arrow24 = new THREE.Object3D();
	
	loader.load(
		// Path dell'oggetto da caricare in formato json
		'models/sign.json',
		// Funzione da richiamare quando l'oggetto è caricato
		function ( geometry) {
			//var texture = THREE.ImageUtils.loadTexture('models/maps/TorchUV.png');
			
			var material = new THREE.MeshPhongMaterial({color:new THREE.Color(0xffff00), shininess:0});
			//geometry.scale(1/10,1/10,1/10);
			var mesh = new THREE.Mesh( geometry, material );		
			arrow24.add(mesh);
		}
	);
	
	scene.add(arrow24);
	arrow24.position.set(30,1.05,39);
	//arrow24.rotation.y-= 180 * Math.PI / 180;
	
	arrow25 = new THREE.Object3D();
	
	loader.load(
		// Path dell'oggetto da caricare in formato json
		'models/sign.json',
		// Funzione da richiamare quando l'oggetto è caricato
		function ( geometry) {
			//var texture = THREE.ImageUtils.loadTexture('models/maps/TorchUV.png');
			
			var material = new THREE.MeshPhongMaterial({color:new THREE.Color(0x00ff00), shininess:0});
			//geometry.scale(1/10,1/10,1/10);
			var mesh = new THREE.Mesh( geometry, material );		
			arrow25.add(mesh);
		}
	);
	
	scene.add(arrow25);
	arrow25.position.set(32,1.05,41);
	arrow25.rotation.y+= 90 * Math.PI / 180;
	
	arrow26 = new THREE.Object3D();
	
	loader.load(
		// Path dell'oggetto da caricare in formato json
		'models/sign.json',
		// Funzione da richiamare quando l'oggetto è caricato
		function ( geometry) {
			//var texture = THREE.ImageUtils.loadTexture('models/maps/TorchUV.png');
			
			var material = new THREE.MeshPhongMaterial({color:new THREE.Color(0xff0000), shininess:0});
			//geometry.scale(1/10,1/10,1/10);
			var mesh = new THREE.Mesh( geometry, material );		
			arrow26.add(mesh);
		}
	);
	
	scene.add(arrow26);
	arrow26.position.set(34,1.05,39);
	arrow26.rotation.y-=180 * Math.PI /180;

}