import { RDetailPage } from './../r-detail/r-detail';
import { LoaddataProvider } from './../../providers/loaddata/loaddata';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the MansionPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-mansion',
  templateUrl: 'mansion.html',
})
export class MansionPage {
  rentedroom: any=[];
  constructor(public navCtrl: NavController, public navParams: NavParams, public mansion:LoaddataProvider) {
    this.loaddata();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MansionPage');
  }
  loaddata(){
    this.mansion.getmansion().subscribe(porms=>{
      this.rentedroom=porms;
    });
  }
  getdetail(room){
    this.navCtrl.push(RDetailPage,room);
  }
  getItems(ev:any) {
    let val = ev.target.value;

    if (val != 0) {
      this.mansion.searchrooms(val).subscribe(rooms => {
        this.rentedroom = rooms;
      });
    }else {
      this.loaddata();
  }
}

}
