
app.obj.angularApp.service('Triggers', function($q, $rootScope,$timeout){

	var firstload=true;
	var me= {};

	this.applyTriggers = function(AppOpened) {

		var d = $.Deferred();

		if(firstload== true){
			
			//something
			//something

			firstload = false;
			d.resolve(AppOpened);
		};
				
		return d.promise();
	}

	// me.FilterValue = function(field,FieldValue){
 //        //something
 //     }

	// me.getTodayPeriod=function() {

	// 	var expression= '$(v.FilterPeriod)';

	//  	app.obj.app.createGenericObject( {
	// 			TodayPeriod: {
	//                qStringExpression: //something
	//            }
	//        }, function ( reply ) {
	//            	//something
	//            	//something

	//            	 	app.obj.app.destroySessionObject(reply.qInfo.qId);
	 
	// 	      });
	 	
	// };

});