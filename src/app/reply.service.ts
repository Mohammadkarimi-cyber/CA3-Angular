import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ReplyService {

  replyMassage(){
    alert(" Congratulations!!!  The agreement has been signed!")
  }
  constructor() { }
}
