import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireModule } from '@angular/fire';
import { FirebaseService } from './services/firebase.service';

//Core module
import { CoreModule } from './core/core.module';
import { AuthModule } from './auth/auth.module';

//Material modules
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatIconModule } from '@angular/material/icon';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NotFoundComponentComponent } from './not-found-component/not-found-component.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';

@NgModule({
  declarations: [
    AppComponent,
    NotFoundComponentComponent
  ],
  imports: [
    AngularFireModule.initializeApp(
      {
        apiKey: "AIzaSyADK72Egy8OzHB3Rt_P-aUaRQj25gpAgtg",
        authDomain: "biznet-540c7.firebaseapp.com",
        projectId: "biznet-540c7",
        storageBucket: "biznet-540c7.appspot.com",
        messagingSenderId: "489577648599",
        appId: "1:489577648599:web:d86793e74d0353534a7b92",
        measurementId: "G-4PVPC6BV5S"
      }
    ),
    CoreModule,
    AuthModule,
    FlexLayoutModule,
    MatIconModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
  ],
  providers: [
    FirebaseService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
