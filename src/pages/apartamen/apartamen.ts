import { RDetailPage } from './../r-detail/r-detail';
import { LoaddataProvider } from './../../providers/loaddata/loaddata';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the ApartamenPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-apartamen',
  templateUrl: 'apartamen.html',
})
export class ApartamenPage {
  rentedroom: any=[];

  constructor(public navCtrl: NavController, public navParams: NavParams, public apa:LoaddataProvider) {
    this.loaddata();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ApartamenPage');
  }
  loaddata(){
    this.apa.getapartamen().subscribe(porms=>{
      this.rentedroom=porms;
    });
  }
  getdetail(room){
    this.navCtrl.push(RDetailPage,room);
  }
  getItems(ev:any) {
    let val = ev.target.value;

    if (val != 0) {
      this.apa.searchrooms(val).subscribe(rooms => {
        this.rentedroom = rooms;
      });
    }else {
      this.loaddata();
  }
}
}//end
