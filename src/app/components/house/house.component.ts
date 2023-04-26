import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HousesService } from 'src/app/services/house.service';
import { House } from 'src/app/services/house.service';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-house',
  templateUrl: './house.component.html',
  styleUrls: ['./house.component.scss']
})
export class HouseComponent {
  house!: House;
houses: any;

  constructor(
    private housesService: HousesService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    if (id !== null) {
      this.housesService.getHouseById(id).subscribe((data: House) => {
        this.house = data;
      });
    }
  }
}
