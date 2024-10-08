import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MenuComponent } from './menu/menu.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { MenuLoginComponent } from './menu-login/menu-login.component';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AcessoNegadoComponent } from './acesso-negado/acesso-negado.component';

@NgModule({
  declarations: [
    MenuComponent,
    MenuLoginComponent,
    HomeComponent,
    FooterComponent,
    NotFoundComponent,
    AcessoNegadoComponent,
  ],
  imports: [CommonModule, RouterModule, NgbModule],
  exports: [
    MenuComponent,
    MenuLoginComponent,
    HomeComponent,
    FooterComponent,
    NotFoundComponent,
    AcessoNegadoComponent,
  ],
})
export class NavegacaoModule {}
