import { Ng2CompleterModule } from '@akveo/ng2-completer';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
// Tables Packages
import { DataTablesModule } from 'angular-datatables';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// Views
import { HeaderComponent } from './layout/header/header.component';
import { DataTablesNetComponent } from './tables/data-tables-net/data-tables-net.component';
import { SmartTablesComponent } from './tables/smart-tables/smart-tables.component';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MdbTablesComponent } from './tables/mdb-tables/mdb-tables.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    DataTablesNetComponent,
    SmartTablesComponent,
    MdbTablesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DataTablesModule,
    Ng2SmartTableModule,
    Ng2CompleterModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MDBBootstrapModule.forRoot(),
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
