var app = angular.module('myapp', ['ngRoute'])
app.controller('myctrl', ($scope, $http, $sce) => {
  // Lấy dữ liệu trận đấu
  $scope.Listmatch = []
  $http.get('../Public/Data/datamatch.json').then(
    res => {
      $scope.Listmatch = res.data
    },

    function (res) {
      alert('Error Loading DataMatch')
    }
  )

  $scope.mess = function () {
    const message = confirm('Bạn chắc chắn muốn xóa nó chứ ?')
    if (message) {
      Redirect('../admin/index.html')
    }
  }
  
})
app.config(function ($routeProvider) {
  $routeProvider
    .when('/adddatamatch/:namepage', {
      templateUrl: '../LayoutAdmin/adddatamatch.html',
      controller: 'AddCtrl'
    })
    .when('/deletedatamatch/:namepage', {
      templateUrl: '../LayoutAdmin/Deldata.html',
      controller: 'DelCtrl'
    })
    .otherwise({
      templateUrl: '../LayoutAdmin/dashboard.html'
    })
})
app.controller('AddCtrl', function ($scope, $routeParams) {
  $scope.namepage = $routeParams.namepage
})
app.controller('DelCtrl', function ($scope, $routeParams) {
  $scope.namepage = $routeParams.namepage
})
