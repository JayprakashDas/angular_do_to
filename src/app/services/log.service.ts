import { Injectable } from '@angular/core';

import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import {Observable} from 'rxjs/Observable';
import { of } from 'rxjs/Observable/of';
import {Log} from '../models/logs';

@Injectable({
  providedIn: 'root'
})
export class LogService {

logs:Log[]

  private logSource =new BehaviorSubject<Log>({id:null, text:null,date:null})
  selectedLog = this.logSource.asObservable();

  constructor() { 
    this.logs =[
      {
        id:'1',text:'genegated componet',date: new Date('12/26/1021')
      },
      {
        id:'2',text:'genegated componet2',date: new Date('12/26/1021')
      },
      {
        id:'3',text:'genegated componet3',date: new Date('12/26/1021')
      },
    ]
  }
//using observale means we are sending the data asynchrnously so nedd to suscribe
getLogs():Observable<Log[]>{
  return of(this.logs)
}

setFormLog(log:Log){
  this.logSource.next(log)
}


}
