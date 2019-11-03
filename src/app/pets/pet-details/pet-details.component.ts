import { Component, OnInit } from '@angular/core';
import {IPet} from '../shared/ipet';
import {PetService} from '../shared/pet.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-pet-details',
  templateUrl: './pet-details.component.html',
  styleUrls: ['./pet-details.component.css']
})
export class PetDetailsComponent implements OnInit {
pet: IPet;

  constructor(private petService: PetService, private route: ActivatedRoute) { }

  ngOnInit() {
    const id = +this.route.snapshot.paramMap.get('id');
    this.petService.getPetById(id).subscribe(petFromRest => {this.pet = petFromRest;
    });
  }
}
