import {Component, OnInit, OnDestroy} from '@angular/core';
import {Subscription} from 'rxjs';
import {first} from 'rxjs/operators';

import {Picture, User} from '@app/_models';
import {UserService, AuthenticationService} from '@app/_services';
import {Router, ActivatedRoute} from '@angular/router';

@Component({templateUrl: 'albumpics.component.html'})
export class AlbumpicsComponent implements OnInit, OnDestroy {
    currentUser: User;
    currentUserSubscription: Subscription;
    pictures: Picture[] = [];

    private sub: any;
    id:string;

    constructor(
        private authenticationService: AuthenticationService,
        private userService: UserService,
        private router: Router,
        private route: ActivatedRoute,
    ) {
        this.currentUserSubscription = this.authenticationService.currentUser.subscribe(user => {
            this.currentUser = user;
        });
    }

    ngOnInit() {
        this.sub = this.route.params.subscribe(params => {
            this.id = params['id']; // (+) converts string 'id' to a number

            // In a real app: dispatch action to load the details here.
        });


        this.loadAllAlbums();
        console.log('here1');
    }

    ngOnDestroy() {
        // unsubscribe to ensure no memory leaks
        this.currentUserSubscription.unsubscribe();
    }

    openPicture(picId: string) {
        console.log(picId)
        this.router.navigate(['/pic/' + picId]);
    }

    deleteUser(id: number) {
        this.userService.delete(id).pipe(first()).subscribe(() => {
            this.loadAllAlbums();
        });
    }

    private loadAllAlbums() {
        this.userService.getAlbumPics(this.id).pipe(first()).subscribe(pictures => {
            this.pictures = pictures;

            console.log(pictures);
        });
    }
}
