import { Component, OnInit } from "@angular/core";
import * as firebase from "firebase";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit {
  activePage: string = "recipes";

  ngOnInit() {
    firebase.initializeApp({
      apiKey: "AIzaSyDlR54tSDlsfaoW-QuHV48BVVKF136HOyM",
      authDomain: "mytest-f013e.firebaseapp.com"
    });
  }
}
