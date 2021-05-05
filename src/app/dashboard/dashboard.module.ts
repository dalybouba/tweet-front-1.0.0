import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { BasePageComponent } from './components/base-page/base-page.component';
import { HomeComponent } from './pages/home/home.component';
import { TweetsComponent } from './pages/profile/tweets/tweets.component';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NzBreadCrumbModule } from 'ng-zorro-antd/breadcrumb';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { NzAvatarModule } from 'ng-zorro-antd/avatar';
import { NzTypographyModule } from 'ng-zorro-antd/typography';
import { NzSpinModule } from 'ng-zorro-antd/spin';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzTabsModule } from 'ng-zorro-antd/tabs';
import { NzFormModule } from 'ng-zorro-antd/form';
import { ReactiveFormsModule } from '@angular/forms';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { NzUploadModule } from 'ng-zorro-antd/upload';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
import { NzPopconfirmModule } from 'ng-zorro-antd/popconfirm';
import { NzListModule } from 'ng-zorro-antd/list';
import { NzToolTipModule } from 'ng-zorro-antd/tooltip';
import { NzPipesModule } from 'ng-zorro-antd/core/pipe';
import { NzCarouselModule } from 'ng-zorro-antd/carousel';
import { NzBadgeModule } from 'ng-zorro-antd/badge';
import { NzCardModule } from 'ng-zorro-antd/card';
import { TweetFormComponent } from './components/tweet-form/tweet-form.component';
import { TweetComponent } from './components/tweet/tweet.component';
import { ScrollingModule } from '@angular/cdk/scrolling';

@NgModule({
  declarations: [
       BasePageComponent,
       HomeComponent,
       TweetsComponent,
       TweetFormComponent,
       TweetComponent,
  ],
  imports: [
    ScrollingModule,
    CommonModule,
    DashboardRoutingModule,
    NzLayoutModule,
    NzMenuModule,
    NzBreadCrumbModule,
    NzGridModule,
    NzIconModule,
    NzDividerModule,
    NzAvatarModule,
    NzTypographyModule,
    NzSpinModule,
    NzButtonModule,
    NzTabsModule,
    NzFormModule,
    ReactiveFormsModule,
    NzInputModule,
    NzModalModule,
    NzUploadModule,
    NzDropDownModule,
    NzPopconfirmModule,
    NzListModule,
    NzToolTipModule,
    NzPipesModule,
    NzCarouselModule,
    NzBadgeModule,
    NzCardModule,
  ]
})
export class DashboardModule { }
