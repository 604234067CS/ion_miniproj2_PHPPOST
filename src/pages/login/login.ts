import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SignupPage } from '../signup/signup';
import {  HttpClientModule } from '@angular/common/http';
import{Http} from '@angular/http';
import 'rxjs/add/operator/map';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
logindata: any= {};
  constructor(public navCtrl: NavController, public navParams: NavParams, public http:Http) {
  this.logindata.username="";
  this.logindata.password="";
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }
  signIn(){
    if(this.logindata.username !="" && this.logindata.password!=""){

    console.log("user:",this.logindata.username);
    console.log("user:",this.logindata.password);

      let url : string = "http://localhost/login/login.php";
      let datapost = JSON.stringify({
        user:this.logindata.username,
        pass:this.logindata.password

      });
      this.http.post(url,datapost)
      .map(res=>res.json())
      .subscribe(data =>{

        console.log(data);

      });

    }else{
      console.log("กรุณาป้อนรหัส")
    }

  }
  goToSignup(params){
    if (!params) params = {};
    this.navCtrl.push(SignupPage);
  }
}//en
