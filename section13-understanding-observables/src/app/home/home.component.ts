import { Component, OnDestroy, OnInit } from "@angular/core";
import { interval, Subscription, Observable } from "rxjs";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"],
})
export class HomeComponent implements OnInit, OnDestroy {
  private firstObsSubscription: Subscription;
  constructor() {}

  ngOnInit(): void {
    //kinda like setInterval()
    // this.firstObsSubscription = interval(1000).subscribe((count) => {
    //   console.log(count);
    // });

    const customIntervalObservable = Observable.create((observer) => {
      let count = 0;
      setInterval(() => {
        // observer.next() emit new value
        // observer.error() emit throw new error
        // observer.complete() when you are done
        observer.next(count);
        // if (count == 2) {
        if (count == 5) {
          //observable will come to a hault
          observer.complete();
        }
        if (count > 3) {
          //DONT NEED TO UNSUBSCRIBE WHEN calling error
          observer.error(new Error("Count is greater than 3!"));
        }
        count++;
      }, 1000);
    });

    this.firstObsSubscription = customIntervalObservable.subscribe(
      (data) => {
        //data handler function
        console.log(data);
      },
      (error) => {
        //error handler function
        console.log(error);
        alert(error.message);
      },

      () => {
        //completion handler function
        //here dont need to worry about unsubscribing although it wont hurt
        console.log("completed");
        //this does not run if error is thrown
      }
    );
  }

  ngOnDestroy(): void {
    this.firstObsSubscription.unsubscribe();
  }
}
