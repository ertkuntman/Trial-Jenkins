';use strict';

/**
 * @ngdoc function
 * @name myApp.directive: getObject
 * @description
 * # getObject
 * Controller of the myApp
 */
 var globalobj;
app.obj.angularApp
	.directive('visualizationSetproperties', function($parse, $sce, $compile, $timeout) {
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
				interaction: '=',
			};

			me.def.link = function (scope, element, attrs) {
				scope.$watch('qvid',function(newValue,oldValue) {
					var noInteraction = (_.isUndefined(scope.interaction) || scope.interaction) ? false : true;
					if (element[0].innerHTML.length==0) {
						var html = '<div class= ' + scope.classes + '" id="' + scope.id + '" ></div>';
						element.html(html);
						$timeout(function(){
						app.obj.app.visualization.get(scope.id).then(function(vis){
							vis.setOptions({title:"Test Title"});
							vis.show(scope.id);
						}), 500}); 
						}
						else {
						$( "#" + scope.id ).animate({
							opacity: 0,
						}, 400, function() {
							var html = '<div class="' + scope.classes + '" id="' + scope.id + '" ></div>';
							element.html(html);
							app.obj.app.visualization.get(scope.id).then(function(vis){
								vis.setOptions({title:"Test Title"});
								vis.show(scope.id);});
								$( "#" + scope.id ).animate({opacity: 1}, 400);
							});

						};
					
				}); 
			};

			return me.def;
		};

		return me.boot();
	});