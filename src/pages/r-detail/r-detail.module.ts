import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { RDetailPage } from './r-detail';

@NgModule({
  declarations: [
    RDetailPage,
  ],
  imports: [
    IonicPageModule.forChild(RDetailPage),
  ],
})
export class RDetailPageModule {}
