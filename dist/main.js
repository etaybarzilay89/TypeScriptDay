"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Company_1 = require("./Company");
var Ad_1 = require("./Ad");
var User_1 = require("./User");
var fs = require("fs");
var companies = [];
function createCompany(name) {
    var newCompany = new Company_1.Company(name);
    companies.push(newCompany);
    return newCompany;
}
var wix = createCompany("wix");
var msft = createCompany("msft");
var etay = new User_1.User("etay");
var moshe = new User_1.User("moshe");
var beerAd = new Ad_1.Ad("beer ad");
var fruitAd = new Ad_1.Ad("fruit ad");
var iphoneAd = new Ad_1.Ad("iphone ad");
etay.addAd(beerAd);
etay.addAd(fruitAd);
moshe.addAd(fruitAd);
moshe.addAd(iphoneAd);
fruitAd.view();
iphoneAd.view();
etay.assignCompany(msft);
etay.assignCompany(wix);
moshe.assignCompany(wix);
console.log("users of all companies");
fs.writeFileSync("./data/companies.json", JSON.stringify(companies), { flag: "a+" });
// companies.forEach(company => console.log(JSON.stringify(company.users))); 