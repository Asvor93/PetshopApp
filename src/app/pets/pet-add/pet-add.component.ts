import { Component, OnInit } from '@angular/core';
import {PetService} from '../shared/pet.service';
import {FormControl, FormGroup} from '@angular/forms';
import {Router} from '@angular/router';

@Component({
  selector: 'app-pet-add',
  templateUrl: './pet-add.component.html',
  styleUrls: ['./pet-add.component.css']
})
export class PetAddComponent implements OnInit {

  petForm = new FormGroup({
    Name: new FormControl(''),
    PetType: new  FormControl(''),
    BirthDate: new FormControl(''),
    SoldDate: new FormControl(''),
    Price: new FormControl('')
  });
  constructor(private petService: PetService, private router: Router) { }

  ngOnInit() {}

  save() {
    const pet = this.petForm.value;
    this.petService.addPet(pet).subscribe(petAdded => {this.router.navigateByUrl('/pets');
    });
  }
}
