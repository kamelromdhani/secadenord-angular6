import {ModuleWithProviders} from '@angular/core';
import {DebitComponent} from './debit/debit.component';
import {TotalisateurComponent} from './totalisateur/totalisateur.component';
import {NiveauComponent} from './niveau/niveau.component';
import {NotFoundComponent} from './not-found/not-found.component';
import {Routes, RouterModule} from '@angular/router';

const appRoutes: Routes = [
    {path: 'totalisateur', component: TotalisateurComponent},
    {path: 'debit', component: DebitComponent},
    {path: 'niveau', component: NiveauComponent},
    {path: '**', component: NotFoundComponent}
];
export const appRouting: ModuleWithProviders = RouterModule.forRoot(appRoutes);