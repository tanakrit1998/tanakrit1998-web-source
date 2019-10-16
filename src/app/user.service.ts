import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  friends = [
    {
      name: 'Flock',
      pic: 'folk.png',
      position: 'CEO',
    },
    {
      name: 'Fha',
      pic: 'fha.jpg',
      position: 'Secretary',
    },
    {
      name: 'Pat Tracy Johnson',
      pic: 'pat.jpg',
      position: 'IT Support',
    }
  ];
  users: any

  constructor(private http: HttpClient) {
    this._getUsers()
  }

  _getUsers() {
    return this.http.post(
      'http://cs.sci.ubu.ac.th:7512/59110440170/user/_search',
      {
        query: {
        
        }
      }
    ); 
  }

  _saveUser(usr: string, passwd: string) {
    console.log(`user=${usr} passwd:${passwd}`);
    return this.http.post(
      'http://cs.sci.ubu.ac.th:7512/59110440170/user/_create',
      {
        user: usr,
        password: passwd,
      }
    );
  }

  getFriends() {
    return this.friends;
  }
  
}
