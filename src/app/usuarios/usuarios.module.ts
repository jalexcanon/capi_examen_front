import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TablaUsuariosComponent } from './tabla-usuarios/tabla-usuarios.component';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    TablaUsuariosComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule
  ]
})
export class UsuariosModule { }
