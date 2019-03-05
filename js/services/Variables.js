// app.obj.angularApp.service('Variables', function($q, $rootScope){

// 	var AppToLoadName="";
// 	var config = {
// 		host: window.location.hostname,
// 		prefix: "/",
// 		port: window.location.port,
// 		isSecure: window.location.protocol === "https:"
// 	};

// 	this.getVariables = function(AppOpened) {
		
// 		var d = $.Deferred();
		
// 		if(app.obj.isFirstLoad == true){

// 		AppToLoadName = "Sos.qvf";
// 		app.obj.app = app.obj.qlik.openApp(AppToLoadName, config);

// 		//Get variable with Last Reload Date
// 		app.obj.app.variable.getContent('vReloadTime', function ( reply ) {
// 	    //console.log("Inside Variables");
// 	    app.obj.lastReload = reply.qContent.qString;   
// 	    //console.log("Last reload Date: " + app.obj.lastReload);
	    
// 		d.resolve();
// 	    app.obj.isFirstLoad = false;
// 	    });
		


// 	}else{
// 		d.resolve();
// 	}

// 		return d.promise();

// 	}

// });