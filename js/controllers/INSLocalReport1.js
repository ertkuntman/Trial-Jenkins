'use strict';

app.obj.angularApp
	.controller('controller.INSLocalReport1', function ($scope, $rootScope, $location, $injector, api, utility, $timeout) {
		var me = {};

		var measures = {};
		$scope.checked = {}

					me.GenObject='';

		me.init = function () {
			$rootScope.page = 1;
			$scope.pageName="INSLocalReport1";
			$rootScope.firstLoadCheck=false;
			
			$rootScope.Detectivecaret = 'caret';
			$rootScope.Predictivecaret = 'caret';
			$rootScope.Operationalcaret = 'caret caret-right';
			$scope.ready=false;	
		}
		
		me.boot = function () {

			me.init();
			me.events();
			me.ResizePage();

		};



		me.events = function () {

			$scope.ready=true;
			
			$rootScope.clearAll = function () {
				app.obj.app.clearAll();
			}
			$rootScope.goTo = function(page) {
				if (page===$scope.pageName) {
					//We are already in the page, no need to destroy objects
				}
				else {
					//Destroy objects and then navigate to the new page
					api.destroyObjects().then(function(){
						$location.url('/' + page);
					});
				}
			}
		}








		me.ResizePage= function(){
			$("body").css("width",'99%');

			$timeout(function(){
				$("body").css("width",'100%');
				app.obj.qlik.resize();
			}, 500);
		};

		me.boot();
	});
