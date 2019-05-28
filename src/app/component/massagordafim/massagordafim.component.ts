import {Component} from '@angular/core';

@Component ({
selector : 'massagordafim-component',
templateUrl : 'massagordafim.component.html'
})

export class MassaGordaFimComponent{
  imc: number;
  idade: number;
  sexo: string;

  calcular(): void{
    let imc = Number(this.imc);
    let idade = Number(this.idade);
    let total = (1.20 * imc) + (0.23 * idade) - (10.8 * 0) - 5.4;
    let resultado = (1.20 * imc) + (0.23 * idade) - (10.8 * 1) - 5.4;

    if(this.sexo == "feminino"){
      alert("Sua porcentagem de massa gorda é:" +total+"%");
    }
    else if(this.sexo == "masculino"){
      alert("Sua porcentagem de massa gorda é:" +resultado+"%");
    }
    else{
      alert("Verifique se o seu sexo está escrito corretamente");
    }

  }
}
