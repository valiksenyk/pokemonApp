import {Inject, Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import { APP_CONFIG, IAppConfig } from '../app.config';
import 'rxjs/add/operator/map'

interface IParams {
  limit: number,
  offset: number
}

@Injectable()
export class CommunicationService {

  pokemons: Array<any> = [];
  list: Array<any> = [];
  offset: number;

  constructor(private _http: HttpClient, @Inject(APP_CONFIG) private _config: IAppConfig) {}

  getList(params: IParams) {
    this.offset = params.offset;
    return this._http.get(`${this._config.apiEndpoint}pokemon/?offset=${params.offset}&limit${params.limit}`)
  }

  getPokemon(name: string) {
    return this._http.get(`${this._config.apiEndpoint}pokemon/${name}`)
  }
}
