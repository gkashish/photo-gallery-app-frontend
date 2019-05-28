import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from '@environments/environment';
import { User, Album } from '@app/_models';

@Injectable({ providedIn: 'root' })
export class UserService {
    constructor(private http: HttpClient) { }

    getAll() {
        console.log("here6")
        var hi = this.http.get(`${environment.apiUrl}/albums/`)
        console.log(hi)
        return this.http.get(`${environment.apiUrl}/albums/`);
    }

    getById(id: number) {
        return this.http.get(`${environment.apiUrl}/users/${id}`);
    }

    register(user: FormData) {
        return this.http.post(`${environment.apiUrl}/regist er/`, user);
    }

    update(user: User) {
        return this.http.put(`${environment.apiUrl}/users/${user.id}`, user);
    }

    delete(id: number) {
        return this.http.delete(`${environment.apiUrl}/users/${id}`);
    }
}
