import { LoaddataProvider } from './../../providers/loaddata/loaddata';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the ComPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-com',
  templateUrl: 'com.html',
})
export class ComPage {
 

  constructor(public navCtrl: NavController, public navParams: NavParams, public api:LoaddataProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ComPage');
    
   }

   
  }//


