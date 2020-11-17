var vid = document.getElementById('player');
var Television = /** @class */ (function () {
    function Television() {
        this.index = 0;
        this.data = [
            "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
            "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
            "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
            "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4",
            "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/Sintel.mp4",
            "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/VolkswagenGTIReview.mp4",
            "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/WhatCarCanYouGetForAGrand.mp4"
        ];
    }
    Television.prototype.play = function () {
        var item = document.getElementById("source");
        item.src = this.data[this.index];
    };
    Television.prototype.next = function () {
        if (this.index != 6) {
            var item = document.getElementById("source");
            item.src = "";
            item.src = this.data[this.index += 1];
            vid.load();
        }
        else {
            alert('No more Videos');
        }
    };
    Television.prototype.prev = function () {
        if (this.index != 0) {
            var item = document.getElementById("source");
            item.src = "";
            item.src = this.data[this.index -= 1];
        }
        else {
            alert('This is the First video');
        }
    };
    return Television;
}());
var tvObj = new Television;
tvObj.play();
function prev() {
    tvObj.prev();
}
function next() {
    tvObj.next();
}
