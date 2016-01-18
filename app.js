var app = angular.module('benhamApp', ['ngRoute']);

  app.config(function($routeProvider) {
    $routeProvider
      .when('/', {
       controller: 'mainController',       
       templateUrl: 'pages/home.html'
      })
      .when('/page1', {
        controller: 'page1Controller',       
        templateUrl: 'pages/page1.html'
      })
      .when('/page3', {
        controller: 'page3Controller',       
        templateUrl: 'pages/page3.html'
      })
      .otherwise({ redirectTo: '/' });
  });
  
app.factory('httpFactory', function () {
    var customerData = [
      { 
        agentName : "agentName",
        agentNumber : "agentNumber",
        firstName : "firstName",
        middleI : "middleI",  
        lastName : "lastName",
        phoneNumber : "phoneNumber",
        phoneExt : "phoneExt",  
        firstAccount : "firstAccount",
        secondAccount : "secondAccount",
        thirdAccount : "thirdAccount",
        additionalOwner : "additionalOwner"
      }
    ];
    var factory = {};
    factory.getCustomerData = function () {
      return customerData;
    };
    factory.postCustomer = function (customerData) {
      customerData.push(
      {
        agentName : customerData.agentName,
        agentNumber : customerData.agentNumber,
        firstName : customerData.firstName,
        middleI : customerData.middleI,  
        lastName : customerData.lastName,
        phoneNumber : customerData.phoneNumber,
        phoneExt : customerData.phoneExt,  
        firstAccount : customerData.firstAccount,
        secondAccount : customerData.secondAccount,
        thirdAccount : customerData.thirdAccount,
        additionalOwner : customerData.additionalOwner
      });
    };
    return factory;
});  
  
app
  .controller('bodyController', function($scope) {
    $scope.message = 'UserName';
  })
  .controller('mainController', function($scope) {
    $scope.message = 'Main';
  })
  .controller('page1Controller', function($scope, httpFactory) {
    $scope.message = 'Page 1';
    $scope.addCustomerData = function(){
      httpFactory.postCustomer($scope.customerData);
    };
        $scope.customerData = httpFactory.getCustomerData();
  })  
  .controller('page3Controller', function($scope, httpFactory) {
    $scope.message = 'Page 3'; 
    $scope.customerData=[];
    $scope.customerData = httpFactory.getCustomerData();
  });
