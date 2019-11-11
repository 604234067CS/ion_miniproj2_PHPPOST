import { RDetailPage } from './../pages/r-detail/r-detail';
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { CatPage } from '../pages/cat/cat';
import { ComPage } from '../pages/com/com';
import { LoginPage } from '../pages/login/login';
import { SignupPage } from '../pages/signup/signup';
//import { CondomiuiumPage } from '../pages/condomiuium/condomiuium';
//import { ApartamenPage } from '../pages/apartamen/apartamen';
//import { MansionPage } from '../pages/mansion/mansion';
//import { DormPage } from '../pages/dorm/dorm';
import { LoaddataProvider } from '../providers/loaddata/loaddata';
import {  HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';


@NgModule({
  declarations: [
    MyApp,
    HomePage,CatPage,ComPage,LoginPage,SignupPage,RDetailPage,
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),HttpClientModule,HttpModule,
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,CatPage,ComPage,LoginPage,SignupPage,RDetailPage,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    LoaddataProvider
  ]
})
export class AppModule {}
