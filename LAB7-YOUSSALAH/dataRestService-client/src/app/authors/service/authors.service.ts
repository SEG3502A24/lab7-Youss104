import { Injectable } from '@angular/core';
import {Author, Book} from '../../books/model/book';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

const Url = 'http://localhost:8080/books-api/';

@Injectable({
  providedIn: 'root'
})
export class AuthorsService {
  constructor(private http: HttpClient) {}

  public getAuthor(id: string): Observable<Author> {
    return this.http.get<Author>(Url + 'authors/' + id);
  }


}
