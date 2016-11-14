angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    
  

      .state('menu.noticias', {
    url: '/Noticias',
    views: {
      'side-menu21': {
        templateUrl: 'templates/noticias.html',
        controller: 'noticiasCtrl'
      }
    }
  })

  .state('menu.servicios', {
    url: '/Servicios',
    views: {
      'side-menu21': {
        templateUrl: 'templates/servicios.html',
        controller: 'serviciosCtrl'
      }
    }
  })

  .state('menu.informaciNDeOficina', {
    url: '/Informacion-de-oficina',
    views: {
      'side-menu21': {
        templateUrl: 'templates/informaciNDeOficina.html',
        controller: 'informaciNDeOficinaCtrl'
      }
    }
  })

  .state('informaciNDeOficina2', {
    url: '/InfoOficina',
    templateUrl: 'templates/informaciNDeOficina2.html',
    controller: 'informaciNDeOficina2Ctrl'
  })

  .state('menu', {
    url: '/side-menu21',
    templateUrl: 'templates/menu.html',
    controller: 'menuCtrl'
  })

  .state('menu.settings', {
    url: '/settings',
    views: {
      'side-menu21': {
        templateUrl: 'templates/settings.html',
        controller: 'settingsCtrl'
      }
    }
  })

  .state('menu.elZikaEnPuertoRico', {
    url: '/Zika',
    views: {
      'side-menu21': {
        templateUrl: 'templates/elZikaEnPuertoRico.html',
        controller: 'elZikaEnPuertoRicoCtrl'
      }
    }
  })

  .state('menu.elApagNDePuertoRico', {
    url: '/apagon',
    views: {
      'side-menu21': {
        templateUrl: 'templates/elApagNDePuertoRico.html',
        controller: 'elApagNDePuertoRicoCtrl'
      }
    }
  })

  .state('menu.register', {
    url: '/register',
    views: {
      'side-menu21': {
        templateUrl: 'templates/register.html',
        controller: 'registerCtrl'
      }
    }
  })

  .state('register2', {
    url: '/Registeralternate',
    templateUrl: 'templates/register2.html',
    controller: 'register2Ctrl'
  })

  .state('ingreseSuCDigo', {
    url: '/codigo',
    templateUrl: 'templates/ingreseSuCDigo.html',
    controller: 'ingreseSuCDigoCtrl'
  })

  .state('homePage', {
    url: '/homepage',
    templateUrl: 'templates/homePage.html',
    controller: 'homePageCtrl'
  })

  .state('login', {
    url: '/login',
    templateUrl: 'templates/login.html',
    controller: 'loginCtrl'
  })

$urlRouterProvider.otherwise('/homepage')

  

});