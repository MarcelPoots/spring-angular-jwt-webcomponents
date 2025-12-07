import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  template: `<div style="margin:20px"><h2>Spring Boot + Angular (JWT)</h2>
  <app-login></app-login>
  <app-tasks></app-tasks>
  </div>`
})
export class AppComponent {}
