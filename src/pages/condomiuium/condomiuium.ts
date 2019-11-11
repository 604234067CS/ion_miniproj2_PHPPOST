import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { LoaddataProvider } from '../../providers/loaddata/loaddata';
import { RDetailPage } from '../r-detail/r-detail';

/**
 * Generated class for the CondomiuiumPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-condomiuium',
  templateUrl: 'condomiuium.html',
})
export class CondomiuiumPage {
  rentedroom: any = [];
  constructor(public navCtrl: NavController, public navParams: NavParams, public condo: LoaddataProvider) {
    this.Loaddata();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CondomiuiumPage');
  }
   Loaddata(){
     this.condo.getcondomiuium().subscribe(condos=>{
       this.rentedroom=condos;
     });
   }
   getdetail(room){
     this.navCtrl.push(RDetailPage,room);
   }
   getItems(ev:any) {
    let val = ev.target.value;

    if (val != 0) {
      this.condo.searchrooms(val).subscribe(rooms => {
        this.rentedroom = rooms;
      });
    }else {
      this.Loaddata();
  }
}
}//
