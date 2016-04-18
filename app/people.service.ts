import {PersonModel} from './person.model';

export class PeopleService {
    peopleList:PersonModel[];
    
    get people() {
        return this.peopleList;
    }
    
    addPerson(fname:string, lname:string):PersonModel[] {
        this.peopleList.push(
            new PersonModel(fname, lname)
        );
        
        return this.peopleList;
    }
}