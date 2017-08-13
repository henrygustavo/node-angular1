angular.module("applicationModule").controller("productListController", function ($scope, productRepository) {

    $scope.products = {};

    var getProducts = function () {


        productRepository.getAll().then(function (response) {

            $scope.products = response;

        }, function (error) {


        });

    };

    getProducts();

});