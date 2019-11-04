import { Component, OnInit } from '@angular/core';
import {Pet} from '../../pets/shared/Pet';
import {TodoItemService} from '../../shared/services/petshop.service';
import {AuthenticationService} from '../../shared/services/authentication.service';
import {PetService} from '../../pets/shared/pet.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {
  pets: Pet[] = [];
  username: string;
  errormessage = '';

  constructor(private petService: PetService, private authService: AuthenticationService) { }

  ngOnInit() {
    // get users from secure api end point
    this.petService.getPets()
      .subscribe(
        items => {
          this.pets = items;
        },
        error => {
          this.errormessage = error.message;
        });
  }

}
