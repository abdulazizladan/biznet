import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from  '@angular/forms';

//Material modules
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule} from'@angular/material/input';
import { MatIconModule } from '@angular/material/icon';

//FlexLayoutModule
import { FlexLayoutModule } from '@angular/flex-layout';

import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { PasswordResetComponent } from './components/password-reset/password-reset.component';


@NgModule({
  declarations: [LoginComponent, RegisterComponent, PasswordResetComponent],
  imports: [
    CommonModule,
    AuthRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatCardModule,
    MatInputModule,
    MatIconModule,
    FlexLayoutModule
  ],
  exports:[
    LoginComponent,
    RegisterComponent,
    PasswordResetComponent
  ]
})
export class AuthModule { }
