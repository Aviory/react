import React from 'react';
import { Notifications } from 'expo';
import {createStackNavigator, createSwitchNavigator, StackNavigator} from 'react-navigation';

import MainTabNavigator from './MainTabNavigator';
import Authorization from './Authorization';
import ReportSick from '../screens/ReportSick';
import registerForPushNotificationsAsync from '../api/registerForPushNotificationsAsync';
import FragmentDialog from "../screens/FragmentDialog";
import ResultScreen from "../screens/ResultScreen";
import ResultScreenWrong from "../screens/ResultScreenWrong";
import StatusSickHomeScreen from "../screens/StatusSickHomeScreen";
import ReportSickContinue from "../screens/ReportSickContinue";
import TestScreen from "../screens/TestScreen";
import SickTabNavigator from "./SickTabNavigator";

const AppNavigator = createSwitchNavigator({
  // You could add another route here for authentication.
  // Read more at https://reactnavigation.org/docs/en/auth-flow.html
  //   Test:TestScreen,
    Main: Authorization,
    Home: MainTabNavigator,
    HomeSick: SickTabNavigator,
    SickMain:StatusSickHomeScreen,
    Report: ReportSick ,
    Dialog: FragmentDialog,
    ResulfSuccs:ResultScreen,
    ResulfWrong:ResultScreenWrong,
    ReportSickContinue:ReportSickContinue,

});

// const AppScreen = createStackNavigator({// top navigate screens
//     Auth: { screen: ReportSick },
//     Auth: { screen: Authorization },
//     Home: { screen: MainTabNavigator },
// });

export default class RootNavigation extends React.Component {
  componentDidMount() {
    this._notificationSubscription = this._registerForPushNotifications();
  }

  componentWillUnmount() {
    this._notificationSubscription && this._notificationSubscription.remove();
  }

  render() {
    return <AppNavigator />;
  }

  _registerForPushNotifications() {
    // Send our push token over to our backend so we can receive notifications
    // You can comment the following line out if you want to stop receiving
    // a notification every time you open the app. Check out the source
    // for this function in api/registerForPushNotificationsAsync.js
    registerForPushNotificationsAsync();

    // Watch for incoming notifications
    this._notificationSubscription = Notifications.addListener(this._handleNotification);
  }

  _handleNotification = ({ origin, data }) => {
    console.log(`Push notification ${origin} with data: ${JSON.stringify(data)}`);
  };
}

