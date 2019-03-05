'use strict';

app.obj.angularApp
	.controller('controller.INSRegionalSupply', function ($scope, $rootScope, $location, $injector, api, utility, $timeout) {
		var me = {};

		var measures = {};
		$scope.checked = {}

					me.GenObject='';

		me.init = function () {
			$rootScope.page = 1;
			$scope.pageName="INSRegionalSupply";
			$rootScope.firstLoadCheck=false;
			
			$rootScope.Detectivecaret = 'caret';
			$rootScope.Predictivecaret = 'caret';
			$rootScope.Operationalcaret = 'caret caret-right';
			$scope.ready=false;	
		}
		
		me.boot = function () {

			me.init();
			me.events();
			

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

	

		me.boot();
	});
