import { Ng2CompleterModule } from '@akveo/ng2-completer';
import { NgModule } from '@angular/core';
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



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    DataTablesNetComponent,
    SmartTablesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DataTablesModule,
    Ng2SmartTableModule,
    Ng2CompleterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
