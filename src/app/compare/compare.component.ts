import { Component, OnInit } from '@angular/core';
import {CompareService} from "../services/compare.service";

@Component({
  selector: 'app-compare',
  templateUrl: './compare.component.html',
  styleUrls: ['./compare.component.scss']
})
export class CompareComponent implements OnInit {

  pokemons: Array<any>;
  winnerIndex: number;

  constructor(private _compareService: CompareService) {
    this.pokemons = _compareService.compareList;
    this.winnerIndex = null;
  }

  ngOnInit() {}

  public compare() {
    let results: Array<number> = [];
    for (let item of this.pokemons) {
      const skillsValue = Object.values(item.skills);
      const skillsSum = skillsValue.reduce((acc, val) => { return acc + val; });
      results.push(skillsSum);
    }
    this.winnerIndex = results.indexOf(Math.max.apply(Math, results));
  }

}
