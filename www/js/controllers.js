angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope) {})

.controller('ChatsCtrl', function($scope, Chats) {
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  $scope.chats = Chats.all();
  $scope.remove = function(chat) {
    Chats.remove(chat);
  };
})

.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
  $scope.chat = Chats.get($stateParams.chatId);
})

.controller('homeCtrl', function($scope) {
  console.log("home")
 
})
.controller('AjustesCtrl', function($scope) {
 
})
.controller('quinielaCtrl', function($scope,$filter) {
 $scope.fecha = new Date();

 $scope.formulario = {
  corrientes:[
  {descripcion:"Quiniela",porcent:15,ref:"quiniela"},
  {descripcion:"Quini Express",porcent:7,ref:"qexpress"},
  {descripcion:"Pozo",porcent:10,ref:"pozo"},
  {descripcion:"Loto",porcent:10,ref:"loto"},
  {descripcion:"Quini-6",porcent:10,ref:"quini6"},
  {descripcion:"Brinco",porcent:10,ref:"brinco"},
  {descripcion:"Loto 5",porcent:10,ref:"loto5"},
  {descripcion:"Lotimax",porcent:10,ref:"lotimax"},
  ]
 }

 $scope.onoff = true;

 $scope.toggleShow = function(){
  $scope.onoff = !$scope.onoff
 }

 $scope.data = {}

 $scope.totales = function(){
    var total = 0;
        for (var i = 0; i < $scope.formulario.corrientes.length; i++) {
          var ref = ($scope.formulario.corrientes[i].ref)
          if ($scope.data[ref]) 
          {
          total += ($scope.data[ref])    
          }
        }
    return total;
  }

  $scope.ganancia = function(){
    var ganancia = 0;
        for (var i = 0; i < $scope.formulario.corrientes.length; i++) {
          var ref = ($scope.formulario.corrientes[i].ref)
          var porcent = ($scope.formulario.corrientes[i].porcent) / 100
          if ($scope.data[ref]) 
          {
          ganancia += ($scope.data[ref] * porcent)    
          }
        }
    return ganancia;
  }

  $scope.entrega = function(){
    var entrega = $scope.totales() - $scope.ganancia() - ($scope.data.premios?$scope.data.premios:0);
    return entrega;
  }

  $scope.alerta = function()
  {
    // var meses = [0,'Enero','Febrero','Marzo','Abril','Mayo','Junio','Julio','Agosto','Septiembre','Octubre','Noviembre','Diciembre']

    var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };

    var fecha = ($scope.fecha.toLocaleDateString("es-AR",options))
        alert("Guardado "+(fecha))
  }






})

.controller('juegosCtrl', function($scope) {

 
})
.controller('reportesCtrl', function($scope) {
 
});
// .controller('AccountCtrl', function($scope) {
//   $scope.settings = {
//     enableFriends: true
//   };
// });

