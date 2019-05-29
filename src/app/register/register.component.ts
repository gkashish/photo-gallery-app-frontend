import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {first} from 'rxjs/operators';

import {AlertService, UserService, AuthenticationService} from '@app/_services';
import {User} from '@app/_models';

class ImageSnippet {
    pending: boolean = false;
    status: string = 'init';

    constructor(public src: string, public file: File) {
    }
}

@Component({templateUrl: 'register.component.html'})
export class RegisterComponent implements OnInit {
    registerForm: FormGroup;
    selectedFile: ImageSnippet;
    loading = false;
    submitted = false;
    picUpload = false;

    constructor(
        private formBuilder: FormBuilder,
        private router: Router,
        private authenticationService: AuthenticationService,
        private userService: UserService,
        private alertService: AlertService,
        // private imageService: ImageService
    ) {
        // redirect to home if already logged in
        if (this.authenticationService.currentUserValue) {
            this.router.navigate(['/']);
        }
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
            this.picUpload=true


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
        this.registerForm = this.formBuilder.group({
            username: ['testing', Validators.required],
            firstName: ['testing', Validators.required],
            lastName: [''],
            gender: ['undisclosed'],
            password: ['testing', [Validators.required]],
            profilePic: [],

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
        formData.append('username', this.registerForm.value['username']);
        formData.append('firstName', this.registerForm.value['firstName']);
        formData.append('lastName', this.registerForm.value['lastName']);
        formData.append('gender', this.registerForm.value['gender']);
        formData.append('password', this.registerForm.value['password']);

        // this.registerForm['profilePic'] = formData
        console.log(formData);
        // console.log(this.registerForm.value);
        this.loading = true;
        // var user = new User();
        // user = this.registerForm.value;
        // user.profilePic = this.selectedFile.file;
        // console.log(user)


        this.userService.register(formData)
            .pipe(first())
            .subscribe(
                data => {
                    this.alertService.success('Registration successful', true);
                    this.router.navigate(['/login']);
                },
                error => {
                    console.log(error)
                    if(error == 'Bad Request')
                        this.alertService.error("Username already exists")
                    else
                        this.alertService.error(error);
                    this.loading = false;
                });
    }
}
