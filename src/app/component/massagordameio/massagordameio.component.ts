import {Component} from '@angular/core';

@Component ({
selector : 'massagordameio-component',
templateUrl : 'massagordameio.component.html'
})

export class MassaGordaMeioComponent{

  email: string;
  senha: string;
  data: number;

  sim(): void{
    alert("Parabéns! Rumo a uma vida melhor");
  }
  nao():void{
    alert("Não perca mais tempo e comece enquanto há tempo!");
  }
  cadastrar(): void{

      alert("Cadastro realizado com sucesso!");
    }
  }
