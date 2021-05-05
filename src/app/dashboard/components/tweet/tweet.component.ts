import { Component, Input, OnInit } from '@angular/core';
import { TweetService } from 'src/app/services/tweet.service';
import { Tweet } from 'src/app/shared/models/Tweet';

@Component({
  selector: 'app-tweet',
  templateUrl: './tweet.component.html',
  styleUrls: ['./tweet.component.css']
})
export class TweetComponent implements OnInit {
  @Input() tweet:Tweet[];
  constructor(
    private tweetService:TweetService
  ) { }

  ngOnInit(): void {
  }
  async toggleLike(): Promise<void> {
    // const tweet = await this.tweetService.toggleLike(this.tweet.id)
    // Object.assign(this.tweet, tweet)
}
}
