import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

import {environment} from '@environments/environment';
import {User, Album, Picture} from '@app/_models';

@Injectable({providedIn: 'root'})
export class UserService {
    constructor(private http: HttpClient) {
    }

    getAll() {
        // console.log("here6")
        // var hi = this.http.get(`${environment.apiUrl}/albums/`)
        // console.log(hi)
        return this.http.get<Album[]>(`${environment.apiUrl}/albums/`);
    }

    getPrivateAlbums() {
        // console.log("here6")
        // var hi = this.http.get(`${environment.apiUrl}/albums/`)
        // console.log(hi)
        return this.http.get<Album[]>(`${environment.apiUrl}/myalbums/`);
    }

    getAlbumPics(album_id: string) {
        // console.log("here6")
        // var hi = this.http.get(`${environment.apiUrl}/albums/`)
        // console.log(hi)
        return this.http.get<Picture[]>(`${environment.apiUrl}/albums/` + album_id);
    }

    getPic(picture_id: string) {
        // console.log("here6")
        // var hi = this.http.get(`${environment.apiUrl}/albums/`)
        // console.log(hi)
        return this.http.get<Picture>(`${environment.apiUrl}/pic/` + picture_id);
    }

    getById(id: number) {
        return this.http.get(`${environment.apiUrl}/users/${id}`);
    }

    createAlbum(album: FormData) {
        return this.http.post(`${environment.apiUrl}/newalbum/`, album);
    }

    addPic(album: FormData, album_id: string) {
        return this.http.post(`${environment.apiUrl}/addphoto/` + album_id, album);
    }


    register(user: FormData) {
        return this.http.post(`${environment.apiUrl}/register/`, user);
    }

    update(user: User) {
        return this.http.put(`${environment.apiUrl}/users/${user.id}`, user);
    }

    delete(id: number) {
        return this.http.delete(`${environment.apiUrl}/users/${id}`);
    }
}
