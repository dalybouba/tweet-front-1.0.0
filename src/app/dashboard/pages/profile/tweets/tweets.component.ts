import { HttpClient } from '@angular/common/http';
import { ChangeDetectionStrategy, Component, HostListener, Input, OnDestroy, OnInit } from '@angular/core';
import { NzMessageService } from 'ng-zorro-antd/message';
import { BehaviorSubject, Observable, Subject, Subscription } from 'rxjs';
import { switchMap, takeUntil } from 'rxjs/operators';
import { TweetService } from 'src/app/services/tweet.service';
import { ListTweet, Tweet } from 'src/app/shared/models/Tweet';
import { CollectionViewer, DataSource } from '@angular/cdk/collections';
import { AuthService } from 'src/app/services/auth.service';
import { User } from 'src/app/shared/models/User';

@Component({
  selector: 'app-tweets',
  templateUrl: './tweets.component.html',
  styleUrls: ['./tweets.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush

})


export class TweetsComponent implements OnInit, OnDestroy {
  color = `rgba(${Math.round(Math.random() * 255)}, ${Math.round(Math.random() * 255)}, ${Math.round(Math.random() * 255)}, 0.2)`
  tweets = new MyDataSource(this.tweetService);
  loading = false;
  subscribe: Subscription;
  user: User;
  private destroy$ = new Subject();
  constructor(private http: HttpClient,
    private tweetService: TweetService,
    private auth: AuthService,
    private nzMessage: NzMessageService,
  ) {
  }




  ngOnInit() {
    this.getTweet()
    this.auth.currentUser.subscribe(
      res => {
        this.user = res
      }
    )

  }
  getTweet() {
    this.tweets
      .completed()
      .pipe(takeUntil(this.destroy$))
      .subscribe(() => {
        this.nzMessage.warning('Infinite List loaded all');
      });
  }
  async toggleLike(): Promise<void> {
    // const tweet = await this.tweetService.toggleLike(this.tweet.id)
    // Object.assign(this.tweet, tweet)
  }
  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
    this.subscribe.unsubscribe;
  }
  remove(id: number) {
    this.tweetService.deleteTweet(id).subscribe(
      () => {
        this.getTweet();
        this.tweets
      }
    )
  }

}

class MyDataSource extends DataSource<Tweet> {
  private pageSize = 10;
  private cachedData: Tweet[] = [];
  private fetchedPages = new Set<number>();
  private dataStream = new BehaviorSubject<Tweet[]>(this.cachedData);
  private complete$ = new Subject<void>();
  private disconnect$ = new Subject<void>();
  itemSize: number;
  constructor(private tweetService: TweetService
  ) {
    super();
  }

  completed(): Observable<void> {
    return this.complete$.asObservable();
  }

  connect(collectionViewer: CollectionViewer): Observable<Tweet[]> {
    this.setup(collectionViewer);
    return this.dataStream;
  }

  disconnect(): void {
    this.disconnect$.next();
    this.disconnect$.complete();
  }

  private setup(collectionViewer: CollectionViewer): void {
    this.fetchPage(0);
    collectionViewer.viewChange.pipe(takeUntil(this.complete$), takeUntil(this.disconnect$)).subscribe(range => {
      if (this.cachedData.length >= 50) {
        this.complete$.next();
        this.complete$.complete();
      } else {
        const endPage = this.getPageForIndex(range.end);
        this.fetchPage(endPage + 1);
      }
    });
  }

  private getPageForIndex(index: number): number {
    return Math.floor(index / this.pageSize);
  }

  private fetchPage(page: number): void {
    if (this.fetchedPages.has(page)) {
      console.log("page", page)
      return;
    }
    this.fetchedPages.add(page);

    this.tweetService.getTweetWithParam(this.pageSize, page)
      .subscribe(res => {
        console.log(res.data)
        this.itemSize = res.total;
        this.cachedData.splice(page * this.pageSize, this.pageSize, ...res.data);

        this.dataStream.next(this.cachedData);
      });
  }
}

