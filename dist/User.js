"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var User = (function () {
    function User(userName) {
        this.userName = userName;
        this.id = ++User.idCounter;
        this.ads = [];
    }
    User.prototype.addAd = function (ad) {
        this.ads.push(ad);
    };
    User.prototype.assignCompany = function (company) {
        company.addUser(this);
    };
    User.idCounter = 0;
    return User;
}());
exports.User = User;
;
