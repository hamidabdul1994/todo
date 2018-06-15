var app = angular.module("myApp",["ui.router","ui.bootstrap","ngMap"]);

app.config(function ($stateProvider,$urlRouterProvider) {
  var loginState = {
     name: 'login',
     url: '/login',
     templateUrl: 'view/login.html'
   }

   var homeState = {
     name: 'home',
     url: '/home',
     templateUrl: 'view/home.html'
   }

   $stateProvider.state(loginState);
   $stateProvider.state(homeState);
   $urlRouterProvider.otherwise("/login");
})
