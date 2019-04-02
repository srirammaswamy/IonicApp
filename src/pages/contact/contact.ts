import { Component, ViewChild, ElementRef } from '@angular/core';
import { NavController, LoadingController } from 'ionic-angular';


@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})


export class ContactPage {
  @ViewChild('map') mapContainer: ElementRef;
  constructor(public navCtrl: NavController) {
  }

}