import {
  Component,
  OnInit,
  Input,
  ViewEncapsulation,
  OnChanges,
  SimpleChanges,
  DoCheck,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked,
  OnDestroy,
  ViewChild,
  ElementRef,
  ContentChild,
} from "@angular/core";

@Component({
  selector: "app-server-element",
  templateUrl: "./server-element.component.html",
  styleUrls: ["./server-element.component.css"],
  //Emulate is default, None means no encapsulation, ShadowDom/(formerly Native)
  encapsulation: ViewEncapsulation.None,
})
export class ServerElementComponent
  implements
    OnInit,
    OnChanges,
    DoCheck,
    AfterContentInit,
    AfterContentChecked,
    AfterViewInit,
    AfterViewChecked,
    OnDestroy
{
  @Input("srvElement") element: { type: string; name: string; content: string };
  @Input() name: string;
  @ViewChild("heading", { static: true }) header: ElementRef;
  @ContentChild("contentParagraph", { static: true }) paragraph: ElementRef;

  constructor() {
    console.log("constructor called");
  }

  // {element: SimpleChange}element: SimpleChangecurrentValue: content: "Just a test"name: "Testserver"type: "server"[[Prototype]]: ObjectfirstChange: truepreviousValue: undefined
  ngOnChanges(changes: SimpleChanges) {
    console.log("ngOnChanges called");
    console.log(changes);
  }

  ngOnInit(): void {
    console.log("ngOnInit called");
    //doesnt show
    console.log("TEXT CONTENT: " + this.header.nativeElement.textContent);
    console.log(
      "TEXT CONTENT OF PARAGRAPH: " + this.paragraph.nativeElement.textContent
    );
  }

  //in development mode, on inital load, ngDoCheck is called
  //a second time because of angular development mode
  //also called if you click change first element button
  ngDoCheck() {
    console.log("ngDoCheck called");
  }

  //called after doCheck only once bc it doesnt get initialized again
  //content is the thing we projected into this through ng-content
  ngAfterContentInit() {
    console.log("ngAfterContentInit called");
  }

  //called after do check bc its called after each change detection cycle
  ngAfterContentChecked() {
    console.log("ngAfterContentChecked called");
  }

  //called after content checked
  //gives you access to the template elements
  //cannot access template elements until this function because it hasnt been rendered yet
  ngAfterViewInit() {
    console.log("ngAfterViewInit called");
    //THIS WILL SHOW
    console.log("TEXT CONTENT: " + this.header.nativeElement.textContent);
    console.log(
      "TEXT CONTENT OF PARAGRAPH: " + this.paragraph.nativeElement.textContent
    );
  }

  //called after content checked
  ngAfterViewChecked() {
    console.log("ngAfterViewChecked called");
  }

  ngOnDestroy() {
    console.log("ngOnDestroy called");
  }
}
