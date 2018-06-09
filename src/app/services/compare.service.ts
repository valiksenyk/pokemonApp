import {Injectable} from "@angular/core";
import {MatSnackBar} from "@angular/material";
import {Observable} from "rxjs/Observable";

@Injectable()
export class CompareService {

  compareList: Array<any> = [];

  constructor(public snackBar: MatSnackBar) {}

  public add(pokemon) {
    return new Observable((observer) => {

      if (this.compareList.length < 2) {
          this.compareList.push(pokemon);
          observer.next()
        } else {
          observer.error();
        }
    });
  }

  public isAdded(pokemon): boolean {
    return this.compareList.some(pokeItem => {
      return pokeItem.id === pokemon.id
    });
  }

  public delete(pokemon) {
    const elementPos = this.compareList.map((item) => {return item.id; }).indexOf(pokemon.id);
    this.compareList.splice(elementPos, 1);
  }
}
