angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    
  

      .state('tabs.online', {
    url: '/page2',
    views: {
      'tab4': {
        templateUrl: 'templates/online.html',
        controller: 'onlineCtrl'
      }
    }
  })

  .state('tabs.mSicasTocadas', {
    url: '/page3',
    views: {
      'tab2': {
        templateUrl: 'templates/mSicasTocadas.html',
        controller: 'mSicasTocadasCtrl'
      }
    }
  })

  .state('tabs.contato', {
    url: '/page4',
    views: {
      'tab3': {
        templateUrl: 'templates/contato.html',
        controller: 'contatoCtrl'
      }
    }
  })

  .state('tabs', {
    url: '/page1',
    templateUrl: 'templates/tabs.html',
    abstract:true
  })

$urlRouterProvider.otherwise('/page1/page2')

  

});