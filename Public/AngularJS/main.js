var app = angular.module('myapp', ['ngRoute'])
app.controller('myctrl', ($scope, $http, $sce) => {
  // Lấy dữ liệu trận đấu
  $scope.Listmatch = []
  $http.get('./Public/Data/datamatch.json').then(
    res => {
      $scope.Listmatch = res.data
    },

    function (res) {
      alert('Error Loading DataMatch')
    }
  )
  // Lấy dữ liệu link youtube
  $scope.Listlink = []
  $http.get('./Public/Data/datalinkyoutube.json').then(
    res => {
      $scope.Listlink = res.data
    },
    function (res) {
      alert('Error Loading DataLink')
    }
  )
  // Lấy dữ liệu link website bóng đá
  $scope.Listlinkweb = []
  $http.get('./Public/Data/datalinkweb.json').then(
    res => {
      $scope.Listlinkweb = res.data
    },
    function (res) {
      alert('Error Loading DataLinkWeb')
    }
  )
})

app.config(function ($routeProvider) {
  $routeProvider
    .when('/Link', {
      templateUrl: './Layout/Link.html'
    })
    .when('/Other', {
      templateUrl: './Layout/Other.html'
      // controller: 'LinkCtrl'
    })
    .when('/Live/:id', {
      templateUrl: './Layout/Live.html',
      controller: 'LiveCtrl'
    })
    .otherwise({
      templateUrl: './Layout/main.html'
    })
})
app.controller('LiveCtrl', function ($scope, $routeParams) {
  $scope.linkvideo = $scope.Listmatch[$routeParams.id].Link
})
app.filter('trusted', [
  '$sce',
  function ($sce) {
    return function (url) {
      return $sce.trustAsResourceUrl(url)
    }
  }
])
