import { NgForm } from "@angular/forms";
import { Component, OnInit } from "@angular/core";
import { AuthService } from "src/app/auth/auth.service";

@Component({
  selector: "app-signup",
  templateUrl: "./signup.component.html",
  styleUrls: ["./signup.component.css"]
})
export class SignupComponent implements OnInit {
  constructor(private authService: AuthService) {}

  ngOnInit() {}

  onSignUp(form: NgForm) {
    this.authService.signupUser(form.value.email, form.value.password);
  }
}
