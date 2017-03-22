import { Component, OnInit } from '@angular/core';
import { Person } from '../person';
import { PersonService } from '../person.service';
import { PersonDetailsComponent } from '../person-details/person-details.component';

@Component({
  selector: 'person-list',
  templateUrl: './person-list.component.html',
  styleUrls: ['./person-list.component.css'],
  providers: [PersonService]
})

export class PersonListComponent implements OnInit {

  people: Person[]
  selectedPerson: Person

  constructor(private personService: PersonService) { }

  ngOnInit() {
     this.personService
      .getPeople()
      .then((people: Person[]) => {
        this.people = people.map((person) => {
          return person;
        });
      });
  }

  private getIndexOfPerson = (personId: String) => {
    return this.people.findIndex((person) => {
      return person._id === personId;
    });
  }

  selectPerson(person: Person) {
    this.selectedPerson = person
  }

  createNewPerson() {
    var person: Person = {
      name: '',
      favoriteCity: ''
    };

    // By default, a newly-created person will have the selected state.
    this.selectPerson(person);
  }

  deletePerson = (personId: String) => {
    var idx = this.getIndexOfPerson(personId);
    if (idx !== -1) {
      this.people.splice(idx, 1);
      this.selectPerson(null);
    }
    return this.people;
  }

  addPerson = (person: Person) => {
    this.people.push(person);
    this.selectPerson(person);
    return this.people;
  }

  updatePerson = (person: Person) => {
    var idx = this.getIndexOfPerson(person._id);
    if (idx !== -1) {
      this.people[idx] = person;
      this.selectPerson(person);
    }
    return this.people;
  }
}
