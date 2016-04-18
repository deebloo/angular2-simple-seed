export class PersonModel {
    fname:string;
    lname:string;
    
    constructor(fname:string, lname:string) {
        this.fname = fname;
        this.lname = lname;
    }
    
    get fullName() {
        return `${this.fname} ${this.lname}`;
    }
}