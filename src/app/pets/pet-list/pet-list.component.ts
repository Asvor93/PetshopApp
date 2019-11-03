import { Component, OnInit } from '@angular/core';
import {Pet} from '../shared/Pet';
import {PetService} from '../shared/pet.service';

@Component({
  selector: 'app-pet-list',
  templateUrl: './pet-list.component.html',
  styleUrls: ['./pet-list.component.css']
})
export class PetListComponent implements OnInit {
  pets: Pet[];

  constructor(private petService: PetService) {
  }

  ngOnInit() {
    this.refresh();
  }
  refresh() {
    this.petService.getPets().subscribe(listOfPets => this.pets = listOfPets);
  }
  delete(id: number) {
    this.petService.deletePet(id).subscribe(message => {console.log('Deleted pet: ' + message);
    this.refresh();
    });
  }
}
