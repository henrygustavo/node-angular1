var applicationModule = angular.module("applicationModule", ["ui.router"]);

applicationModule.config(function ($urlRouterProvider, $stateProvider) {

    $urlRouterProvider.otherwise("/");

    $stateProvider
        .state("home", {
            url: "/",
            templateUrl: "app/components/home/homeView.html",
            controller: "homeController"

        })
        .state("productList", {
            url: "/product",
            templateUrl: "app/components/product/productListView.html",
            controller: "productListController"
            
        })
        .state("productEdit", {
            url: "/product/edit/:id",
            templateUrl: "app/components/product/productEditView.html",
            controller: "productEditController",
            resolve: {
                id: function ($stateParams) {
                    return $stateParams.id;
                }
            }
        })
         .state("productDetail", {
            url: "/product/detail/:id",
            templateUrl: "app/components/product/productDetailView.html",
            controller: "productDetailController",
            resolve: {
                id: function ($stateParams) {
                    return $stateParams.id;
                }
            }
        })
})
.constant("GlobalInfo",
    {
        apiUrl: "/api"
    });    
;