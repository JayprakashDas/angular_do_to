import { Component, OnInit } from '@angular/core';
import {Log} from '../../models/logs'
import {LogService} from '../../services/log.service'

@Component({
  selector: 'app-log-form',
  templateUrl: './log-form.component.html',
  styleUrls: ['./log-form.component.css']
})
export class LogFormComponent implements OnInit {

  id:string;
  text:string;
  date:any;


  //inject the service to the constructor
  constructor(private logService:LogService) { }

  ngOnInit() {
    //Suscribe to the selected log observable

    this.logService.selectedLog.subscribe(log=>{
      if(log.id !==null){
        this.id=log.id;
        this.text=log.text;
        this.date=log.date
      }
    })
  }

}
