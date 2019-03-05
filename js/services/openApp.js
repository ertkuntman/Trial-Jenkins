
app.obj.angularApp.service('openApp', function($q, $rootScope, $timeout, Triggers){
  	


	var config = {
	host: window.location.hostname,
	port: window.location.port,
	isSecure: window.location.protocol === "https:",
	prefix: "/",

		};

	var AppToLoadName='';


	this.openAppMethod = function() {
		var d = $.Deferred();

		//Get Environment to dynamically change app name to use (either local or server)
		if (window.location.hostname==="localhost") {
		AppToLoadName = "PIMS_Exercise.qvf";
		}

		if (window.location.hostname==="devnavpc-qs.jnj.com"){
			AppToLoadName = "";
		}

		if(window.location.hostname==="qanavpc-qs.jnj.com"){
			AppToLoadName = "";
		}

	    if(window.location.hostname==="navpc-qs.jnj.com"){
			AppToLoadName="";
		}

		//If the app is already opened, we do not need to open it again
		if(angular.isObject(app.obj.app)) {
    			////console("JS: check App-->Is open? YES");
    			d.resolve(app.obj.app);
    	}

    	//If is the first time, then we open it
    	else {
    		////console("JS: check App-->Is open? NO");
	    	////console("JS: Open App-->Loading Sense APP");
			app.obj.app = app.obj.qlik.openApp(AppToLoadName, config);

			//Load selections Bar
			app.obj.app.getObject('CurrentSelections', 'CurrentSelections');
			//d.resolve(app.obj.app);
			 Triggers.applyTriggers().then(function(){
			 	d.resolve(app.obj.app);
			 })	;		 
		}

	return d.promise();
	}


	this.CloseAppMethod = function($AppName) {
		var d = $.Deferred();

    	if(angular.isObject($AppName)) {
    			$AppName.close();
    	}
    	
		d.resolve(app.obj.app);
	return d.promise();
	}

	
});

