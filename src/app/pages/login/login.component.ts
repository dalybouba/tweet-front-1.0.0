import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { error } from 'selenium-webdriver';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  validateForm!: FormGroup;
  loading = false
   submitForm() {
    // for (const i in this.validateForm.controls) {
    //   this.validateForm.controls[i].markAsDirty();
    //   this.validateForm.controls[i].updateValueAndValidity();
    // }

    if (!this.isValid(this.validateForm)) {
      return
  }
  this.loading = true
   this.authService.login(this.validateForm.value).subscribe(data=>{
    this.router.navigate(['/home'])

   }
   );
  this.loading = false
    
  }

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private authService: AuthService
    ) {}

  ngOnInit(): void {
    this.validateForm = this.fb.group({
      email: [null, [Validators.required]],
      userName: [null, [Validators.required]],
      password: [null, [Validators.required]],
      // remember: [true]
    });
  }
  isValid(form: FormGroup): boolean {
    Object.values(form.controls).forEach(control => {
        control.markAsDirty()
        control.updateValueAndValidity()
    })
    return form.valid
  }
}
