angular.module('App.controllers', [])
    .controller('HomeCtrl', function($rootScope,$scope, $state,EventService) {
      var getAllEvents= function() {
          EventService.getAll().then(function successCallback(response) {
              data = response.data;
              $rootScope.events=data;
          }, function errorCallback(response) {
              $rootScope.events=[];
          })
      };
      getAllEvents();
    })
    .controller('LoginCtrl', function($rootScope,$scope, $state, LoginService) {
        $scope.credentials = {
            cin: '',
            password: ''
        };
        $scope.badCredentials=false;
        $scope.loginAdmin= function() {
            var cin=$scope.credentials.cin;
            var password=$scope.credentials.password;
            LoginService.loginAdmin(cin,password).then(function successCallback(response) {
                data = response.data;
                if(data.name){
                  $rootScope.user=data;
                  $scope.badCredentials=false;
                  $state.go("admin");
                }else{
                  $scope.badCredentials=true;
                }
                $scope.credentials.cin='';
                $scope.credentials.password='';
            }, function errorCallback(response) {
                $scope.badCredentials=true;
                $scope.credentials.cin='';
                $scope.credentials.password='';
            })
        };
        $scope.loginStudent= function() {
            var cin=$scope.credentials.cin;
            var password=$scope.credentials.password;
            LoginService.loginStudent(cin,password).then(function successCallback(response) {
                data = response.data;
                if(data.name){
                  $rootScope.user=data;
                  $scope.badCredentials=false;
                  $state.go("student");
                }else{
                  $scope.badCredentials=true;
                }
                $scope.credentials.cin='';
                $scope.credentials.password='';
            }, function errorCallback(response) {
                $scope.badCredentials=true;
                $scope.credentials.cin='';
                $scope.credentials.password='';
            })
        };
        $scope.loginParent= function() {
            var cin=$scope.credentials.cin;
            var password=$scope.credentials.password;
            LoginService.loginParent(cin,password).then(function successCallback(response) {
                data = response.data;
                if(data.name){
                  $rootScope.user=data;
                  $scope.badCredentials=false;
                  $state.go("parent");
                }else{
                  $scope.badCredentials=true;
                }
                $scope.credentials.cin='';
                $scope.credentials.password='';
            }, function errorCallback(response) {
                $scope.badCredentials=true;
                $scope.credentials.cin='';
                $scope.credentials.password='';
            })
        };
        $scope.loginTeacher= function() {
            var cin=$scope.credentials.cin;
            var password=$scope.credentials.password;
            LoginService.loginTeacher(cin,password).then(function successCallback(response) {
                data = response.data;
                if(data.name){
                  $rootScope.user=data;
                  $scope.badCredentials=false;
                  $state.go("teacher");
                }else{
                  $scope.badCredentials=true;
                }
                $scope.credentials.cin='';
                $scope.credentials.password='';
            }, function errorCallback(response) {
                $scope.badCredentials=true;
                $scope.credentials.cin='';
                $scope.credentials.password='';
            })
        };

    })
    .controller('AdminCtrl', function($scope, $state) {
      
    })
    .controller('StudentCtrl', function($scope, $state) {

    })
    .controller('TeacherCtrl', function($scope, $state) {

    })
    .controller('ParentCtrl', function($scope, $state) {

    });
