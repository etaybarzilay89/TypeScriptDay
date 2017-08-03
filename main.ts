import {Company} from "./Company";
import {Ad} from "./Ad";
import {User} from "./User";
import * as _ from 'lodash';
import * as fs from 'fs';

let companies : Company[] = [];

function createCompany(name: string) : Company {
    let newCompany = new Company(name);
    companies.push(newCompany);
    return newCompany;
}

let wix : Company = createCompany("wix");
let msft : Company = createCompany("msft");
let etay : User = new User("etay");
let moshe : User = new User("moshe");
let beerAd : Ad = new Ad("beer ad");
let fruitAd : Ad = new Ad("fruit ad");
let iphoneAd : Ad = new Ad("iphone ad");


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
fs.writeFileSync("./data/companies.json", JSON.stringify(companies), {flag: "a+"});
// companies.forEach(company => console.log(JSON.stringify(company.users)));