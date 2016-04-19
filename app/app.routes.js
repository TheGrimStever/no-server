angular.module('chefDezApp')
  .config(function ($stateProvider, $urlRouterProvider) {

    $urlRouterProvider
      .otherwise('/home');

    $stateProvider

      .state('home', {
        url: '/home',
        controller: 'homeCtrl',
        templateUrl: 'app/components/home/homeView.html'
      })

      .state('about', {
        url: '/about',
        controller: 'aboutCtrl',
        templateUrl: 'app/components/about/aboutView.html'
      })


  })
