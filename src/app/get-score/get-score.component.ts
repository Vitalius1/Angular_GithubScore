import { Component, OnInit } from '@angular/core';
import { GithubService } from './../github/github.service';

@Component({
  selector: 'app-get-score',
  templateUrl: './get-score.component.html',
  styleUrls: ['./get-score.component.css']
})
export class GetScoreComponent implements OnInit {
  username: string;
  user: object = {};
  score: number;
  noUser: boolean;
  constructor(private _githubSevice: GithubService) {
  }
  
  onSubmit(form) {
    this.user = {};
    this._githubSevice.getUser(this.username, (user) => {
      if(user === false){
        this.noUser = true;
      } else{
        this.noUser = false;
        console.log(user);
        this.user = user;
        this.score = this.user['followers'] + this.user['public_repos'];
      }
    });
    form.resetForm();
  }
  
  ngOnInit() {
  }

}
