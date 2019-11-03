import { Component, OnInit } from '@angular/core';
import {Owner} from '../shared/Owner';
import {OwnerService} from '../shared/owner.service';

@Component({
  selector: 'app-owner-list',
  templateUrl: './owner-list.component.html',
  styleUrls: ['./owner-list.component.css']
})
export class OwnerListComponent implements OnInit {
owners: Owner[];

  constructor(private ownerService: OwnerService) { }

  ngOnInit() {
    this.refresh();
  }
  refresh() {
    this.ownerService.getOwners().subscribe(listOfOwners => this.owners = listOfOwners);
  }

  delete(id: number) {
    this.ownerService.deleteOwner(id).subscribe(message => {console.log('Deleted owner' + message);
      this.refresh();
    });
  }
}
