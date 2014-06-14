'use strict';

app
    .controller('PlaceCtrl', function($scope, $log, $element, $document) {
        var links = $element;
        $log.info('media content links', links[0], $element);
        if (!$scope.slide.url) {
            $log.info('registering click handler for scrolling', $scope.slide.id);
            links.click(function(e) {
                $log.info('smooth scroll');
                var id = "#" + this.href.split("#").pop();
                var parents = $element.parents()

                var content = parents.find(id)

                $document.scrollToElement(content, 10, 500);

                e.preventDefault();
            })
        }
    })
