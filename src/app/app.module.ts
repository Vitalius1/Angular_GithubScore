import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; // <-- Import FormsModule
import { HttpModule } from '@angular/http'; // <-- Import HttpModule
import { GithubService } from './github/github.service';
import { AppComponent } from './app.component';
import { GetScoreComponent } from './get-score/get-score.component';

@NgModule({
  declarations: [
    AppComponent,
    GetScoreComponent
  ],
  imports: [
    BrowserModule,
    FormsModule, // <-- Include module in our AppModules
		HttpModule // <-- Include module in our AppModules
  ],
  providers: [GithubService],
  bootstrap: [AppComponent]
})
export class AppModule { }
