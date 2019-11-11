import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the CatPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-cat',
  templateUrl: 'cat.html',
})
export class CatPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CatPage');
  }
  Condominium(){
    this.navCtrl.push("CondomiuiumPage");
  }
  Apartamen(){
    this.navCtrl.push("ApartamenPage");
  }
  Mansion(){
    this.navCtrl.push("MansionPage");
  }
  Dorm(){
    this.navCtrl.push("DormPage");
  }

}
