function ParticleEngine(pCount, s, pos, emitter) {

	var particleSystem, particlesCount, pMaterial;
	var flameSpeed = 0;
	

	this.init = function() {
	
		//Crea le variabili delle particelle
		particlesCount = pCount;
		particlesGeometry = new THREE.BufferGeometry();
		
		//flag: indica se il partice system è stato creato
		loaded = false;

		//Shaders 
		
		
		uniforms = {
			texture: {type: 't', value : THREE.ImageUtils.loadTexture('textures/fire.png')},
			emitterPosition: {type: 'v3', value : pos},
			rotation: {type: 'f', value:0.4}
		};
		

		shaders = {
		   fragmentShader: 'shaders/fragmentShader.fs',
		   vertexShader: 'shaders/vertexShader.vs',
				  
		};
		
		// carico gli shader in maniera asincrona.
		// la funzione chiede i path dei file da caricare,
		// un callback da chiamare durante il caricamento, e un callback da chiamare alla fine del caricamento.
		loadShaders( 
			shaders, 
			// callback durante il caricamento  
			function(progress) {
				console.log(progress,'loaded');
			}, 
			// callback alla fine  
			function() {
				console.log('done loading shaders.');
				parameters = { 
					fragmentShader: shaders.fragmentShader, 
					vertexShader: shaders.vertexShader, 
					uniforms: uniforms,

					
					/*Disabilito la scrittura sullo z - buffer, 
					  in modo che le particelle possano essere renderizzate nell'ordine della coordinata z (prima quelle più profonde ), sovrapponendosi correttamente.
					  Se venisse abilitata la scrittura sullo z - buffer, le particelle meno profonde verrebbero renderizzate per prime, e poichè il renderer non sà ancora 
					  se vi sono particelle dietro, nella sovrapposizione verrebbero mostrati gli angoli della texture. 
					
					*/
					depthWrite : false, 
					blending: THREE.AdditiveBlending,
					transparent: true,
					opacity: 0.5
				};

			
				pMaterial = new THREE.RawShaderMaterial( parameters );

				//Una volta creato il materiale, creo il particle system 
				particleSystem = new THREE.Points(particlesGeometry, pMaterial);
				
				positions = new Float32Array(particlesCount*3);
				sizes = new Float32Array(particlesCount);

				
				//Ordina le particelle
				particleSystem.sortParticles = true;
				
				//Aggiungi alla torcia
				emitter.add(particleSystem);
				particleSystem.position.set(pos.x,pos.y,pos.z);
				
				
				//Crea le singole particelle e aggiunge attributi
				for (var p = 0; p < particlesCount; p++) {
				
				
					var partPos = new THREE.Vector3(Math.random()/30, 0.38, Math.random()/30);
				
					positions[3 * p + 0] = partPos.x;
					positions[3 * p + 1] = partPos.y;
					positions[3 * p + 2] = partPos.z;
								
					sizes[p] = s;
				}
				
				particlesGeometry.addAttribute('position', new THREE.BufferAttribute(positions, 3));
				particlesGeometry.addAttribute('size', new THREE.BufferAttribute(sizes, 1));
				
				loaded = true;
				
			}
		);
		
		
		
	
	}
	
	this.getSystem = function() {
		
		return particleSystem;
	}

	
	this.update = function() {
	
	
	  if (loaded && flameSpeed%4 == 0) {
		  
		  
		  
		  var counter = particlesCount - 1;
		  
		  positions = particlesGeometry.attributes.position.array;
		  
		  while (counter > 0) {

			// Posizione particella
			var partPos = new THREE.Vector3(positions[counter*3 + 0], 
							positions[counter*3 + 1], 
							positions[counter*3 + 2]
				);
			
			
			
			
			//Vettore velocità random

			
			velocity = new THREE.Vector3(0, Math.random(), 0); 

			
			
			//Se la particella supera un'altezza massima, riposiziona
			if (partPos.y > Math.random() + 10) {
			  partPos.y = 0.38;
			  partPos.x = Math.random()/30;
			  partPos.z = Math.random()/30;
			  //velocity.y = 0;
			}

			
			// Muovi particella verso l'alto
			
			partPos.add(velocity);
			
			particlesGeometry.getAttribute('position').setXYZ(counter,partPos.x, partPos.y + velocity.y, partPos.z);
			counter --;
		  }

		  //Segnala i cambiamenti
		  particlesGeometry.attributes.position.needsUpdate = true;
		  particlesGeometry.attributes.size.needsUpdate = true;
			
		}
		
		 flameSpeed ++;
	}



}