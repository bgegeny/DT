export class Driver {

    readonly id: number;
    readonly code: string;
    readonly firstname: string;
    readonly lastname: string;
    readonly country: string;
    readonly team: string;
    public place: number;


    constructor(driver: { id: number ; code: string; firstname: string; lastname: string; country: string; team: string; }, place: number) {
        this.id = driver.id;
        this.code = driver.code;
        this.firstname = driver.firstname;
        this.lastname = driver.lastname;
        this.country = driver.country;
        this.team = driver.team;
        this.place = place;
    }
}
