import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { ToastrService } from 'ngx-toastr';

import { Fornecedor } from '../models/fornecedor';
import { FornecedorService } from '../services/fornecedor.service';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-excluir',
  templateUrl: './excluir.component.html',
})
export class ExcluirComponent {
  fornecedor: Fornecedor = new Fornecedor();
  enderecoMap;
  errors: any[] = [];

  constructor(
    private fornecedorService: FornecedorService,
    private route: ActivatedRoute,
    private router: Router,
    private toastr: ToastrService,
    private sanitizer: DomSanitizer
  ) {
    this.fornecedor = this.route.snapshot.data['fornecedor'];

    this.enderecoMap = this.sanitizer.bypassSecurityTrustResourceUrl(
      'https://www.google.com/maps/embed/v1/place?key=AIzaSyBjfevYkUXmiid4IJCfK21XHRzlNcoBqs4&q=' +
        this.EnderecoCompleto()
    );
  }

  excluirEvento() {
    this.fornecedorService.excluirFornecedor(this.fornecedor.id).subscribe(
      (fornecedor) => {
        this.sucessoExclusao(fornecedor);
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

  public EnderecoCompleto(): string {
    return (
      this.fornecedor.endereco.logradouro +
      ', ' +
      this.fornecedor.endereco.numero +
      ' - ' +
      this.fornecedor.endereco.bairro +
      ', ' +
      this.fornecedor.endereco.cidade +
      ' - ' +
      this.fornecedor.endereco.estado
    );
  }
}
