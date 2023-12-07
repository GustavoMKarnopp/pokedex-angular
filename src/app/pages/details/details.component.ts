import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { forkJoin } from 'rxjs';

//Services
import { PokeApiService } from 'src/app/service/poke-api.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit{

  private urlPokemon: string = 'https://pokeapi.co/api/v2/pokemon'
  private urlName: string = 'https://pokeapi.co/api/v2/pokemon-species'
  constructor(
    //Estamos utilizando o ActivatedRoute para pegar os paramentros id passados pela URL
    private ativatedRoute: ActivatedRoute,
    private pokeApiService : PokeApiService
  ){
  }

  ngOnInit(): void {
    this.pokemon;
  }

  get pokemon(){

    const id = this.ativatedRoute.snapshot.params['id']

    const pokemon = this.pokeApiService.apiGetPokemons(`${this.urlPokemon}/${id}`);
    const name = this.pokeApiService.apiGetPokemons(`${this.urlName}/${id}`);

    //Carrega as duas apis ao mesmo tempo, quando terminar ele ira retornar a resposta
    return forkJoin([pokemon, name]).subscribe(
      res => {
        console.log(res)
      }
    )
  }
}
