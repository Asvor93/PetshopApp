import { Component, OnInit } from '@angular/core';
import {PetService} from '../shared/pet.service';
import {FormControl, FormGroup} from '@angular/forms';
import {Router} from '@angular/router';
import {Pet} from '../shared/Pet';

@Component({
  selector: 'app-pet-add',
  templateUrl: './pet-add.component.html',
  styleUrls: ['./pet-add.component.css']
})
export class PetAddComponent implements OnInit {

  petForm = new FormGroup({
    name: new FormControl(''),
    petType: new  FormControl(''),
    birthDate: new FormControl(''),
    soldDate: new FormControl(''),
    price: new FormControl('')
  });
  constructor(private petService: PetService, private router: Router) { }

  ngOnInit() {}

  save() {
    const pet = this.petForm.value;
    this.petService.addPet(pet).subscribe(() => {
      this.router.navigateByUrl('/pets');
    });
  }
}
