import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DataTablesNetComponent } from './tables/data-tables-net/data-tables-net.component';
import { SmartTablesComponent } from './tables/smart-tables/smart-tables.component';

const routes: Routes = [
  { path: 'data-tables-net', component: DataTablesNetComponent },
  { path: 'smart-tables', component: SmartTablesComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
