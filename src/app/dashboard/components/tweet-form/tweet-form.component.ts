import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { BehaviorSubject, Subscription } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';
import { TweetService } from 'src/app/services/tweet.service';
import { Tweet } from 'src/app/shared/models/Tweet';



@Component({
  selector: 'app-tweet-form',
  templateUrl: './tweet-form.component.html',
  styleUrls: ['./tweet-form.component.css']
})
export class TweetFormComponent implements OnInit {
  currentUser = this.authService.currentUserValue;
  form: FormGroup;
  media: string[] = []
  loading = false
  tweeted :Tweet = new Tweet;
  @Input() placeholder = `What's new?`
  constructor(
    private tweetService: TweetService,
    private fromBuilder: FormBuilder,
    private authService: AuthService,
  ) {

  }

  ngOnInit(): void {
    this.form = this.fromBuilder.group({
      content: [''],
    });

  }
  isValid(form: FormGroup): boolean {
    Object.values(form.controls).forEach(control => {
      control.markAsDirty()
      control.updateValueAndValidity()
    })

    return form.valid
  }
  tweet() {
    if (!this.isValid(this.form)) {
      return
    }

  
    let tweett=false;

    this.tweetService.tweet({ ...this.form.value, user: this.currentUser }).subscribe(
      () => {
        
        this.loading=true;
        tweett = true;
      }
    )
   
    // this.tweeted.emit(tweett)
    // // this.media = []
    this.form.reset()

  }

  subscription: Subscription;
  beforeUpload(): (file: File) => boolean {
    return (file: File) => {
      this.addMedia(file)
      return false
    }
  }


  addMedia(media: File): void {
    this.form.controls.media.value.push(media)
    const fileURL = URL.createObjectURL(media)
    this.media.push(fileURL)
  }

  removeMedia(index: number): void {
    // this.form.controls.media.value.remove(this.form.controls.media.value[index])
    // this.media.remove(this.media[index])
  }

}
