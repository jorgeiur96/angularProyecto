import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import {HeaderComponent} from './header/header.component';
import {FooterComponet} from './footer/footer.componet';
import { DirectivaComponent } from './directiva/directiva.component';
import { ClientesComponent } from './clientes/clientes.component';
import {RouterModule,Routes} from '@angular/router';
import {HttpClientModule} from '@angular/common/http';

import {ClienteService} from './clientes/cliente.service';

const routes:Routes=[{path:'',redirectTo:'/clientes',pathMatch:'full'},
{path:'directivas',component:DirectivaComponent},
{path:'clientes',component:ClientesComponent}

];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponet,
    DirectivaComponent,
    ClientesComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
      HttpClientModule
  ],
  providers: [ClienteService],
  bootstrap: [AppComponent]
})
export class AppModule { }
