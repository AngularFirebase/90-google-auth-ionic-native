import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-info',
  templateUrl: 'info.html',
})
export class InfoPage {

  content;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.content = this.navParams.get('content')
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad InfoPage');
  }

}
