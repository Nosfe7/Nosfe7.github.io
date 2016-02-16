
var FPSControls = function(camera, speed) {

	var PLController = new THREE.PointerLockControls(camera);
	
	
	//Oggetto PointLock
	this.PLObject = PLController.getObject();
	
	var havePointerLock = 'pointerLockElement' in document ||
						  'mozPointerLockElement' in document ||
						  'webkitPointerLockElement' in document;

	var element = document.body;
	
	
	//callback dell'evento blocco puntatore
	pointerLockCallback = function(event){
		

						
			
		if (document.pointerLockElement === element ||
		  document.mozPointerLockElement === element ||
		  document.webkitPointerLockElement === element) {
		  // Pointer was just locked
		  // Enable the mousemove listener
		  blocker.style.display = 'none';
		  
		  PLController.enabled = true;
		  
		  
		} else {
		  // Pointer was just unlocked
		  // Disable the mousemove listener
		  
		  
		  blocker.style.display = '-webkit-box';
		  blocker.style.display = '-moz-box';
		  blocker.style.display = 'box';

		  instructions.style.display = '';
		  
		  PLController.enabled = false;

		  //unlockHook(element);
		}
	}
	
	
	//callback click dell'utente sullo schermo
	
	var clickCallBack = function ( event ) {
		if (havePointerLock) {
		
			document.addEventListener('pointerlockchange', pointerLockCallback, false);
			document.addEventListener('mozpointerlockchange', pointerLockCallback, false);
			document.addEventListener('webkitpointerlockchange', pointerLockCallback, false);
			
			//document.addEventListener( 'mousemove', onMouseMove, false );
			

			
			element.requestPointerLock = element.requestPointerLock ||
						 element.mozRequestPointerLock ||
						 element.webkitRequestPointerLock;
			
			
			// Ask the browser to lock the pointer
			element.requestPointerLock();
	
		}

	}
	
	instructions.addEventListener( 'click', clickCallBack ,false);
	
	
	
	
	//Controlli movimento
	
	var moveForward = false;
	var moveBackward = false;
	var moveLeft = false;
	var moveRight = false;
	
	var onKeyDown = function ( event ) {

		
		//event.preventDefault();

		switch ( event.keyCode ) {

			case 38: /*up*/
			case 87: /*W*/ moveForward = true; break;

			case 37: /*left*/
			case 65: /*A*/ moveLeft = true; break;

			case 40: /*down*/
			case 83: /*S*/ moveBackward = true; break;

			case 39: /*right*/
			case 68: /*D*/ moveRight = true; break;


		}

	};
	
	
	var onKeyUp = function ( event ) {


		switch ( event.keyCode ) {

			case 38: /*up*/
			case 87: /*W*/ moveForward = false; break;

			case 37: /*left*/
			case 65: /*A*/ moveLeft = false; break;

			case 40: /*down*/
			case 83: /*S*/ moveBackward = false; break;

			case 39: /*right*/
			case 68: /*D*/ moveRight = false; break;


		}

	};
	
	document.addEventListener( 'keydown', onKeyDown, false );
	document.addEventListener( 'keyup', onKeyUp, false );


	this.update = function() {


		if (moveForward) this.PLObject.translateZ(-speed);
		
		if (moveBackward) this.PLObject.translateZ(speed);
		
		if (moveLeft)  this.PLObject.translateX(-speed);
		
		if (moveRight) this.PLObject.translateX(speed);
	
			
			
	
	}

};

