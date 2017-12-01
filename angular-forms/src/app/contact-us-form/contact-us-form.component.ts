import { Component, OnInit } from '@angular/core';

import { ContactUs } from '../contact-us'

@Component({
  selector: 'app-contact-us-form',
  templateUrl: './contact-us-form.component.html',
  styleUrls: ['./contact-us-form.component.css']
})
export class ContactUsFormComponent implements OnInit {

  contact_us ='Contact US';

  constructor() { }

  model: ContactUs = {};

  submitted = false;

  onsubmit() { this.submitted = true;}

  get diagnostic() { return JSON.stringify(this.model);}


  ngOnInit() {
  }

  newContactUs (contactUs: ContactUs) {

    this.model = contactUs;
    console.log(JSON.stringify(this.model));
    
  }

}
