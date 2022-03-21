import { Component } from '@angular/core';
import { EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-nova-transferencia', //todos os componentes precisam ter o prefixo app. Essa informação pode ser consultada no angular.json
  templateUrl: './nova-transferencia.component.html',
  styleUrls: ['./nova-transferencia.component.scss'], //array de string, pode ser informado mais de um estilo
})
export class NovaTranferenciaComponent {
  @Output() aoTransferir = new EventEmitter<any>();
  /* Evento dentro do componente. Responsável por propagar uma informação para quem chamou.
  classe 'EventEmitter' que é responsável por propagar os dados*/

  valor: any;
  destino: any;

  //método
  transferir() {
    console.log('Solicitada nova transferência');
    const valorEmitir = { valor: this.valor, destino: this.destino };
    this.aoTransferir.emit(valorEmitir);
    this.limparCampos();
  }

  limparCampos() {
    this.valor = '';
    this.destino = '';
  }
}
