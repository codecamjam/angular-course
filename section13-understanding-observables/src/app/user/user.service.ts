import { EventEmitter, Injectable } from "@angular/core";
import { Subject } from "rxjs";

//subject

//this is alternative syntax to adding this service
//to the app module providers array
@Injectable({ providedIn: "root" })
export class UserService {
  // activatedEmitter = new EventEmitter<boolean>();
  //SUBJECTS ARE THE RECOMMENDED APPROACH!!! USE SUBJECTS
  //INSTEAD OF USING EVENT EMITTERS
  //IMPORTANT: UNSUBSCRIBE FROM SUBJECTS

  //ANOTHER IMPORTANT NOTE: if you're class property has @OUTPUT decorator
  //then use EVENTEMITTER not subject
  //ONLY USE SUBJECTS FOR cross component communication via services
  activatedEmitter = new Subject<boolean>();
}
