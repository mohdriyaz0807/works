let vid = <HTMLVideoElement> document.getElementById('player')

class Television {
    index : number;
    data : Array < string >;

    constructor() {
        this.index = 0
        this.data = [
            "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
            "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
            "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
            "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4",
            "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/Sintel.mp4",
            "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/VolkswagenGTIReview.mp4",
            "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/WhatCarCanYouGetForAGrand.mp4"
        ]
    }

    play(): void {
        let item = <HTMLSourceElement> document.getElementById("source")
        item.src = this.data[this.index];
    }

    next(): void {
        if(this.index!=6){
        let item = <HTMLSourceElement> document.getElementById("source")
        item.src=""
        item.src = this.data[this.index += 1]
        vid.load()
        }else{
            alert('No more Videos')
        }
    }

    prev(): void {
        if(this.index!=0){
        let item = <HTMLSourceElement> document.getElementById("source")
        item.src=""
        item.src = this.data[this.index -= 1]
        }else{
            alert('This is the First video')
        }
    }
}

let tvObj = new Television;
tvObj.play()
function prev() {
    tvObj.prev()
}

function next() {
    tvObj.next()
}