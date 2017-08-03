import {User} from "./User";
import {Ad} from "./Ad";

export class Company {
    private static idCounter : number = 0;
    private id : number;
    public users : User[];
    public name : string;

    constructor(name: string) {
        this.id = ++Company.idCounter;
        this.users = [];
        this.name = name;
    }

    addUser(user : User) : void {
        this.users.push(user);
    }

    getAds() : Ad[] {
        let ads : Ad[] = [];

        this.users.forEach(user => {
            user.ads.forEach(ad => {
                ads.push(ad);
            });
        });
        return ads;
    }

    getUsers() : User[] {
        return this.users;
    }
};