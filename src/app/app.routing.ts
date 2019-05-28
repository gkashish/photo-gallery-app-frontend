import {Routes, RouterModule} from '@angular/router';

import {HomeComponent} from './home';
import {LoginComponent} from './login';
import {RegisterComponent} from './register';
import {AlbumsComponent} from './albums';
import {CreatealbumComponent} from './createalbum'
import {AuthGuard} from './_guards';
import {AddpicComponent} from './addpic';
import {AlbumpicsComponent} from './albumpics';
import {PictureComponent} from './picture';
import {EditprofileComponent} from './editprofile';

const appRoutes: Routes = [
    {path: '', component: HomeComponent, canActivate: [AuthGuard]},
    {path: 'login', component: LoginComponent},
    {path: 'register', component: RegisterComponent},
    {path: 'myalbums', component: AlbumsComponent},
    {path: 'addalbum', component: CreatealbumComponent},
    {path: 'editprofile', component: EditprofileComponent},

    {path: 'addpic/:id', component: AddpicComponent},
    {path: 'album/:id/pics', component: AlbumpicsComponent},
    {path: 'pic/:id', component: PictureComponent},

    // otherwise redirect to home
    {path: '**', redirectTo: ''}
];

export const routing = RouterModule.forRoot(appRoutes);
