import {Component, OnInit, OnDestroy} from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {first} from 'rxjs/operators';

import {AlertService, UserService, AuthenticationService} from '@app/_services';
import {User, Album} from '@app/_models';
import {Subscription} from 'rxjs';

class ImageSnippet {
    pending: boolean = false;
    status: string = 'init';

    constructor(public src: string, public file: File) {

    }
}

@Component({templateUrl: 'editalbum.component.html'})
export class EditalbumComponent implements OnInit, OnDestroy {
    registerForm: FormGroup;
    selectedFile: ImageSnippet;
    loading = false;
    submitted = false;
    album: Album;

    id: string;


    currentUser: User;
    private sub: any;

    currentUserSubscription: Subscription;

    picUpload = false;

    constructor(
        private formBuilder: FormBuilder,
        private router: Router,
        private authenticationService: AuthenticationService,
        private userService: UserService,
        private alertService: AlertService,
        private route: ActivatedRoute,
        // private imageService: ImageService
    ) {
        this.currentUserSubscription = this.authenticationService.currentUser.subscribe(user => {
            this.currentUser = user;
        });
    }


    private onSuccess() {
        this.selectedFile.pending = false;
        this.selectedFile.status = 'ok';

    }

    private onError() {
        this.selectedFile.pending = false;
        this.selectedFile.status = 'fail';
        this.selectedFile.src = '';
    }

    processFile(imageInput: any) {
        console.log(imageInput.files[0]);
        const file: File = imageInput.files[0];
        const reader = new FileReader();

        reader.addEventListener('load', (event: any) => {
            this.picUpload = true;


            this.selectedFile = new ImageSnippet(event.target.result, file);
            console.log(this.selectedFile.file);

            // this.imageService.uploadImage(this.selectedFile.file).subscribe(
            //     (res) => {
            //         this.onSuccess()
            //
            //     },
            //     (err) => {
            //         this.onError()
            //
            //     });
        });
        reader.readAsDataURL(file);
    }

    ngOnInit() {
        this.sub = this.route.params.subscribe(params => {
            this.id = params['id']; // (+) converts string 'id' to a number

            // In a real app: dispatch action to load the details here.
        });
        this.getData();
        this.registerForm = this.formBuilder.group({
            albumName: [Validators.required],
            description: [],
            privacy: [],
            coverPic: []
        });
    }

    // convenience getter for easy access to form fields
    get f() {
        return this.registerForm.controls;
    }

    onSubmit() {
        this.submitted = true;
        // if(this.registerForm.value.gender=='')
        //   this.registerForm.value.gender='undisclosed'
        // stop here if form is invalid
        if (this.registerForm.invalid) {
            return;
        }
        var formData = new FormData();
        if (this.picUpload) {
            formData.append('coverPic', this.selectedFile.file);
        }
        formData.append('albumId', this.id)
        formData.append('name', this.registerForm.value['albumName']);
        formData.append('privacy', this.registerForm.value['privacy']);
        formData.append('description', this.registerForm.value['description']);

        // this.registerForm['profilePic'] = formData
        console.log(formData);
        // console.log(this.registerForm.value);
        this.loading = true;
        // var user = new User();
        // user = this.registerForm.value;
        // user.profilePic = this.selectedFile.file;
        // console.log(user)


        this.userService.editAlbum(formData)
            .pipe(first())
            .subscribe(
                data => {
                    this.alertService.success('Album Saved', true);
                    history.back()
                },
                error => {
                    this.alertService.error(error);
                    this.loading = false;
                });
    }

    getData() {
        this.userService.getPrivateAlbums().pipe(first()).subscribe(albums => {
            albums.forEach(alb => {
                if(alb.id == this.id){
                    this.album = alb
                }
            });
            if(this.album == undefined)
                this.router.navigate(['/'])
            console.log(this.album)

            this.registerForm.setValue({
                'albumName': this.album.name,
                'description': this.album.description,
                'privacy': this.album.privacy,
                'coverPic': ''
            });
        });
    }

    ngOnDestroy() {
        // unsubscribe to ensure no memory leaks
        this.currentUserSubscription.unsubscribe();
    }
}
