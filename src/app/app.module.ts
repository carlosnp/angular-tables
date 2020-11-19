import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
// Tables Packages
import { DataTablesModule } from 'angular-datatables';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// Views
import { HeaderComponent } from './layout/header/header.component';
import { DataTablesNetComponent } from './tables/data-tables-net/data-tables-net.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    DataTablesNetComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DataTablesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
