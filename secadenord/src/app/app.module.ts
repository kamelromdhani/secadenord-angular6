import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { DataService } from './data.service';
import { AppComponent } from './app.component';
import { NiveauComponent } from './niveau/niveau.component';
import { TotalisateurComponent } from './totalisateur/totalisateur.component';
import { DebitComponent } from './debit/debit.component';
import { NotFoundComponent } from './not-found/not-found.component';
import {appRouting} from './app.routing';
import { HttpClientModule } from '@angular/common/http';
import { DataTablesModule } from 'angular-datatables';


@NgModule({
  declarations: [
    AppComponent,
    NiveauComponent,
    TotalisateurComponent,
    DebitComponent,
    NotFoundComponent,
   
  ],
  imports: [
    BrowserModule,
    FormsModule,
    appRouting,
    DataTablesModule,
    HttpClientModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
