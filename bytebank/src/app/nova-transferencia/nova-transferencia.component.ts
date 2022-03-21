import { Component } from '@angular/core';

@Component({
  selector: 'app-nova-transferencia', //todos os componentes precisam ter o prefixo app. Essa informação pode ser consultada no angular.json
  templateUrl: './nova-transferencia.component.html',
  styleUrls: ['./nova-transferencia.component.scss'], //array de string, pode ser informado mais de um estilo
})
export class NovaTranferenciaComponent {
  valor: number;
  destino: number;

  //método
  transferir() {
    console.log('Solicitada nova transferência');
    console.log('Valor:', this.valor);
    console.log('Destino:', this.destino);
  }
}
