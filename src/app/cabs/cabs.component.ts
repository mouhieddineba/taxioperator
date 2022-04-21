import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-cabs',
  templateUrl: './cabs.component.html',
  styleUrls: ['./cabs.component.scss']
})
export class CabsComponent implements OnInit {
  searchText: any;
  
  cabs: Object | any;

  constructor(private http:HttpService, private router:Router) { }

  



  ngOnInit(): void {
    this.http.getCabData().subscribe(data => {
      this.cabs = data
    });
  }

  back(){
    this.router.navigate(['/home'])
  }
}
