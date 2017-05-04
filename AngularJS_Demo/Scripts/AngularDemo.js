// Defining angularjs module
var app = angular.module('demoModule', []);

// Defining angularjs Controller and injecting ProductsService
app.controller('demoCtrl', function ($scope, $http, ProductsService) {

    $scope.productsData = null;
    // Fetching records from the factory created at the bottom of the script file
    ProductsService.GetAllRecords().then(function (d) {
        $scope.productsData = d.data; // Success
    }, function () {
        alert('Error Occured !!!'); // Failed
    });

    // Calculate Total of Price After Initialization
    $scope.total = function () {
        var total = 0;
        angular.forEach($scope.productsData, function (item) {
            total += item.Price;
        })
        return total;
    }

    $scope.Product = {
        Id: '',
        Name: '',
        Price: '',
        Category: ''
    };

    // Reset product details
    $scope.clear = function () {
        $scope.Product.Id = '';
        $scope.Product.Name = '';
        $scope.Product.Price = '';
        $scope.Product.Category = '';
    }

    //Add New Item
    $scope.save = function () {
        if ($scope.Product.Name != "" &&
       $scope.Product.Price != "" && $scope.Product.Category != "") {
            // Call Http request using $.ajax

            //$.ajax({
            //    type: 'POST',
            //    contentType: 'application/json; charset=utf-8',
            //    data: JSON.stringify($scope.Product),
            //    url: 'api/Product/PostProduct',
            //    success: function (data, status) {
            //        $scope.$apply(function () {
            //            $scope.productsData.push(data);
            //            alert("Product Added Successfully !!!");
            //            $scope.clear();
            //        });
            //    },
            //    error: function (status) { }
            //});

            // or you can call Http request using $http
            $http({
                method: 'POST',
                url: 'api/Product/PostProduct/',
                data: $scope.Product
            }).then(function successCallback(response) {
                // this callback will be called asynchronously
                // when the response is available
                $scope.productsData.push(response.data);
                $scope.clear();
                alert("Product Added Successfully !!!");
            }, function errorCallback(response) {
                // called asynchronously if an error occurs
                // or server returns response with an error status.
                alert("Error : " + response.data.ExceptionMessage);
            });
        }
        else {
            alert('Please Enter All the Values !!');
        }
    };

    // Edit product details
    $scope.edit = function (data) {
        $scope.Product = { Id: data.Id, Name: data.Name, Price: data.Price, Category: data.Category };
    }

    // Cancel product details
    $scope.cancel = function () {
        $scope.clear();
    }

    // Update product details
    $scope.update = function () {
        if ($scope.Product.Name != "" &&
       $scope.Product.Price != "" && $scope.Product.Category != "") {
            $http({
                method: 'PUT',
                url: 'api/Product/PutProduct/' + $scope.Product.Id,
                data: $scope.Product
            }).then(function successCallback(response) {
                $scope.productsData = response.data;
                $scope.clear();
                alert("Product Updated Successfully !!!");
            }, function errorCallback(response) {
                alert("Error : " + response.data.ExceptionMessage);
            });
        }
        else {
            alert('Please Enter All the Values !!');
        }
    };

    // Delete product details
    $scope.delete = function (index) {
        $http({
            method: 'DELETE',
            url: 'api/Product/DeleteProduct/' + $scope.productsData[index].Id,
        }).then(function successCallback(response) {
            $scope.productsData.splice(index, 1);
            alert("Product Deleted Successfully !!!");
        }, function errorCallback(response) {
            alert("Error : " + response.data.ExceptionMessage);
        });
    };

});

// Here I have created a factory which is a populer way to create and configure services. You may also create the factories in another script file which is best practice.
// You can also write above codes for POST,PUT,DELETE in this factory instead of controller, so that our controller will look clean and exhibits proper Separation of Concern.
app.factory('ProductsService', function ($http) {
    var fac = {};
    fac.GetAllRecords = function () {
        return $http.get('api/Product/GetAllProducts');
    }
    return fac;
});