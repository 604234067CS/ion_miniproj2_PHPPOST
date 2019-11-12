import { LoaddataProvider } from './../../providers/loaddata/loaddata';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-com',
  templateUrl: 'com.html',
})
export class ComPage {


  result:any={};
  value;
  showroom1:any=[];
  showroom2:any=[];
 

  constructor(public navCtrl: NavController, public navParams: NavParams, public api:LoaddataProvider, public keyapi :LoaddataProvider) {
    this.result.room1 = "";
    this.result.room2 = "";
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad VsroomPage');
    this.keyapi.loadrooms().subscribe(data=>{
     this.value = data;
    });   
  }

  
  getroomview(){

   if(this.result.room1!=""){
      this.keyapi.showroom(this.result.room1).subscribe(data=>{
        this.showroom1 = data;
        console.log(this.showroom1);
      });

    }if(this.result.room2 !=""){
      this.keyapi.showroom(this.result.room2).subscribe(val=>{
        this.showroom2 = val;
        console.log(this.showroom2);
      });
  }

}
}//


