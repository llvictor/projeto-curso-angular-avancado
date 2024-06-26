import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { ToastrService } from 'ngx-toastr';

import { Fornecedor } from '../models/fornecedor';
import { FornecedorService } from '../services/fornecedor.service';

@Component({
  selector: 'app-excluir',
  templateUrl: './excluir.component.html',
})
export class ExcluirComponent {
  fornecedor: Fornecedor = new Fornecedor();

  constructor(
    private fornecedorService: FornecedorService,
    private route: ActivatedRoute,
    private router: Router,
    private toastr: ToastrService
  ) {
    this.route.params.subscribe((params) => {
      this.fornecedorService
        .obterPorId(params.id)
        .subscribe((fornecedor) => (this.fornecedor = fornecedor));
    });
  }

  excluirEvento() {
    this.fornecedorService.excluirFornecedor(this.fornecedor.id).subscribe(
      (evento) => {
        this.sucessoExclusao(evento);
      },
      (error) => {
        this.falha();
      }
    );
  }

  sucessoExclusao(evento: any) {
    const toast = this.toastr.success(
      'Fornecedor excluido com Sucesso!',
      'Good bye :D'
    );
    if (toast) {
      toast.onHidden.subscribe(() => {
        this.router.navigate(['/fornecedores/listar-todos']);
      });
    }
  }

  falha() {
    this.toastr.error('Houve um erro no processamento!', 'Ops! :(');
  }
}
