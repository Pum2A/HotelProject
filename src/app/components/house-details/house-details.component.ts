import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HousesService } from 'src/app/services/house.service';

@Component({
  selector: 'app-house-details',
  templateUrl: './house-details.component.html',
  styleUrls: ['./house-details.component.scss']
})
export class HouseDetailsComponent implements OnInit {
  houseNumber!: number;
  houseInfo: any;

  constructor(private route: ActivatedRoute, private houseService: HousesService) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.houseNumber = +params.get('houseNumber')!;
      const houseInfoObservable = this.houseService.getHouseInfo(this.houseNumber);
      if (houseInfoObservable) {
        houseInfoObservable.subscribe(
          (response: any) => {
            this.houseInfo = response;
          },
          (error: any) => {
            console.log('Błąd pobierania informacji o domku', error);
          }
        );
      }
    });
  }
}




