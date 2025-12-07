import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { LoginComponent } from './login.component';
import { TasksComponent } from './tasks.component';
import { AuthInterceptor } from './auth.interceptor';
import { AuthService } from './auth.service';
import { ApiService } from './api.service';

@NgModule({
  declarations: [AppComponent, LoginComponent, TasksComponent],
  imports: [BrowserModule, HttpClientModule, FormsModule],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
    AuthService,
    ApiService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
