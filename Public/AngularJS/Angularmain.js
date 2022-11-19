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
    .when('/Link/:namepage', {
      templateUrl: './Layout/Link.html',
      controller: 'LinkCtrl'
    })
    .when('/Other/:namepage', {
      templateUrl: './Layout/Other.html',
      controller: 'OtherCtrl'
    })
    .when('/LoginAdmin/:namepage', {
      templateUrl: './Layout/LoginAdmin.html',
      controller: 'LoginAdminCtrl'
    })
    .when('/Live/:id/:teamone/:teamtwo/:tournament', {
      templateUrl: './Layout/Live.html',
      controller: 'LiveCtrl'
    })

    .otherwise({
      templateUrl: './Layout/main.html'
    })
})
app.controller('LiveCtrl', function ($scope, $routeParams) {
  $scope.linkvideo = $scope.Listmatch[$routeParams.id].Link
  $scope.TeamOne = $routeParams.teamone
  $scope.TeamTwo = $routeParams.teamtwo
  $scope.Tournament = $routeParams.tournament
})
app.controller('LinkCtrl', function ($scope, $routeParams) {
  $scope.namepage = $routeParams.namepage
})
app.controller('OtherCtrl', function ($scope, $routeParams) {
  $scope.namepage = $routeParams.namepage
})
app.controller('LoginAdminCtrl', function ($scope, $routeParams) {
  $scope.namepage = $routeParams.namepage
})

// // // // //
app.filter('trusted', [
  '$sce',
  function ($sce) {
    return function (url) {
      return $sce.trustAsResourceUrl(url)
    }
  }
])

