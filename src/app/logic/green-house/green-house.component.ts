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

  // get greenhouse table
  // greenhoues = GREENHOUSE;
  greenhouses;

  constructor(private greenhouseService: GreenHouseService) {
   }

  ngOnInit(): void {
    this.greenhouses = this.greenhouseService.getGreenHouses();
  }

}
