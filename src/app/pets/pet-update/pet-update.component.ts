import { Component, OnInit } from '@angular/core';
import {PetService} from '../shared/pet.service';
import {ActivatedRoute, Router} from '@angular/router';
import {FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-pet-update',
  templateUrl: './pet-update.component.html',
  styleUrls: ['./pet-update.component.css']
})
export class PetUpdateComponent implements OnInit {
  id: number;
  petForm = new FormGroup({
    Name: new FormControl(''),
    PetType: new  FormControl(''),
    BirthDate: new FormControl(''),
    SoldDate: new FormControl(''),
    Price: new FormControl('')
  });
  constructor(private petService: PetService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.id = +this.route.snapshot.paramMap.get('id');
    const pet = this.petService.getPetById(this.id).subscribe(petFromRest => {
      this.petForm.patchValue({
        Name: petFromRest.name,
        PetType: petFromRest.petType,
        BirthDate: petFromRest.birthDate,
        SoldDate: petFromRest.soldDate,
        Price: petFromRest.price
      });
    });
  }

  save() {
    const pet = this.petForm.value;
    pet.id = this.id;
    this.petService.updatePet(pet).subscribe(petUpdate => {this.router.navigateByUrl('/pets');
    });
  }
}
