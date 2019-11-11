import { LoginPage } from './../login/login';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import 'rxjs/add/operator/map';
import{Http} from '@angular/http';

/**
 * Generated class for the SignupPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html',
})
export class SignupPage {
  regisResult:any= {};

  constructor(public navCtrl: NavController, public navParams: NavParams,public http:Http, public alertCtrl:AlertController) {
    this.regisResult.name ="";  
    this.regisResult.surname ="";
    this.regisResult.username =""; 
    this.regisResult.password =""; 
    this.regisResult.em ="";


  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SignupPage');
  }

  goTologin(params){
    if (!params) params = {};
    this.navCtrl.push(LoginPage);
  }
  signIn(){
    if(this.regisResult.name !="" && this.regisResult.surname !="" &&this.regisResult.password!="" &&this.regisResult.em!="" && this.regisResult.username!=""){
      console.log("user",this.regisResult.name);
     console.log("surname",this.regisResult.surname);
     console.log("pass",this.regisResult.em);
     console.log("username",this.regisResult.username); 
     console.log("email",this.regisResult.password);
 
     let url= 'http://localhost/login/singup.php';
        let datapost = JSON.stringify({
         name:this.regisResult.name,
         sname:this.regisResult.surname,
         email:this.regisResult.em,
         username:this.regisResult.username,
         password:this.regisResult.password
       });
       let alert = this.alertCtrl.create({
        message: 'ยืนยันการสมัคร',
        buttons: [
          {
            text: 'OK',
            handler: () => {
              this.http.post(url,datapost)
              .subscribe(data=>{
               console.log(data);
               this.navCtrl.push(LoginPage);
              });
            }
          },
          {
            text: 'Cancle',
            handler: () => {
              console.log('Disagree clicked');
            }
          }

        ]
      });
      alert.present();
 
    }else{
      let alert = this.alertCtrl.create({
        message: 'กรุณากรอกข้อมูล',
        buttons: [
          {
            text: 'OK',
             role: 'OK',
          }
        ]
      });
      alert.present();
     }
 }


  
  
}//end
