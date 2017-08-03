"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Ad = (function () {
    function Ad(adName) {
        this.adName = adName;
        this.id = ++Ad.idCounter;
        this.viewCount = 0;
    }
    Ad.prototype.view = function () {
        this.viewCount++;
    };
    Ad.idCounter = 0;
    return Ad;
}());
exports.Ad = Ad;
