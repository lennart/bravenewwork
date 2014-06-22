'use strict';

app
    .factory('Places', function(StoryBoard, $log) {
        var slides = StoryBoard()
        return {
            idToSlideIndex: function idToSlideIndex(id) {
                var match = slides.filter(function(x) {
                    return x.id == id
                })

                return match[0] ? slides.indexOf(match[0]) : 0
            },
            indexToSlideId: function indexToSlideId(index) {
                var slide

                return (slide = slides[index]) ? slide.id : null
            },
            slides: slides
        }
    })
