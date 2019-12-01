import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'movies',
    loadChildren: () => import('./modules/movies/movies.module').then(m => m.MoviesModule)
  },
  {
    path: 'rents',
    loadChildren: () => import('./modules/rents/rents.module').then(m => m.RentsModule)
  },
  {
    path: 'statistics',
    loadChildren: () => import('./modules/statistics/statistics.module').then(m => m.StatisticsModule)
  },
  {
    path: 'customers',
    loadChildren: () => import('./modules/customers/customers.module').then(m => m.CustomersModule)
  },
  {
    path: 'admins',
    loadChildren: () => import('./modules/admins/admins.module').then(m => m.AdminsModule)
  },
  { path: '**', redirectTo: 'movies' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
