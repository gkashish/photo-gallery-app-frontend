import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

import {environment} from '@environments/environment';
import {User, Album, Picture} from '@app/_models';

@Injectable({providedIn: 'root'})
export class UserService {
    constructor(private http: HttpClient) {
    }

    getAll() {
        return this.http.get<Album[]>(`${environment.apiUrl}/albums/`);
    }

    getPrivateAlbums() {
        return this.http.get<Album[]>(`${environment.apiUrl}/album/`);
    }

    createAlbum(album: FormData) {
        return this.http.post(`${environment.apiUrl}/album/`, album);
    }


    delete(id: string) {
        return this.http.delete(`${environment.apiUrl}/deletealbum/`+id);
    }

    getPic(picture_id: string) {
        return this.http.get<Picture>(`${environment.apiUrl}/pic/` + picture_id);
    }

    addPic(album: FormData, album_id: string) {
        return this.http.post(`${environment.apiUrl}/photo/` + album_id, album);
    }

    getAlbumPics(album_id: string) {
        return this.http.get<Picture[]>(`${environment.apiUrl}/photo/` + album_id);
    }

    deletePic(id: string) {
        return this.http.delete(`${environment.apiUrl}/deletepic/`+id);
    }

    like(data: FormData){
        return this.http.post(`${environment.apiUrl}/like/`, data);
    }

    register(user: FormData) {
        return this.http.post(`${environment.apiUrl}/register/`, user);
    }

    deleteUser() {
        return this.http.delete(`${environment.apiUrl}/deleteuser/`);
    }

    getProfile(){
        return this.http.get<User>(`${environment.apiUrl}/user/`)
    }

    editProfile(album: FormData) {
        return this.http.put(`${environment.apiUrl}/user/`, album);
    }
    // getById(id: number) {
    //     return this.http.get(`${environment.apiUrl}/users/${id}`);
    // }

}

