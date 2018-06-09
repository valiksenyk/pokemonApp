import {Component, Input, OnInit} from '@angular/core';
import {MatSnackBar} from "@angular/material";
import {CompareService} from "../../services/compare.service";

interface IPokemon {
  name: string,
  image: string,
  id: number,
  skills: {
    speed: number,
    specialDefense: number,
    specialAttack: number,
    defense: number,
    hp: number,
    attack: number
  }
}

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  @Input() pokemon: IPokemon;
  @Input() compareMode: boolean;

  addedToCompare: boolean;

  constructor(public snackBar: MatSnackBar, private _compareService: CompareService) {}

  ngOnInit() {
    this.addedToCompare = this._compareService.isAdded(this.pokemon);
  }

  public compare() {
    this._compareService.add(this.pokemon)
      .subscribe(
        () => {
        this.addedToCompare = true;
              this.snackBar.open("Pokemon has been added to comparison", "", {
                duration: 2000,
              });
      },
        err => {
                this.snackBar.open("You can compare 2 card in same time", "", {
                  duration: 2000,
                });
        })
  }

  public delete() {
    this._compareService.delete(this.pokemon);
  }

}
