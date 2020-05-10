import { Injectable } from '@angular/core';
import { GREENHOUSE } from 'src/app/logic/green-house/green-house.json';
import { GreenHouse } from 'src/app/logic/green-house/object/green-house';


@Injectable({
  providedIn: 'root'
})
export class GreenHouseService {

  constructor() { }

  getGreenHouses() {
    return GREENHOUSE;
  }
}
