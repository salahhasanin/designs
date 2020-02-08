import { Component, OnInit } from "@angular/core";
import {
  fadeInOnEnterAnimation,
  fadeOutOnLeaveAnimation,
  fadeInUpOnEnterAnimation,
  fadeInLeftOnEnterAnimation
} from "angular-animations";
@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"],
  animations: [
    fadeInOnEnterAnimation(),
    fadeOutOnLeaveAnimation(),
    fadeInUpOnEnterAnimation({
      anchor: "enter",
      duration: 5000,
      delay: 1000,
      translate: "30px"
    }),
    fadeInUpOnEnterAnimation({
      anchor: "enterbtn",
      duration: 3000,
      delay: 1000,
      translate: "30px"
    }),
    fadeInUpOnEnterAnimation({
      anchor: "enterx",
      duration: 9000,
      delay: 1000,
      translate: "30px"
    }),
    fadeInLeftOnEnterAnimation({
      anchor: "enterImage",
      duration: 3000,
      delay: 1000,
      translate: "30px"
    })
  ]
})
export class HomeComponent implements OnInit {
  show = true;
  constructor() {}

  ngOnInit() {}
}
