import {Component, OnInit, OnDestroy} from '@angular/core';
import {Subscription} from 'rxjs';
import {first} from 'rxjs/operators';

import {Picture, User} from '@app/_models';
import {UserService, AuthenticationService} from '@app/_services';
import {Router, ActivatedRoute} from '@angular/router';

@Component({templateUrl: 'picture.component.html'})
export class PictureComponent implements OnInit, OnDestroy {
    currentUser: User;
    currentUserSubscription: Subscription;
    picture: Picture;

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

    // deleteUser(id: number) {
    //     this.userService.delete(id).pipe(first()).subscribe(() => {
    //         this.loadAllAlbums();
    //     });
    // }

    likePicture(picId: Picture) {
        var formData = new FormData();
        formData.append('pid', picId.id);
        formData.append('is_photo', 'true');

        this.userService.like(formData)
            .pipe(first())
            .subscribe(
                data => {
                    this.picture.liked = !this.picture.liked
                    if(this.picture.liked){
                        this.picture.likes++;
                    }
                    else{
                        this.picture.likes--;
                    }
                    console.log(this.picture.likes)
                },
                error => {
                    console.log('error');
                });
    }

    editPicture(id: string) {
        this.router.navigate(['/editpicture/'+id]);
    }

    deletePicture(id: string) {
        this.userService.deletePic(id).pipe(first()).subscribe(() => {
            this.router.navigate(['/'])
        });
    }

    sharePicture(alb: Picture) {
        this.userService.sharePic(alb.id).pipe(first()).subscribe(albums => {
            alb.shared=true;
        });
    }



    private loadAllAlbums() {
        this.userService.getPic(this.id).pipe(first()).subscribe(picture => {
            this.picture = picture;

            console.log(picture);
        }, error => {
            if(error == 'Forbidden')
                this.authenticationService.logout()
        });
    }
}

