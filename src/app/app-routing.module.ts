import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DataTablesNetComponent } from './tables/data-tables-net/data-tables-net.component';
import { MdbTablesComponent } from './tables/mdb-tables/mdb-tables.component';
import { SmartTablesComponent } from './tables/smart-tables/smart-tables.component';

// MdbTablesComponent
const routes: Routes = [
  { path: 'data-tables-net', component: DataTablesNetComponent },
  { path: 'smart-tables', component: SmartTablesComponent },
  { path: 'mdb-tables', component: MdbTablesComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
