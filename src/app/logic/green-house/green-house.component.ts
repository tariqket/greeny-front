import { Component, OnInit } from '@angular/core';
import { GreenHouse } from './object/green-house';
import { GREENHOUSE } from './green-house.json';
import { GreenHouseService } from './service/green-house.service';



@Component({
  selector: 'app-green-house',
  templateUrl: './green-house.component.html',
  styleUrls: ['./green-house.component.css']
})
export class GreenHouseComponent implements OnInit {

  // for button: show/hide table
  // tslint:disable-next-line: no-inferrable-types
  habilitar: boolean = true;

  // init greenhouse table
  greenhouses;

  constructor(private greenhouseService: GreenHouseService) {
   }

  ngOnInit(): void {
    // subscribe on updates in greanhouse.json
    this.greenhouseService.getGreenHouses().subscribe(
      greenhouses => this.greenhouses = greenhouses
      );
  }

}
