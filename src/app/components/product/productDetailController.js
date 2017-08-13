angular.module("applicationModule").controller("productDetailController", function (id, $scope, $state, productRepository) {


    $scope.model = {};

    var getProduct = function (id) {

        productRepository.get(id).then(function (response) {

            $scope.model = response;

        }, function (error) {


        });

    }

    getProduct(id);

});