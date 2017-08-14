angular.module("applicationModule").controller("productEditController", function (id, $scope, $state, productRepository) {


    $scope.model = {};

    var getProduct = function (id) {

        productRepository.get(id).then(function (response) {

            $scope.model = response;

        }, function (error) {


        });

    };

    getProduct(id);


    $scope.save = function (model) {

        if (id != 0) {

            productRepository.update(model).then(function (response) {

                alert(response.message);
                $state.go("productList");

            }, function (error) {


            });

        } else {

            productRepository.insert(model).then(function (response) {

                alert(response.message);
                $state.go("productList");

            }, function (error) {


            });
        }
    }

});