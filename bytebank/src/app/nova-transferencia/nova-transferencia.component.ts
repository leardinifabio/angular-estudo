import { Transferencia } from './../models/transferencia.model';
import { TransferenciaService } from './../services/transferencia.service';
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

  constructor(private service: TransferenciaService) {}

  //método
  transferir() {
    console.log('Solicitada nova transferência');
    const valorEmitir: Transferencia = {
      valor: this.valor,
      destino: this.destino,
    };
    this.service.adicionar(valorEmitir).subscribe(
      (resultado) => {
        console.log(resultado);
        this.limparCampos();
      },
      (error) => console.error(error)
    );
  }

  limparCampos() {
    this.valor = '';
    this.destino = '';
  }
}
