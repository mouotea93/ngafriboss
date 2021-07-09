import { Component, OnInit } from '@angular/core';
import {FormGroup,FormControl} from '@angular/forms';
@Component({
  selector: 'app-entreprise-contact',
  templateUrl: './entreprise-contact.component.html',
  styleUrls: ['./entreprise-contact.component.css']
})
export class EntrepriseContactComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  contactForm = new FormGroup({
    label:new FormControl()
  })
  
}
