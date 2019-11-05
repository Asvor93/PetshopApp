import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { PetComponent } from './pets/pet/pet.component';
import { PetListComponent } from './pets/pet-list/pet-list.component';
import { OwnerComponent } from './owners/owner/owner.component';
import { OwnerListComponent } from './owners/owner-list/owner-list.component';
import { AppRoutingModule } from './app-routing.module';
import { NavbarComponent } from './shared/navbar/navbar.component';
import {RouterModule, Routes} from '@angular/router';
import { WelcomeComponent } from './welcome/welcome/welcome.component';
import { PetDetailsComponent } from './pets/pet-details/pet-details.component';
import { PetAddComponent } from './pets/pet-add/pet-add.component';
import {ReactiveFormsModule} from '@angular/forms';
import { PetUpdateComponent } from './pets/pet-update/pet-update.component';
import { OwnerAddComponent } from './owners/owner-add/owner-add.component';
import { OwnerUpdateComponent } from './owners/owner-update/owner-update.component';
import { OwnerDetailsComponent } from './owners/owner-details/owner-details.component';
import {HttpClientModule} from '@angular/common/http';
import { LoginComponent } from './shared/login/login/login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  MatButtonModule,
  MatCardModule,
  MatFormFieldModule,
  MatInputModule,
  MatListModule,
  MatProgressSpinnerModule
} from '@angular/material';
import {AuthenticationService} from './shared/services/authentication.service';
import {AuthGuard} from './authGuard';

@NgModule({
  declarations: [
    AppComponent,
    PetComponent,
    PetListComponent,
    OwnerComponent,
    OwnerListComponent,
    NavbarComponent,
    WelcomeComponent,
    PetDetailsComponent,
    PetAddComponent,
    PetUpdateComponent,
    OwnerAddComponent,
    OwnerUpdateComponent,
    OwnerDetailsComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatListModule,
    MatProgressSpinnerModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule
  ],
  exports: [
    RouterModule
  ],
  providers: [AuthenticationService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
