import { Component, OnInit } from '@angular/core';
import {OwnerService} from '../shared/owner.service';
import {ActivatedRoute} from '@angular/router';
import {Owner} from '../shared/Owner';

@Component({
  selector: 'app-owner-details',
  templateUrl: './owner-details.component.html',
  styleUrls: ['./owner-details.component.css']
})
export class OwnerDetailsComponent implements OnInit {
owner: Owner;
  constructor(private ownerService: OwnerService, private route: ActivatedRoute) { }

  ngOnInit() {
    const id = +this.route.snapshot.paramMap.get('id');
    this.ownerService.getOwnerById(id).subscribe(ownerFromRest => {
      this.owner = ownerFromRest;
    });
  }
}
