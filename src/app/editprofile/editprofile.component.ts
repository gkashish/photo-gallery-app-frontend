import {Component, OnInit, OnDestroy} from '@angular/core';
import {Router} from '@angular/router';
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

@Component({templateUrl: 'editprofile.component.html'})
export class EditprofileComponent implements OnInit, OnDestroy {
    registerForm: FormGroup;
    selectedFile: ImageSnippet;
    loading = false;
    submitted = false;
    user: User

    currentUser: User;
    currentUserSubscription: Subscription;

    picUpload = false;

    constructor(
        private formBuilder: FormBuilder,
        private router: Router,
        private authenticationService: AuthenticationService,
        private userService: UserService,
        private alertService: AlertService,
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
        this.getData()
        this.registerForm = this.formBuilder.group({
            firstName: [],
            lastName: [],
            password: [''],
            gender: [],
            profilePic: []
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
            formData.append('profilePic', this.selectedFile.file);
        }
        formData.append('firstName', this.registerForm.value['firstName']);
        formData.append('gender', this.registerForm.value['gender']);
        formData.append('lastName', this.registerForm.value['lastName']);
        formData.append('password', this.registerForm.value['password']);

        // this.registerForm['profilePic'] = formData
        console.log(formData);
        // console.log(this.registerForm.value);
        this.loading = true;
        // var user = new User();
        // user = this.registerForm.value;
        // user.profilePic = this.selectedFile.file;
        // console.log(user)


        this.userService.editProfile(formData)
            .pipe(first())
            .subscribe(
                data => {
                    this.alertService.success('Profile Saved', true);
                    this.router.navigate(['/']);
                },
                error => {
                    this.alertService.error(error);
                    this.loading = false;
                });
    }

    getData(){
        this.userService.getProfile().pipe(first()).subscribe(user => {
            this.user = user;

            console.log(this.user.gender);
            this.registerForm.setValue({'firstName': this.user.firstName, 'lastName': this.user.lastName, 'password': '', gender: this.user.gender, 'profilePic':''})
        });
    }
    deleteProfile(){

        this.userService.deleteUser().pipe(first()).subscribe(() => {
            this.authenticationService.logout();
            this.router.navigate(['/login']);
        });
    }

    ngOnDestroy() {
        // unsubscribe to ensure no memory leaks
        this.currentUserSubscription.unsubscribe();
    }
}
