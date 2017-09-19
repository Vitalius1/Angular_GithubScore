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
  constructor(private _githubSevice: GithubService) {
  }
  
  onSubmit(form) {
    console.log("Form Submited")
    this.user = {};
    this._githubSevice.getUser(this.username, (user) => {
      this.user = user;
    });
    form.resetForm();
  }
  
  ngOnInit() {
  }

}
