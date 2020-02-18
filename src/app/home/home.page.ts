import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  public listaPokemons = [
    {
    numero: '001', 
    nome: 'Bulbassaur', 
    tipos: ['Grass', 'Poison'], 
    img: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/001.png'
    },
    {
    numero: '004', 
    nome: 'Charmander', 
    tipos: ['Fire'], 
    img: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/004.png'
    },
    {
    numero: '007', 
    nome: 'Squirtle', 
    tipos: ['Water'], 
    img: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/007.png'
    },
    {
      numero: '010', 
      nome: 'Caterpie', 
      tipos: ['Bug'], 
      img: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/010.png'
    },
    {
      numero: '013', 
      nome: 'Weedle', 
      tipos: ['Bug', 'Poison'], 
      img: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/013.png'
    },
    {
      numero: '016', 
      nome: 'Pidgey', 
      tipos: ['Normal', 'Flying'], 
      img: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/016.png'
    },
    {
      numero: '019', 
      nome: 'Rattata', 
      tipos: ['Normal'], 
      img: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/019.png'
    },
    {
      numero: '021', 
      nome: 'Spearow', 
      tipos: ['Normal', 'Flying'], 
      img: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/021.png'
    },
    {
      numero: '023', 
      nome: 'Ekans', 
      tipos: ['Poison'], 
      img: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/023.png'
    },
    {
      numero: '025', 
      nome: 'Pikachu', 
      tipos: ['Electric'], 
      img: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/025.png'
    }
  ];

  public listaFiltrada = [];

  constructor() {}

}
