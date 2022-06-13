import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'simpleCRM';
  successMsg = false;
  successFlag = false;

  friendList = [
    {
      firstName: "Jitu",
      lastName: "gupta",
      firstMeet: 3,
      address: "Dhanuspuja school"
    },
    {
      firstName: "Amarjit",
      lastName: "Sharma",
      firstMeet: 4,
      address: "Mumbai"
    },
    {
      firstName: "Sujit",
      lastName: "Karmakar",
      firstMeet: 5,
      address: "Talwadanga"
    },
    {
      firstName: "Saurav",
      lastName: "Banarjee",
      firstMeet: 11,
      address: "Khadanpara"
    },
    {
      firstName: "Sonam",
      lastName: "Bhagat",
      firstMeet: 11,
      address: "Shitla Mandir"
    },
    {
      firstName: "Alka",
      lastName: "jaiswal",
      firstMeet: 11,
      address: "Khadanpara"
    }
  ]

  superPower = ""
  bgColor = "#000"
  textColor = "#fff"
  color = "blue"
  dynamicClass = "c3"
  dynamicConditionClass = "c4"
  getClass() {
    return 'c5';
  }
}
