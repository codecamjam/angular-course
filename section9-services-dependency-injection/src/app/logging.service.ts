import { Injectable } from "@angular/core";

//newer versions of angular recommend adding this decorator
//to services regardless of if its used in the traditional manner
//such as when you're injecting a service into another service
@Injectable()
export class LoggingService {
  logStatusChange(status: string) {
    console.log("A server status changed, new status: " + status);
  }
}
