import React, { Component } from 'react';
import './App.css';
import Pageheader from './Pageheader.js';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentDate: "",
    }
  }

  componentDidMount() {
    let localDate = new Date();
    let timeOffset = localDate.getTimezoneOffset() / 60;
//    let localHours = localDate.getHours();
  //  let localMins = localDate.getMinutes();
    //let localTime = localHours + ':' + localMins;
    let day = localDate.getDate();
    let month = this.getMonth(localDate.getMonth());
    let weekDay = this.getWeekDay(localDate.getDay());
    let daySuffix = this.getDaySuffix(day);
    document.querySelector('.date-num').innerHTML = day;
    document.querySelector('.date-info').innerHTML = weekDay + ', ' + month + ' ' + daySuffix + " ";
  }

  getMonth(month) {
    switch(month) {
        case 0:
            month = "January";
            return month;            
            break;
        case 1:
            month = "February";
            return month; 
            break;
        case 2:
            month = "March";
            return month; 
            break;
        case 3:
            month = "April";
            return month; 
            break;
        case 4:
            month = "May";
            return month;
            break;
        case 5:
            month = "June";
            return month; 
            break;
        case 6:
            month = "July";
            return month; 
            break;
        case 7:
            month = "August";
            return month; 
            break;
        case 8:
            month = "September";
            return month; 
            break;
        case 9:
            month = "October";
            return month; 
            break;
        case 10:
            month = "November";
            return month; 
            break;
        case 11:
            month = "December";
            return month; 
            break;
    }
  }

  getWeekDay(weekDay) {
    switch (weekDay) {
        case 0:
            weekDay = "Sunday";
            return weekDay;
            break;
        case 1:
            weekDay = "Monday";
            return weekDay;
            break;
        case 2:
            weekDay = "Tuesday";
            return weekDay;
            break;
        case 3:
            weekDay = "Wednesday";
            return weekDay;
            break;
        case 4:
            weekDay = "Thursday";
            return weekDay;
            break;
        case 5:
            weekDay = "Friday";
            return weekDay;
            break;
        case 6:
            weekDay = "Saturday";
            return weekDay;
            break;
    }
  }

  getDaySuffix(day) {
        let daySuffix = "";
        switch (day) {
        case 1:
            daySuffix = day + "st";
            return daySuffix;
            break;
        case 2:
            daySuffix = day + "nd";
            return daySuffix;
            break;
        case 21:
            daySuffix = day + "st";
            return daySuffix;
            break;
        case 31:
            daySuffix = day + "st";
            return daySuffix;
            break;
        case 22:
            daySuffix = day + "nd";
            return daySuffix;
            break;
        case 3:
            daySuffix = day + "rd";
            return daySuffix;
            break;
        case 23:
            daySuffix = day + "rd";
            return daySuffix;
            break;
        default:
            daySuffix = day + "th";
            return daySuffix;
            break;
    }
  }

  render() {
    return (
      <div className = 'container'>
        <Pageheader />
      </div>
    );
  }
}

export default App;
