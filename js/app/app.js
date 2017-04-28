angular.module('App', ['App.controllers', 'App.services', 'ui.router'])
    .run(function($rootScope, $state, $stateParams) {
        $rootScope.$state = $state;
        $rootScope.$stateParams = $stateParams;
        $rootScope.user={};
        $rootScope.events=[];
        $rootScope.checkIfAdminState=function(state){
          var s=state.current.name;
          if(s.includes("admin")){
            return "admin"
          }else if(s.includes("student")){
            return "student"
          }else if(s.includes("teacher")){
            return "teacher"
          }else if(s.includes("parent")){
            return "parent"
          }
          return "";
        }
    })
    .config(function($stateProvider, $urlRouterProvider) {
        $stateProvider
            .state('home', {
                url: '/',
                templateUrl: 'templates/home.html',
                controller: 'HomeCtrl'
            })
            .state('about', {
                url: '/about',
                templateUrl: 'templates/about.html',
                controller: 'HomeCtrl'
            })
            .state('gallery', {
                url: '/gallery',
                templateUrl: 'templates/gallery.html',
                controller: 'HomeCtrl'
            })
            .state('loginStudent', {
                url: '/login/student',
                templateUrl: 'templates/login/student.html',
                controller: 'LoginCtrl'
            })
            .state('loginAdmin', {
                url: '/login/admin',
                templateUrl: 'templates/login/admin.html',
                controller: 'LoginCtrl'
            })
            .state('loginTeacher', {
                url: '/login/teacher',
                templateUrl: 'templates/login/teacher.html',
                controller: 'LoginCtrl'
            })
            .state('loginParent', {
                url: '/login/parent',
                templateUrl: 'templates/login/parent.html',
                controller: 'LoginCtrl'
            })
            .state('admin', {
                url: '/admin',
                templateUrl: 'templates/admin/admin.html',
                controller: 'AdminCtrl'
            })
            .state('student', {
                url: '/student',
                templateUrl: 'templates/student/student.html',
                controller: 'StudentCtrl'
            })
            .state('teacher', {
                url: '/teacher',
                templateUrl: 'templates/teacher/teacher.html',
                controller: 'TeacherCtrl'
            })
            .state('parent', {
                url: '/parent',
                templateUrl: 'templates/parent/parent.html',
                controller: 'ParentCtrl'
            })
            .state('adminStudent', {
                url: '/admin/student',
                templateUrl: 'templates/admin/student/list.html',
                controller: 'AdminCtrl'
            })
            .state('adminDepartment', {
                url: '/admin/department',
                templateUrl: 'templates/admin/department/list.html',
                controller: 'AdminCtrl'
            })
            .state('adminTeacher', {
                url: '/admin/teacher',
                templateUrl: 'templates/admin/teacher/list.html',
                controller: 'AdminCtrl'
            })
            .state('adminInternship', {
                url: '/admin/internship',
                templateUrl: 'templates/admin/internship/list.html',
                controller: 'AdminCtrl'
            })
            .state('adminParent', {
                url: '/admin/parent',
                templateUrl: 'templates/admin/parent/list.html',
                controller: 'AdminCtrl'
            })
            .state('adminEvent', {
                url: '/admin/event',
                templateUrl: 'templates/admin/event/list.html',
                controller: 'AdminCtrl'
            })
            .state('adminClass', {
                url: '/admin/class',
                templateUrl: 'templates/admin/class/list.html',
                controller: 'AdminCtrl'
            })

        // if none of the above states are matched, use this as the fallback
        $urlRouterProvider.otherwise('/');
    });
