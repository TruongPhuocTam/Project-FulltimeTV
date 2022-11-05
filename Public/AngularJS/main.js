var app = angular.module('myapp', [])
app.controller('myctrl', ($scope, $http) => {
  // Lấy dữ liệu trận đấu
  $scope.Listmatch = []
  $http.get("../Public/Data/datamatch.json").then(
    res => {
      $scope.Listmatch = res.data
      console.log($scope.Listmatch)
    },
    function (res) {
      alert('Error Loading DataMatch')
    }
  )
  // Lấy dữ liệu link youtube
  $scope.Listlink = []
  $http.get("../Public/Data/datalinkyoutube.json").then(
    res => {
      $scope.Listlink = res.data
      console.log($scope.Listlink)
    },
    function (res) {
      alert('Error Loading DataLink')
    }
  )
  // Lấy dữ liệu link website bóng đá
  $scope.Listlinkweb = []
  $http.get("../Public/Data/datalinkweb.json").then(
    res => {
      $scope.Listlinkweb = res.data
      console.log($scope.Listlinkweb)
    },
    function (res) {
      alert('Error Loading DataLinkWeb')
    }
  )
})
