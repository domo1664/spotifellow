import { Injectable } from '@angular/core';
import { Person } from './person';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class PersonService {
    private peopleUrl = '/people';

    constructor (private http: Http) {}

    // get("/people")
    getPeople(): Promise<Person[]> {
      return this.http.get(this.peopleUrl)
                 .toPromise()
                 .then(response => response.json() as Person[])
                 .catch(this.handleError);
    }

    // post("/people")
    createPerson(newPerson: Person): Promise<Person> {
      return this.http.post(this.peopleUrl, newPerson)
                 .toPromise()
                 .then(response => response.json() as Person)
                 .catch(this.handleError);
    }

    // get("/people/:id") endpoint not used by Angular app

    // delete("/people/:id")
    deletePerson(delPersonId: String): Promise<String> {
      return this.http.delete(this.peopleUrl + '/' + delPersonId)
                 .toPromise()
                 .then(response => response.json() as String)
                 .catch(this.handleError);
    }

    // put("/people/:id")
    updatePerson(putPerson: Person): Promise<Person> {
      var putUrl = this.peopleUrl + '/' + putPerson._id;
      return this.http.put(putUrl, putPerson)
                 .toPromise()
                 .then(response => response.json() as Person)
                 .catch(this.handleError);
    }

    private handleError (error: any) {
      let errMsg = (error.message) ? error.message :
      error.status ? `${error.status} - ${error.statusText}` : 'Server error';
      console.error(errMsg); // log to console instead
    }
}
