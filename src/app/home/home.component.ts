import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { first } from 'rxjs/operators';

import { Album, User } from '@app/_models';
import { UserService, AuthenticationService } from '@app/_services';

@Component({ templateUrl: 'home.component.html' })
export class HomeComponent implements OnInit, OnDestroy {
    currentUser: User;
    currentUserSubscription: Subscription;
    albums: Album[] = [];

    constructor(
        private authenticationService: AuthenticationService,
        private userService: UserService
    ) {
        this.currentUserSubscription = this.authenticationService.currentUser.subscribe(user => {
            this.currentUser = user;
        });
    }

    ngOnInit() {
        this.loadAllAlbums();
        console.log("here1")
    }

    ngOnDestroy() {
        // unsubscribe to ensure no memory leaks
        // this.currentUserSubscription.unsubscribe();
    }

    deleteUser(id: number) {
        this.userService.delete(id).pipe(first()).subscribe(() => {
            this.loadAllAlbums()
        });
    }

    private loadAllAlbums() {
        this.userService.getAll().pipe(first()).subscribe(albums => {
            this.albums = albums;

            console.log(albums);
        });
    }
}
