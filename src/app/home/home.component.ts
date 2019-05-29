import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { first } from 'rxjs/operators';

import { Album, User } from '@app/_models';
import { UserService, AuthenticationService } from '@app/_services';
import {Router} from '@angular/router';

@Component({ templateUrl: 'home.component.html' })
export class HomeComponent implements OnInit, OnDestroy {
    currentUser: User;
    currentUserSubscription: Subscription;
    albums: Album[] = [];

    constructor(
        private authenticationService: AuthenticationService,
        private userService: UserService,
        private router: Router
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
        this.currentUserSubscription.unsubscribe();
    }

    addPhoto(albumId: string) {
        console.log(albumId);
        this.router.navigate(['/addpic/' + albumId]);
    }

    openAlbum(albumId: string) {
        console.log(albumId);
        this.router.navigate(['/album/' + albumId + '/pics']);
    }

    likeAlbum(picId: Album) {
        var formData = new FormData();
        formData.append('pid', picId.id);
        formData.append('is_photo', 'false');

        this.userService.like(formData)
            .pipe(first())
            .subscribe(
                data => {
                    var index = this.albums.indexOf(picId)
                    this.albums[index].liked = !this.albums[index].liked
                    if(this.albums[index].liked){
                        this.albums[index].likes++;
                    }
                    else{
                        this.albums[index].likes--;
                    }
                    console.log(this.albums[index].likes)
                },
                error => {
                    console.log('error');
                });
    }

    deleteAlbum(id: string) {
        this.userService.delete(id).pipe(first()).subscribe(() => {
            this.loadAllAlbums()
        });
    }

    editAlbum(id: string) {
        this.router.navigate(['/editalbum/'+id]);
    }


    // deleteUser(id: number) {
    //     this.userService.delete(id).pipe(first()).subscribe(() => {
    //         this.loadAllAlbums()
    //     });
    // }

    private loadAllAlbums() {
        this.userService.getAll().pipe(first()).subscribe(albums => {
            this.albums = albums;

            console.log(albums);
        });
    }
}
