import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Task { id: number|null; title: string; description: string; }

@Injectable({ providedIn: 'root' })
export class ApiService {
  base = 'http://localhost:8080/api/tasks';
  constructor(private http: HttpClient) {}
  list(): Observable<Task[]> { return this.http.get<Task[]>(this.base); }
  create(t: Task) { return this.http.post(this.base, t); }
  update(id: number, t: Task) { return this.http.put(`${this.base}/${id}`, t); }
  delete(id: number) { return this.http.delete(`${this.base}/${id}`); }
}
