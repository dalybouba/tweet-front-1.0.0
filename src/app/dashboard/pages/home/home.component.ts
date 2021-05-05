import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { TweetService } from 'src/app/services/tweet.service';
import { Tweet } from 'src/app/shared/models/Tweet';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  constructor(
    private tweetService:TweetService
  ) { }

  ngOnInit(): void {
    
  }

}
