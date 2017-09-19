import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs';
import { toPromise } from 'rxjs/operator/toPromise';

@Injectable()
export class GithubService {
  user;
  constructor(private _http: Http) { }
  getUser(username, callback){
    this._http.get(`https://api.github.com/users/${username}`).subscribe(
      (response) => {
        this.user = response.json();
        callback(this.user);
      },
      (err) => {
        callback(false);
      }
    );
  }
}
