import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'simpleCRM';

  subHeading = 'This is programming world'
  user = { 'firstName': 'Aman', 'lastName': 'Pandey' }
  successMsg = false;
  successFlag = false;
  loggedIn = true;
  loggedInStatus = false

  contact = [
    {
      firstName: "Jitu",
      lastName: "gupta",
      id: '010203'
    },
    {
      firstName: "Amarjit",
      lastName: "Sharma",
      id: '030405'
    },
    {
      firstName: "Sujit",
      lastName: "Karmakar",
      id: '050607'
    },
    {
      firstName: "Saurav",
      lastName: "Banarjee",
      id: '080910'
    },
    {
      firstName: "Sonam",
      lastName: "Bhagat",
      id: '101112'
    },
    {
      firstName: "Alka",
      lastName: "jaiswal",
      id: '131415'
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
