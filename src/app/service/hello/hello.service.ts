import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { IPagedResponse, UserModel } from './hello.model';
@Injectable()
export class HelloService {
  constructor(private http: HttpClient) {}

  url = 'https://jsonplaceholder.typicode.com/users/';
  users: IPagedResponse<UserModel>;

  say(name): string {
    return 'Hello ' + name;
  }

  getUsers(): Observable<UserModel[]> {
    return this.http.get(this.url).map(data => <UserModel[]>data);
  }

  getUser(id: string): Observable<UserModel> {
    return this.http.get<UserModel>(this.url + '/' + id);
  }
}
