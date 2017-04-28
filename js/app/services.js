angular.module('App.services', [])
    .factory('LoginService', function($http) {
        var login = {};
        login.loginAdmin = function(cin, password) {
            var url = 'http://localhost:18080/please.please-web/Admin/get/' + cin + '/' + password;
            return $http({
                url: url,
                method: 'GET'
            });
        };
        login.loginStudent = function(cin, password) {
            var url = 'http://localhost:18080/please.please-web/Student/get/' + cin + '/' + password;
            return $http({
                url: url,
                method: 'GET'
            });
        };
        login.loginTeacher = function(cin, password) {
            var url = 'http://localhost:18080/please.please-web/Teacher/get/' + cin + '/' + password;
            return $http({
                url: url,
                method: 'GET'
            });
        };
        login.loginParent = function(cin, password) {
            var url = 'http://localhost:18080/please.please-web/Parent/get/' + cin + '/' + password;
            return $http({
                url: url,
                method: 'GET'
            });
        };
        return login;
    })
    .factory('EventService', function($http) {
        var event = {};
        event.getAll = function() {
            var url = 'http://localhost:18080/please.please-web/Event';
            return $http({
                url: url,
                method: 'GET'
            });
        };
        event.getById = function(id) {
            var url = 'http://localhost:18080/please.please-web/Event/' + id;
            return $http({
                url: url,
                method: 'GET'
            });
        };
        event.create = function(e) {
            var url = 'http://localhost:18080/please.please-web/Event';
            return $http({
                url: url,
                method: 'POST',
                data: e
            });
        };
        event.update = function(e) {
            var url = 'http://localhost:18080/please.please-web/Event/' + e.EventId;
            return $http({
                url: url,
                method: 'PUT',
                data: e,
            });
        };
        event.delete = function(id) {
            var url = 'http://localhost:18080/please.please-web/Event/' + id;
            return $http({
                url: url,
                method: 'DELETE',
            });
        };
        return event;
    })
    .factory('AbsenceService', function($http) {
        var absence = {};
        absence.getAll = function() {
            var url = 'http://localhost:18080/please.please-web/Absence';
            return $http({
                url: url,
                method: 'GET'
            });
        };
        absence.getByStudentId = function(id) {
            var url = 'http://localhost:18080/please.please-web/Absence/ynyhz/' + id;
            return $http({
                url: url,
                method: 'GET'
            });
        };
        absence.create = function(a) {
            var url = 'http://localhost:18080/please.please-web/Absence';
            return $http({
                url: url,
                method: 'POST',
                data: a
            });
        };
        return absence;
    })
    .factory('InternshipService', function($http) {
        var it = {};
        it.getAll = function() {
            var url = 'http://localhost:18080/please.please-web/IntershipOffer';
            return $http({
                url: url,
                method: 'GET'
            });
        };
        it.create = function(i) {
            var url = 'http://localhost:18080/please.please-web/IntershipOffer';
            return $http({
                url: url,
                method: 'POST',
                data: i
            });
        };
        it.update = function(i) {
            var url = 'http://localhost:18080/please.please-web/IntershipOffer/' + i.IntershipOfferId;
            return $http({
                url: url,
                method: 'PUT',
                data: i,
            });
        };
        it.delete = function(id) {
            var url = 'http://localhost:18080/please.please-web/IntershipOffer/' + id;
            return $http({
                url: url,
                method: 'DELETE',
            });
        };
        return it;
    })
    .factory('DepartmentService', function($http) {
        var department = {};
        department.getAll = function() {
            var url = 'http://localhost:18080/please.please-web/Department ';
            return $http({
                url: url,
                method: 'GET'
            });
        };
        department.create = function(d) {
            var url = 'http://localhost:18080/please.please-web/Department ';
            return $http({
                url: url,
                method: 'POST',
                data: d
            });
        };
        department.update = function(d) {
            var url = 'http://localhost:18080/please.please-web/Department /' + d.departmentId;
            return $http({
                url: url,
                method: 'PUT',
                data: d,
            });
        };
        department.delete = function(id) {
            var url = 'http://localhost:18080/please.please-web/Department /' + id;
            return $http({
                url: url,
                method: 'DELETE',
            });
        };
        return department;
    })
    .factory('ClassesService', function($http) {
        var cl = {};
        cl.getAll = function() {
            var url = 'http://localhost:18080/please.please-web/Classe ';
            return $http({
                url: url,
                method: 'GET'
            });
        };
        cl.create = function(c) {
            var url = 'http://localhost:18080/please.please-web/Classe ';
            return $http({
                url: url,
                method: 'POST',
                data: c
            });
        };
        cl.update = function(c) {
            var url = 'http://localhost:18080/please.please-web/Classe /' + c.ClasseId;
            return $http({
                url: url,
                method: 'PUT',
                data: c,
            });
        };
        cl.delete = function(id) {
            var url = 'http://localhost:18080/please.please-web/Classe /' + id;
            return $http({
                url: url,
                method: 'DELETE',
            });
        };
        return cl;
    })
    .factory('MarksService', function($http) {
        var mark = {};
        mark.getAll = function() {
            var url = 'http://localhost:18080/please.please-web/Marks';
            return $http({
                url: url,
                method: 'GET'
            });
        };
        mark.getStudentMoy = function(id) {
            var url = 'http://localhost:18080/please.please-web/Marks/M/ +id';
            return $http({
                url: url,
                method: 'GET'
            });
        };
        mark.create = function(m) {
            var url = 'http://localhost:18080/please.please-web/Marks ';
            return $http({
                url: url,
                method: 'POST',
                data: m
            });
        };
        return mark;
    })
    .factory('StudentService', function($http) {
        var student = {};
        student.getAll = function() {
            var url = 'http://localhost:18080/please.please-web/Student ';
            return $http({
                url: url,
                method: 'GET'
            });
        };
        student.create = function(s) {
            var url = 'http://localhost:18080/please.please-web/Student ';
            return $http({
                url: url,
                method: 'POST',
                data: s
            });
        };
        student.update = function(s) {
            var url = 'http://localhost:18080/please.please-web/Student /' + s.StudentId;
            return $http({
                url: url,
                method: 'PUT',
                data: s,
            });
        };
        student.delete = function(id) {
            var url = 'http://localhost:18080/please.please-web/Student /' + id;
            return $http({
                url: url,
                method: 'DELETE',
            });
        };
        return student;
    })
    .factory('ParentService', function($http) {
        var parent = {};
        parent.getAll = function() {
            var url = 'http://localhost:18080/please.please-web/Parent';
            return $http({
                url: url,
                method: 'GET'
            });
        };
        parent.create = function(p) {
            var url = 'http://localhost:18080/please.please-web/Parent ';
            return $http({
                url: url,
                method: 'POST',
                data: p
            });
        };
        parent.update = function(p) {
            var url = 'http://localhost:18080/please.please-web/Parent /' + p.ParentId;
            return $http({
                url: url,
                method: 'PUT',
                data: p,
            });
        };
        parent.delete = function(id) {
            var url = 'http://localhost:18080/please.please-web/Parent /' + id;
            return $http({
                url: url,
                method: 'DELETE',
            });
        };
        return parent;
    })
    .factory('TeacherService', function($http) {
        var teacher = {};
        teacher.getAll = function() {
            var url = 'http://localhost:18080/please.please-web/Teacher';
            return $http({
                url: url,
                method: 'GET'
            });
        };
        teacher.create = function(t) {
            var url = 'http://localhost:18080/please.please-web/Teacher ';
            return $http({
                url: url,
                method: 'POST',
                data: t
            });
        };
        teacher.update = function(t) {
            var url = 'http://localhost:18080/please.please-web/Teacher /' + t.TeacherId;
            return $http({
                url: url,
                method: 'PUT',
                data: t,
            });
        };
        teacher.delete = function(id) {
            var url = 'http://localhost:18080/please.please-web/Teacher /' + id;
            return $http({
                url: url,
                method: 'DELETE',
            });
        };
        return teacher;
    });
