import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';

// used to create fake backend
import {fakeBackendProvider} from './_helpers';

import {AppComponent} from './app.component';
import {routing} from './app.routing';

import {AlertComponent} from './_components';
import {JwtInterceptor, ErrorInterceptor} from './_helpers';
import {HomeComponent} from './home';
import {LoginComponent} from './login';
import {RegisterComponent} from './register';
import {CreatealbumComponent} from './createalbum';
import {AlbumsComponent} from './albums/albums.component';
import {AddpicComponent} from './addpic/addpic.component';
import {AlbumpicsComponent} from './albumpics/albumpics.component';
import {PictureComponent} from './picture/picture.component';
import {EditprofileComponent} from './editprofile/editprofile.component';
import {EditalbumComponent} from './editalbum/editalbum.component';

@NgModule({
    imports: [
        BrowserModule,
        ReactiveFormsModule,
        HttpClientModule,
        routing
    ],
    declarations: [
        AppComponent,
        AlertComponent,
        HomeComponent,
        LoginComponent,
        RegisterComponent,
        AlbumsComponent,
        CreatealbumComponent,
        AddpicComponent,
        AlbumpicsComponent,
        PictureComponent,
        EditprofileComponent,
        EditalbumComponent
    ],
    providers: [
        {provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true},
        {provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true},

        // provider used to create fake backend
        fakeBackendProvider
    ],
    bootstrap: [AppComponent]
})

export class AppModule {
}
