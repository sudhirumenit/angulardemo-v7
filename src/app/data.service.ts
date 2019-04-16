import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) {
  }



  getUsers() {
    return this.http.get('https://jsonplaceholder.typicode.com/users')
  }


  getUser(userId) {
    return this.http.get('https://jsonplaceholder.typicode.com/users/' + userId)
  }

  getPosts() {
    return this.http.get('https://jsonplaceholder.typicode.com/posts')
  }

  getPhotos() {
    return this.http.get('https://jsonplaceholder.typicode.com/photos')
  }

  getComments() {
    return this.http.get('https://jsonplaceholder.typicode.com/comments')
  }

  getProducts() {
    let headers = new HttpHeaders();
    headers = headers.set('Content-Type', 'application/json; charset=utf-8');
    return this.http.get('http://142.93.219.205/v1.0/products', {headers: headers})
  }
}
