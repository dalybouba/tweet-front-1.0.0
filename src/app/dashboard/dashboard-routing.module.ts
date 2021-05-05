import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BasePageComponent } from './components/base-page/base-page.component';
import { HomeComponent } from './pages/home/home.component';

const routes: Routes = [

  {
    path: '',
    component: BasePageComponent,
    children: [
        {
            path: '',
            redirectTo: 'home'
        },
        {
            path: 'home',
            component: HomeComponent
        },
        // {
        //     path: 'explore',
        //     component: ExploreComponent
        // },
        // {
        //     path: 'notifications',
        //     component: NotificationsComponent
        // },
        // {
        //     path: 'settings',
        //     component: SettingsComponent
        // },
        // {
        //     path: ':username',
        //     component: ProfileComponent
        // },
        // {
        //     path: ':username/following',
        //     component: FollowingsComponent
        // },
        // {
        //     path: ':username/followers',
        //     component: FollowersComponent
        // },
        // {
        //     path: 'tweet/:id',
        //     component: TweetComponent
        // }
    ]
},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
