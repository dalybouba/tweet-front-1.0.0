import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-base-page',
  templateUrl: './base-page.component.html',
  styleUrls: ['./base-page.component.scss']
})
export class BasePageComponent implements OnInit {
  topics:any;
  constructor(
    public authService: AuthService,
    private router: Router,
  ) { }

  ngOnInit(): void {
  }

  async logout(): Promise<void> {
    this.authService.logout()
    await this.router.navigate(['login'])
}

addScrollEvent($event: Event): void {
}

ngOnDestroy(): void {
}
}


