import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DataTablesNetComponent } from './tables/data-tables-net/data-tables-net.component';

const routes: Routes = [
  { path: 'data-tables-net', component: DataTablesNetComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
