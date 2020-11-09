var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var availablity = /** @class */ (function () {
    function availablity(typeofpet) {
        this.typeofpet = typeofpet;
    }
    availablity.prototype.insert = function (typeofpet, petcolor, petcount) {
        this.typeofpet = typeofpet;
        this.petcolor = petcolor;
        this.petcount = petcount;
        return { 'Typeofpet': typeofpet, 'Colorofpet': petcolor, 'number': petcount };
    };
    return availablity;
}());
var Petlist = [];
var reqlist = [];
var request = /** @class */ (function (_super) {
    __extends(request, _super);
    function request(request) {
        return _super.call(this, request.pettype) || this;
    }
    request.prototype.insertreq = function (typeofpet, petcolor, petcount) {
        return { 'Typeofpet': typeofpet, 'Colorofpet': petcolor, 'number': petcount };
    };
    request.prototype.count = function () {
        var result = {};
        for (var i = 0; i < Petlist.length; i++) {
            if (Petlist[i].typeofpet == undefined) {
                result[Petlist[i].typeofpet] = 0;
            }
            result[Petlist[i].typeofpet]++;
        }
        return result;
    };
    return request;
}(availablity));
var req = new request({
    pettype: "dog",
    petcolor: 'yellow',
    petcount: 5
});
Petlist.push(req.insert('dog', 'yellow', 5), req.insert('cat', 'black', 6), req.insert('parrot', 'green', 2));
reqlist.push(req.insertreq('dog', 'yellow', 1), req.insertreq('cat', 'black', 2), req.insertreq('parrot', 'green', 4));
console.log(Petlist);
console.log(reqlist);
