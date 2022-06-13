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
  highLightBg(){
    alert ('I m highlighted!')
  }

  imgUrl = 'https://images.unsplash.com/photo-1653919695038-1a60a285a465?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80'
  altText = 'tiger Image'

  sayHello() {
    alert("Hello User")
  }
}
