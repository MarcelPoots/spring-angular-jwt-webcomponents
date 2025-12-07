import { Component, OnInit } from '@angular/core';
import { ApiService, Task } from './api.service';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-tasks',
  template: `
  <div *ngIf="!authService.isLoggedIn()">Please log in to manage tasks.</div>
  <div *ngIf="authService.isLoggedIn()">
    <h3>Tasks</h3>
    <ul>
      <li *ngFor="let t of tasks">{{t.title}} - {{t.description}}
        <button (click)="edit(t)">Edit</button>
        <button (click)="delete(t.id)">Delete</button>
      </li>
    </ul>
    <div>
      <input placeholder="title" [(ngModel)]="editing.title" name="title"/>
      <input placeholder="description" [(ngModel)]="editing.description" name="desc"/>
      <button (click)="save()">Save</button>
    </div>
  </div>
  `
})
export class TasksComponent implements OnInit {
  tasks: Task[] = [];
  editing: Task = { id: null, title: '', description: '' };
  constructor(private api: ApiService, public authService: AuthService) {}
  ngOnInit() { this.load(); }
  load() { this.api.list().subscribe(data => this.tasks = data); }
  edit(t: Task) { this.editing = {...t}; }
  save() {
    if (this.editing.id) {
      this.api.update(this.editing.id!, this.editing).subscribe(() => this.load());
    } else {
      this.api.create(this.editing).subscribe(() => this.load());
    }
    this.editing = { id: null, title: '', description: ''};
  }
  delete(id: number) { this.api.delete(id).subscribe(() => this.load()); }
}
