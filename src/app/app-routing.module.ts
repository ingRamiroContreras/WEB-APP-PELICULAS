import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MoviesListComponent } from './movies/movies-list/movies-list.component';
import { MoviesCreateComponent } from './movies/movies-create/movies-create.component';
import { ReservasListComponent } from './reservas/reservas-list/reservas-list.component';

const routes: Routes = [
    {
        path: '',
        component: MoviesListComponent,
    },
    {
        path: 'movies',
        component: MoviesCreateComponent,
    },
    {
        path: 'reservas',
        component: ReservasListComponent,
    },
    {
        path: 'ListMovies',
        component: MoviesListComponent,
    },
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [
        RouterModule
    ],
    declarations: []
})
export class AppRoutingModule { }
