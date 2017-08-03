export class Ad {
    private static idCounter : number = 0;
    private id : number;
    private viewCount : number;
    constructor(private adName : string) {
        this.id = ++Ad.idCounter;
        this.viewCount = 0;
    }

    view() : void {
        this.viewCount++;
    }
}