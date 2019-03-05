'use strict';

app.obj.angularApp
	.controller('controller.INSRegionalPillar2', function ($scope, $rootScope, $location, $injector, api, utility, $timeout) {
		var me = {};

		me.GenObject='';
		me.GenObjectqID=null;

		// $('#tablescroll').on('scroll', function () {
		// 		$('#headerscroll').scrollTop($(this).scrollTop());
		// 		$(this).scrollTop($('#headerscroll').scrollTop());
		// 	});

		me.init = function () {
			$rootScope.page = 1;
			$scope.pageName="INSRegionalPillar2";
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
