import { Component } from '@angular/core';
import { FormControl,FormGroup,Validators } from '@angular/forms';
import { ReplyService } from './reply.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  selects = [' NASA ', ' Toyota ', ' HP ', ' GELL ', ' Tecnia' ];

  // services:
  cLick(){
    const reService = new ReplyService();
    reService.replyMassage();

  }

  public date="";
  public firstName="";
  public lastName="";
  public company= "";
  public ads="";
  public city="";
  public zipe="";
  public phone="";
  public email="";
  public job="";
  public location="";
  public jobAds="";
  public jobCity="";
  public jobState="";
  public jobZipe="";
  public breakers="";
  public architecture="";
  public site="";
  public wiring="";
  public materials="";
  public panel="";
  public earthwork="";
  public cost="";
  public  tax="";
  public total="";
  public authorizedName="";
  public authorizedLastName="";


// template reference variable:
myName(value:any){
  console.log(value);
}
myLastName(value:any){
  console.log(value);
}





}
