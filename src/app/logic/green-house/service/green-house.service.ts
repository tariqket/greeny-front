import { Injectable } from '@angular/core';
import { GREENHOUSE } from 'src/app/logic/green-house/green-house.json';
import { GreenHouse } from 'src/app/logic/green-house/object/green-house';
import { Observable, of} from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class GreenHouseService {

  constructor() { }

  // listening updates
  getGreenHouses(): Observable<any>{
    return of(GREENHOUSE);
  }
}
