'use strict';

/**
 * Config for the router
 */
angular.module('app')
.config(['$locationProvider', function($locationProvider) {
$locationProvider.html5Mode(false);
$locationProvider.hashPrefix('');
}])
  .run(
    [          '$rootScope', '$state', '$stateParams',
      function ($rootScope,   $state,   $stateParams) {
          $rootScope.$state = $state;
          $rootScope.$stateParams = $stateParams;        
      }
    ]
  )
  .config(
    [          '$stateProvider', '$urlRouterProvider',
      function ($stateProvider,   $urlRouterProvider) {
          
          $urlRouterProvider
              .otherwise('/app/dashboard');
          $stateProvider
              .state('app', {                 
            	  abstract: true,
            	  url: '/app',
                  templateUrl: 'app/components/aside.html'
              })
              .state('app.dashboard',{
            	  url:'/dashboard',
            	  templateUrl: 'app/components/dashboard.html'
              })
              .state('login',{
            	  url:'/login',
            	  templateUrl: 'app/components/login.html'
              })
               .state('register',{
            	  url:'/register',
            	  templateUrl: 'app/components/register.html'
              })
               .state('app.blogger',{
            	  url:'/blogger',
            	  templateUrl: 'app/components/blogger.html'
              })
    }
    ]
  );