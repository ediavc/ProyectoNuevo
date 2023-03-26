import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-logoprincipal',
  templateUrl: './logoprincipal.component.html',
  styleUrls: ['./logoprincipal.component.css']
})
export class LOGOPRINCIPALComponent implements OnInit {

  constructor(private router:Router) {}

  ngOnInit(): void {
    
  }

  login() {
    this.router.navigate(['/login'])
  }

}
