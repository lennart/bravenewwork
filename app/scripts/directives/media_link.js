app
    .directive('mediaLink', function($log, $document, $filter) {
        return {
            restrict: "E",
            scope: {
                'url': '=',
                'index': '='
            },
            transclude: true,
            controller: function($scope) {},
            link: function(scope, element, attrs, ctrl) {
                var url
                var link = element.find('a.media-content-link')
                if (scope.url) {
                    url = scope.url
                }
                else {
                    url = '#media-content-' + scope.index;
                }
                link.attr('href', url)
            },
            templateUrl: "views/media-link.html"
        }
    })
