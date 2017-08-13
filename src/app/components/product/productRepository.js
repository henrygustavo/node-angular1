angular.module("applicationModule").factory("productRepository", function ($http, $q,GlobalInfo) {

    return {

        getAll: function () {
            var deferred = $q.defer();

            $http.get(GlobalInfo.apiUrl+"/products")
                .success(function (response) {

                    deferred.resolve(response);
                })
                .error(function (response) {

                    deferred.reject(response);
                });
            return deferred.promise;
        },

        get: function (id) {

            var deferred = $q.defer();

            $http.get(GlobalInfo.apiUrl+"/products/" + id)
                .success(function (response) {

                    deferred.resolve(response);
                })
                .error(function (response) {

                    deferred.reject(response);
                });

            return deferred.promise;
        },
        insert: function (model) {

            var deferred = $q.defer();

            $http.post(GlobalInfo.apiUrl+"/products/", model)
                .success(function (response) {

                    deferred.resolve(response);
                })
                .error(function (response) {

                    deferred.reject(response);
                });

            return deferred.promise;
        },
        update: function (model) {

            var deferred = $q.defer();

            $http.put(GlobalInfo.apiUrl+"/products/"+model._id, model)
                .success(function (response) {

                    deferred.resolve(response);
                })
                .error(function (response) {

                    deferred.reject(response);
                });

            return deferred.promise;
        },
        delete: function (id) {
            var deferred = $q.defer();
            $http.delete(GlobalInfo.apiUrl+"/products/", id)
                .success(function (response) {

                    deferred.resolve(response);
                })
                .error(function (response) {

                    deferred.reject(response);
                });

            return deferred.promise;
        }
    }
});