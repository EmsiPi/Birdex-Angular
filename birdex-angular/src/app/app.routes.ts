import { Routes } from '@angular/router';

import { App } from './app';
import { ListBird } from './list-bird/list-bird';
import { Formulaire } from './formulaire/formulaire';
import { Enregistrement } from './enregistrement/enregistrement';
import { LeCarnet } from './le-carnet/le-carnet';

export const routes: Routes = [
    {
        path: '',
        component: Enregistrement,
    },
    {
        path: 'leCarnet',
        component: LeCarnet,
    }
];
