import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


/**
 * Generated class for the RDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-r-detail',
  templateUrl: 'r-detail.html',
})
export class RDetailPage {
  rentedroom: any=[];
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RDetailPage');
    this.rentedroom = this.navParams.data;
    console.log(this.rentedroom);
  }

}//
