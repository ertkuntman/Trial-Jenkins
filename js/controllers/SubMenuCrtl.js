'use strict';


app.obj.angularApp
	.controller('SubMenuCrtl', function ($scope) {
			var HeighDiv = '80vh';
			var tempHeight = 0;
     //This will hide the DIV by default.
      $scope.IsVisible = false;

      // $('.info-button').tooltip();
      // $(document).ready(function(){
      // $('[data-toggle="tooltip"]').tooltip();   
      // });

      var chartHeight = null;
      
      //Show/Hide graph option
      $scope.ShowHide = function () {
          //If DIV is visible it will be hidden and vice versa.
          $scope.IsVisible = $scope.IsVisible ? false : true;
      }

      //Change chart style option
      $scope.TableChartSwitch = function (obj) {
          var actualObj = obj.currentTarget;
          var panel = actualObj.parentNode.parentNode;

          if(angular.element(panel).hasClass('is-fullscreen')){
              // Get Current Height (Maximized)
              chartHeight = angular.element(panel).find('.qvobject').height();

              // SWITCH FLAG
              $scope.tablechartswitcher = !$scope.tablechartswitcher;

              // Get new chart
              var secondChart = panel.getElementsByTagName("get-object");

              // Set maximized height to current chart
              // TODO: Improve without timeout
              setTimeout(function(){
                  secondChart = secondChart[secondChart.length -1 ];
                  secondChart = secondChart.firstChild;
                  secondChart.style.height = chartHeight + 'px';
              }, 10);

          }else{
              // SWITCH FLAG
              $scope.tablechartswitcher = !$scope.tablechartswitcher;
          }
      }; 

      //Maximize graph
      $scope.FullScreen = function (obj) {

         	var actualObj = obj.currentTarget;
          
         	var panel = actualObj.parentNode.parentNode;
          

	      	angular.element(panel).toggleClass('is-fullscreen');
	      	angular.element(actualObj).toggleClass('is-fullscreen');

	      	if(angular.element(panel).hasClass('is-fullscreen')){
	      		tempHeight = angular.element(panel).find('.qvobject').height();
	      		angular.element(panel).find('.qvobject').height(HeighDiv);
	      		app.obj.qlik.resize(angular.element(panel).find('.qvobject').attr('id')); 

	      	}else{
	      		angular.element(panel).find('.qvobject').height(tempHeight);
	      		app.obj.qlik.resize();
	      	}
    
      }

      //Export graph data
       $scope.Download = function (obj) {
       	var actualObj = obj.currentTarget;
        var panel = actualObj.parentNode.parentNode.parentNode;
       	var idNum = angular.element(panel).find('.qvobject').attr('id');

        //console.log("JS: SubMenuCrtl --> Download id "+ idNum);

        app.obj.app.getObject(idNum).then(function(model) {
        	var table = app.obj.qlik.table(model);
        	table.exportData({download: true}); 
  		    app.obj.qlik.resize();
        });
        
      }


      $scope.GetBack = function() {
        history.back();
      }

	});