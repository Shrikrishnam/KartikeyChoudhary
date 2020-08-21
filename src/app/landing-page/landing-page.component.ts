import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

/**
 * Component for landing-page.
 */

@Component({
  selector: "app-landing-page",
  templateUrl: "./landing-page.component.html",
})
export class LandingPageComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit() {}

  navpage() {
  // Redirect to place-appointment page.
    this.router.navigateByUrl("place-fitness-trainer-appointment");
  }
}
