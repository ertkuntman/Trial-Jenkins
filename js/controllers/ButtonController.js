'use strict';


app.obj.angularApp
	.controller('ButtonController', function ($scope) {

      //Set Fields value
       $scope.SetFieldValue1 = function (obj) {

        //console.log("JS: ButtonController --> Set value Day5 ");
        // var app = app.obj.app;
        app.obj.app.field('%HIDE_DaysType_Selector').selectValues([1], false, false);
        
      }

       $scope.SetFieldValue2 = function (obj) {

        //console.log("JS: ButtonController --> Set value SOP ");
        // var app = app.obj.app;
        app.obj.app.field('%HIDE_DaysType_Selector').selectValues([2], false, false);
        
      }

       $scope.SetFieldValue3 = function (obj) {

        //console.log("JS: ButtonController --> Set value PVA ");
        // var app = app.obj.app;
        app.obj.app.field('%HIDE_DaysType_Selector').selectValues([3], false, false);
        
      }

       $scope.SetFieldValue4 = function (obj) {

        //console.log("JS: ButtonController --> Set value Earliest ");
        // var app = app.obj.app;
        app.obj.app.field('%HIDE_DaysType_Selector').selectValues([4], false, false);
        
      }

      $scope.SetVariable1 = function (obj) {

        //console.log("JS: ButtonController --> Set value Variable1 ");
        app.obj.app.variable.setContent('v.App.Nav.Date.DaysLeftAndPassed2','=1');

      }

      $scope.SetVariable2 = function (obj) {

        //console.log("JS: ButtonController --> Set value Variable2 ");
        app.obj.app.variable.setContent('v.App.Nav.Date.DaysLeftAndPassed2','=2');

      }

      $scope.SetVariable3 = function (obj) {

        //console.log("JS: ButtonController --> Set value Variable3 ");
        app.obj.app.variable.setContent('v.App.Nav.Date.DaysLeftAndPassed2','=3');

      }

      $scope.SetVariable4 = function (obj) {

        //console.log("JS: ButtonController --> Set value Variable4 ");
        app.obj.app.variable.setContent('v.App.Nav.Date.DaysLeftAndPassed2','=4');

      }

      $scope.SetVariable5 = function (obj) {

        //console.log("JS: ButtonController --> Set value Variable5 ");
        app.obj.app.variable.setContent('v.App.Nav.Date.DaysLeftAndPassed2','=5');

      }

      $scope.SetVariable6 = function (obj) {

        //console.log("JS: ButtonController --> Set value Variable6 ");
        app.obj.app.variable.setContent('v.App.Nav.Status','=1');

      }

      $scope.SetVariable7 = function (obj) {

        //console.log("JS: ButtonController --> Set value Variable7 ");
        app.obj.app.variable.setContent('v.App.Nav.Status','=3');

      }

	});