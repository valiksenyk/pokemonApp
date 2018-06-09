import {Component, OnInit} from '@angular/core';
import {CommunicationService} from "../services/communication.service";
import {MatSnackBar} from "@angular/material";

interface IPokemon {
  name: string,
  image: string,
  id: number,
  skills: object
}

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  searchModel: string;
  pokemons: Array<any> = [];
  generalList: Array<any> = [];
  throttle = 300;
  scrollDistance = 1;
  scrollUpDistance = 2;
  private _limit = 20;
  private _offset = 0;

  constructor(private _communicationService: CommunicationService, public snackBar: MatSnackBar) {}

  ngOnInit() {
    this.pokemons = this._communicationService.pokemons;
    if (this._offset === this._communicationService.offset) {
      this.generalList = this._communicationService.list;
    } else {
      this.getList()
    }
  }

  public getList() {
    this._communicationService.getList({limit: this._limit, offset: this._offset})
      .subscribe(res => {
        this._createList(res);
      })
  }

  public searchPokemon(name?) {
    this._communicationService.getPokemon(name || this.searchModel.toLowerCase())
      .subscribe(res => {
        this._checkExistence(res);
      })
  }

  public addPokemon(name) {
    this.searchPokemon(name);
  }

  public loadMore() {
    this._offset += this._limit;
    this.getList();
  }

  private _checkExistence(res) {
    const isExist = this.pokemons.some(pokeItem => {
      return pokeItem.id === res.id
    });

    if (!isExist) {
      this._communicationService.pokemons.push(this._createPokemonObj(res));
    } else {
      this.snackBar.open("This pokemon already added", "", {
        duration: 2000,
      });
    }
  }

  private _createList(res) {
    for (const item of res.results) {
      this.generalList.push(item);
      this._communicationService.list.push(item);
    }
  }

  private _createPokemonObj(resObj): IPokemon {
    return {
      name: resObj.name,
      image: resObj.sprites.front_default,
      id: resObj.id,
      skills: {
        speed: resObj.stats[0].base_stat,
        specialDefense: resObj.stats[1].base_stat,
        specialAttack: resObj.stats[2].base_stat,
        defense: resObj.stats[3].base_stat,
        attack: resObj.stats[4].base_stat,
        hp: resObj.stats[5].base_stat
      }
    }
  }

}
