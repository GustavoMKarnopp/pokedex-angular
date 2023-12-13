import { Component, OnInit } from '@angular/core';
import { PokeApiService } from 'src/app/service/poke-api.service';

@Component({
  selector: 'poke-list',
  templateUrl: './poke-list.component.html',
  styleUrls: ['./poke-list.component.scss']
})
export class PokeListComponent implements OnInit{
  private setAllPokemons : any; //Variável privada que recebe a lista de pokemons
  public getAllPokemons : any; //Variável pública que irá receber o pokemons filtrado
  public apiError: boolean = false;

  constructor(
    private pokeApiService : PokeApiService
  ){

  }

  ngOnInit(): void {

    // Monta o this.setAllPokemons quando carrega a página
    this.pokeApiService.apiListAllPokemons.subscribe(
      res => {
        this.setAllPokemons = res.results;
        this.getAllPokemons = this.setAllPokemons;
      },
      error => {
        this.apiError = true
      }
    );
  }

  //Filtra os pokemons
  public getSearchList(value: string){
    const filter = this.setAllPokemons.filter((res:any) => {
      return !res.name.indexOf(value.toLowerCase())
    })
    this.getAllPokemons = filter
  }
}
