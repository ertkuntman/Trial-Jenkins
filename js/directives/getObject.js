';use strict';

/**
 * @ngdoc function
 * @name myApp.directive: getObject
 * @description
 * # getObject
 * Controller of the myApp
 */
app.obj.angularApp
	.directive('getObject', function($parse, $sce, $compile, $timeout) {
		var me = {
			def: {
				restrict: 'AE',
        		replace: true,
                terminal: true
			}
		};

		me.boot = function () {
			//Attributes
			me.def.scope = {
				qvid: '=',
				id: '=',
				classes: '=',
				//interaction: '=', it is not possible to use interaction and selection, we need to use noSelections to avoid making slections
				selection: '=',
			};

			me.def.link = function (scope, element, attrs) {
			
				scope.$watch('qvid',function(newValue,oldValue) {
					// var noInteraction = (_.isUndefined(scope.interaction) || scope.interaction) ? false : true;
					var noSelections = (_.isUndefined(scope.selection) || scope.selection) ? false : true;
					$timeout(function(){		

					if (element[0].innerHTML.length==0) {
						var html = '<div class="qvobject ' + scope.classes + '" id="' + scope.id + '" ></div>';
						element.html(html);
						// $timeout(function(){
							// app.obj.app.getObject(scope.id, newValue, {noInteraction: noInteraction}).then(function(model){
							app.obj.app.getObject(scope.id, newValue, {noSelections: noSelections}).then(function(model){
							
								app.obj.getObjectModel[model.id]={'Active':true,'Model':model};
							
								
							});
						// }, 500);
					} else {
						$( "#" + scope.id ).animate({
							opacity: 0,
						}, 50, function() {  //400
							var html = '<div class="qvobject ' + scope.classes + '" id="' + scope.id + '" ></div>';
							element.html(html);
							// app.obj.app.getObject(scope.id, newValue, {noInteraction: noInteraction}).then(function(model){
								app.obj.app.getObject(scope.id, newValue, {noSelections: noSelections}).then(function(model){
								
								app.obj.getObjectModel[model.id]={'Active':true,'Model':model};

								$( "#" + scope.id ).animate({opacity: 1}, 50); //400
							});

						});
					}

					}, 100);
				}); 

		
	
			};

			return me.def;
		};

		return me.boot();
	});