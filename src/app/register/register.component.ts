import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { UserService } from '../user.service';

import {AngularFireDatabase} from 'angularfire2/database';
import {NgForm} from '@angular/forms';
import { from } from 'rxjs';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  user = '';
  password = '';

  constructor(private userservice: UserService, private router: Router, private db: AngularFireDatabase) { }

  ngOnInit() {
  }

  signup(data: NgForm) {
    
    this.db.list('/59110440170/user').push(data.value);
    alert("บันทึกเสร็จสิ้น")
    // console.log(`เรียกฟังก์ชัน signup(user=${user}, password=${password})`);
    // this.user = user;
    // this.password = password;
    // this.userservice._saveUser(user, password).subscribe(
    //   () => {
    //     this.router.navigate([ '/login' ]);
    //   },
    //   error => {
    //     console.error( error );
    //   });
  }
}
