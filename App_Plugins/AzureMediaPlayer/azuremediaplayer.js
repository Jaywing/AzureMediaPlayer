angular.module("umbraco")
    .controller("Jaywing.AzureMediaPlayerController",
    function ($scope) {

        var engine = {
            url: '',
            update: null
        };

        if ($scope.model.value) {
            if ($scope.model.value !== "") {
                engine.url = $scope.model.value;
            } else
                engine.url = '';
        }

        engine.update = function () {
            $scope.model.value = engine.url;
        };

        $scope.engine = engine;
    });
