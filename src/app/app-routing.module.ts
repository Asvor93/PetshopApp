import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { PetListComponent} from './pets/pet-list/pet-list.component';
import {WelcomeComponent} from './welcome/welcome/welcome.component';
import {PetDetailsComponent} from './pets/pet-details/pet-details.component';
import {PetAddComponent} from './pets/pet-add/pet-add.component';
import {PetUpdateComponent} from './pets/pet-update/pet-update.component';
import {OwnerListComponent} from './owners/owner-list/owner-list.component';
import {OwnerAddComponent} from './owners/owner-add/owner-add.component';
import {OwnerUpdateComponent} from './owners/owner-update/owner-update.component';
import {OwnerDetailsComponent} from './owners/owner-details/owner-details.component';

const routes: Routes = [
  {path: 'pets', component: PetListComponent},
  {path: 'pets-add', component: PetAddComponent},
  {path: 'pet-update/:id', component: PetUpdateComponent},
  {path: 'pets/:id', component: PetDetailsComponent},
  {path: '', component: WelcomeComponent},
  {path: 'owners', component: OwnerListComponent},
  {path: 'owner-add', component: OwnerAddComponent},
  {path: 'owner-update/:id', component: OwnerUpdateComponent},
  {path: 'owners/:id', component: OwnerDetailsComponent},
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
     RouterModule.forRoot(routes),
  ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
