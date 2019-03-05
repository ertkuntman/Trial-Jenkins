'use strict';

app.obj.angularApp
	.controller('controller.ProductEDS', function ($scope, $rootScope, $location, $injector, api, utility, $timeout) {
		var me = {};

					me.GenObject='';

		me.init = function () {
			$rootScope.page = 2;
			$rootScope.firstLoadCheck=false;
			
			$rootScope.Detectivecaret = 'caret';
			$rootScope.Predictivecaret = 'caret';
			$rootScope.Operationalcaret = 'caret caret-right';
			$scope.ready=false;
			
		}
		
		me.boot = function () {

			//console.log("JS: MarketShare --> Init Controller");
			me.init();
			me.events();
			me.CreateGenObject ();
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

		me.CreateGenObject= function (){

			me.GenObject= app.obj.app.createGenericObject( {
			Info45 : {
				qStringExpression: "maxstring({<[%HIDE_Report_ID]={10} ,[%HIDE_Graph_ID]={45}>}Text)"
			},
			Info46 : {
				qStringExpression: "maxstring({<[%HIDE_Report_ID]={10} ,[%HIDE_Graph_ID]={46}>}Text)"
			},
			ReloadTime : {
				qStringExpression: "ReloadTime()"
			}
			}, function ( reply ) {

				$rootScope.Info45=reply.Info45;
				$rootScope.Info46=reply.Info46;
				document.getElementById("ReloadTime").innerHTML="Last Refresh: " + reply.ReloadTime;

				app.obj.app.destroySessionObject(reply.qInfo.qId);
			});
		};

		me.ResizePage= function(){
			$("body").css("width",'99%');

			$timeout(function(){
				$("body").css("width",'100%');
				app.obj.qlik.resize();
			}, 500);
		};

		me.boot();
	});
