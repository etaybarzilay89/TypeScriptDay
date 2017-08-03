"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Company = (function () {
    function Company(name) {
        this.id = ++Company.idCounter;
        this.users = [];
        this.name = name;
    }
    Company.prototype.addUser = function (user) {
        this.users.push(user);
    };
    Company.prototype.getAds = function () {
        var ads = [];
        this.users.forEach(function (user) {
            user.ads.forEach(function (ad) {
                ads.push(ad);
            });
        });
        return ads;
    };
    Company.prototype.getUsers = function () {
        return this.users;
    };
    Company.idCounter = 0;
    return Company;
}());
exports.Company = Company;
;
