(function () {
    var LunchCheck = angular.module('LunchCheck', []);
    LunchCheck.controller('LunchCheckController', LunchCheckController);
    LunchCheckController.$inject = ['$scope'];
    function LunchCheckController($scope) {
        $scope.lunch = "";
        $scope.message = "";
        $scope.alertStyle = "";


        $scope.checkLunch = function () {
            if ($scope.lunch === "") {
                $scope.message = "Please enter data first";
                $scope.alertStyle = "-danger";
            } else {
                $scope.alertStyle = "-success";
                var menu = $scope.lunch.split(',');
                if (menu.length <= 3) {
                    $scope.message = "Enjoy!";
                } else {
                    $scope.message = "Too much!";
                }
            }
        }
    }

})();