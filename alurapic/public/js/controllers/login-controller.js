angular.module('alurapic')
    .controller('LoginController', function($scope, $http, $location) {

    $scope.usuario = {};

    $scope.autenticar = function() {
        console.log('Chegou aqui')
        var usuario = $scope.usuario;

        $http.post('/autenticar', {login: usuario.login, senha: usuario.senha})
            .then(function() {
                $location.path('/');
            }, function(erro) {
                $scope.usuario = {};
                $scope.mensagem = 'Login/Senha incorretos';
            }
        );
    };
});