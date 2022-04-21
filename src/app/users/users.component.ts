import { Component, OnInit } from '@angular/core';
import { Data, Router } from '@angular/router';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  searchText: any;

  


  users: Object | any;


  constructor(private http:HttpService, private router:Router) { }



  ngOnInit(): void {
    this.http.getAPIData().subscribe(data => {
      this.users = data
      return data;
    })
  }

  back(){
    this.router.navigate(['/home'])
  }
}


