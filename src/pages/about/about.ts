import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { InfoPage } from '../info/info';

import { ModalController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {

  constructor(public navCtrl: NavController, public modalCtrl: ModalController) { }

  openInfo() {
    this.navCtrl.push(InfoPage);
  }

  openInfoModal() {
    const infoModal = this.modalCtrl.create(InfoPage, { content: 'hello world'});
    infoModal.present();
  }
}