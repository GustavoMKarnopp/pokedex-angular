import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//Components
import { PokeHeaderComponent } from './poke-header/poke-header.component';
import { PokeSearchComponent } from './poke-search/poke-search.component';
import { PokeListComponent } from './poke-list/poke-list.component';

@NgModule({
  declarations: [
    PokeHeaderComponent,
    PokeSearchComponent,
    PokeListComponent
  ],

  //TODAS AS VEZES QUE É CRIADO UM NOVO COMPONENTE É ADICIONADO NORMALMENTE AUTOMATICO NO declarations
  //MAS DEVE SE UTILIZADO TAMBÉM NO exportS PARA SER GLOBAL, E NO exports NÃO ADICIONA SOZINHO.
  exports: [
    PokeHeaderComponent,
    PokeSearchComponent,
    PokeListComponent
  ],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
