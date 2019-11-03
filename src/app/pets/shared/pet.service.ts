import { Injectable } from '@angular/core';
import {IPet} from './ipet';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PetService {
  apiUrl = 'https://peetshopar.azurewebsites.net/api/pets';
  constructor(private http: HttpClient) {}

  getPets(): Observable<IPet[]> {
   return this.http.get<IPet[]>(this.apiUrl);
  }
  addPet(pet: IPet): Observable<IPet> {
    return this.http.post<IPet>(this.apiUrl, pet);
  }
  getPetById(id: number): Observable<IPet> {
    return this.http.get<IPet>(this.apiUrl + '/' + id);
  }
  updatePet(pet: IPet): Observable<IPet> {
    return this.http.put<IPet>(this.apiUrl + '/' + pet.Id, pet);
  }
  deletePet(id: number): Observable<any> {
  return this.http.delete(this.apiUrl + '/' + id);
  }
}
