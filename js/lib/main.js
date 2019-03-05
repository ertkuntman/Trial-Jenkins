
//console.log((Date.now() / 1000) + " " + "Init Main");

var prefix = window.location.pathname.substr( 0, window.location.pathname.toLowerCase().lastIndexOf( "/extensions" ) + 1 );
var extensionName = "Janssen.PIMS_Exercise";
var jsPrefix = '../../extensions/' + extensionName + '/js/';
var libPrefix = '../../extensions/' + extensionName + '/js/lib/';
var controllerPrefix = '../../extensions/' + extensionName + '/js/controllers/';
var directivesPrefix = '../../extensions/' + extensionName + '/js/directives/';
var servicesPrefix = '../../extensions/' + extensionName + '/js/services/';
var filterPrefix = '../../extensions/' + extensionName + '/js/filter/';
var viewsPrefix = '../../extensions/' + extensionName + '/views/';

var scriptsUrl = ( (window.location.protocol === "https:" ) ? "https://" : "http://" ) + window.location.hostname + ( window.location.port ? ":" +  window.location.port: "") + "/extensions/Janssen.PIMS_Exercise/";

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//Init all paths to JS and verndor frameworks/libraries
require.config({
  baseUrl: ((window.location.protocol === "https:") ? "https://" : "http://" ) + window.location.hostname + (window.location.port ? ":" + window.location.port : "") + prefix + "resources",

    /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    paths: {
        'domReady': 'https://cdnjs.cloudflare.com/ajax/libs/require-domReady/2.0.1/domReady',
        'bootstrap': 'https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min',
        'app': libPrefix + 'app',

        //Controllers

        'controller.INSProductEDS': controllerPrefix + 'INSProductEDS',
        'controller.INSRegionalSupply': controllerPrefix + 'INSRegionalSupply',
        'controller.INSRegionalPillar2': controllerPrefix + 'INSRegionalPillar2',
        'controller.INSLocalReport1': controllerPrefix + 'INSLocalReport1',
        'controller.ProductEDS': controllerPrefix + 'ProductEDS',
        'controller.SubMenuCrtl': controllerPrefix + 'SubMenuCrtl',

        //Directives
        'directive.getObject': directivesPrefix + 'getObject',

        //Services
        'service.api': servicesPrefix + 'api',
        'service.openApp': servicesPrefix + 'openApp',
        'service.Triggers': servicesPrefix + 'Triggers',
        'service.Variables': servicesPrefix + 'Variables',
        'service.utility': servicesPrefix + 'utilities',
        'filter.unique': filterPrefix + 'unique',
        
    }
});


define(['require', 'angular', 'app'], function (require, angular) 
{
  'use strict';
 

  function getQlikApp(openApp)
  {
    var d = $.Deferred();

      return openApp.openAppMethod().then(function(app){

          d.resolve();
      });

      return d.promise();
  }   
  

  app.obj.angularApp = angular.module('myApp', ['ngAnimate', 'ngRoute',]);
  app.obj.angularApp.config(function($routeProvider,$locationProvider) {
    $routeProvider


      .when('/INSProductEDS', {
          
          //We just load one app, is defined in each controller just in case the user press F5 directly in the html
          //Normally this will not be needed, is evaluated only once
        resolve:
        {
          argument1: function(openApp)
          {
            return getQlikApp(openApp);
          }
        },
          templateUrl: viewsPrefix+"INSProductEDS.html",
          controller: 'controller.INSProductEDS',
          activetab:'INSProductEDS'
      } )
      .when('/INSRegionalSupply', {
          
          //We just load one app, is defined in each controller just in case the user press F5 directly in the html
          //Normally this will not be needed, is evaluated only once
        resolve:
        {
          argument1: function(openApp)
          {
            return getQlikApp(openApp);
          }
        },
          templateUrl: viewsPrefix+"INSRegionalSupply.html",
          controller: 'controller.INSRegionalSupply',
          activetab:'INSRegionalSupply'
      } )

      .when('/INSRegionalPillar2', {
          
          //We just load one app, is defined in each controller just in case the user press F5 directly in the html
          //Normally this will not be needed, is evaluated only once
        resolve:
        {
          argument1: function(openApp)
          {
            return getQlikApp(openApp);
          }
        },
          templateUrl: viewsPrefix+"INSRegionalPillar2.html",
          controller: 'controller.INSRegionalPillar2',
          activetab:'INSRegionalPillar2'
      } )

      .when('/INSLocalReport1', {
          
          //We just load one app, is defined in each controller just in case the user press F5 directly in the html
          //Normally this will not be needed, is evaluated only once
        resolve:
        {
          argument1: function(openApp)
          {
            return getQlikApp(openApp);
          }
        },
          templateUrl: viewsPrefix+"INSLocalReport1.html",
          controller: 'controller.INSLocalReport1',
          activetab:'INSLocalReport1'
      } )

      .when('/ProductEDS', {
          
          //We just load one app, is defined in each controller just in case the user press F5 directly in the html
          //Normally this will not be needed, is evaluated only once
        resolve:
        {
          argument1: function(openApp)
          {
            return getQlikApp(openApp);
          }
        },
          templateUrl: viewsPrefix+"ProductEDS.html",
          controller: 'controller.ProductEDS',
          activetab:'ProductEDS'
      } )
      
      .otherwise({redirectTo: '/INSProductEDS'})
  })

    require([
      'domReady!', 
      'js/qlik',
      'angular',
      'controller.INSProductEDS',
      'controller.INSRegionalSupply',
      'controller.INSRegionalPillar2',
      'controller.INSLocalReport1',
      'controller.ProductEDS',
      'controller.SubMenuCrtl',
      'service.api',
      'service.openApp',
      'service.Variables',
      'service.utility',
      'service.Triggers',
      'filter.unique',
      'directive.getObject',
      'bootstrap',
    ], function (document, qlik) {
      app.obj.qlik = qlik;
    qlik.setOnError( function ( error ) {
      if (!angular.isUndefined(error) && error.code == 16) {
        location.reload();
      } else {
        //console.log("Error Main.js: " +error);
      }
    } );

        angular.bootstrap( document, ["myApp", "qlik-angular"] );

        app.boot();
    });
});



