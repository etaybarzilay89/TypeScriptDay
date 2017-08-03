import {Ad} from "./Ad";
import {Company} from "./Company";

export class User {
    private static idCounter : number = 0;
    private id : number;
    public ads: Ad[];

    constructor(private userName : string) {
        this.id = ++User.idCounter;
        this.ads = [];
    }

    addAd(ad : Ad) : void {
        this.ads.push(ad);
    }

    assignCompany(company : Company) : void {
        company.addUser(this);
    }
};