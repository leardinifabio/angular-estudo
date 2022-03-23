//Normalmente na classe service ficam as comunicações com meios externos, dados que precisam gerenciar da tela.

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class TransferenciaService {
  private listaTransferencia: any[]; //criação do array como privado
  constructor() {
    this.listaTransferencia = []; //inicialização do array
  }

  get transferencias() {
    return this.listaTransferencia;
  }

  adicionar(transferencia: any) {
    this.hidratar(transferencia);
    this.transferencias.push(transferencia);
  }

  private hidratar(transferencia: any) {
    transferencia.data = new Date();
  }
}
