import React from 'react';
import { Platform ,Image,StyleSheet, View} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';

import TabBarIcon from '../components/TabBarIcon';
import HomeScreen from '../screens/HomeScreen';
import AboutUsScreen from '../screens/AboutUsScreen';
import HistoryScreen from '../screens/HistoryScreen';
import SettingsScreen from '../screens/SettingsScreen';
import ContactScreen from '../screens/ContactScreen';
import StatusSickHomeScreen from "../screens/StatusSickHomeScreen";

const SHomeStack = createStackNavigator({
    SHome: StatusSickHomeScreen,
});

SHomeStack.navigationOptions = {
    tabBarLabel: 'Home',
    tabBarIcon: ({ focused }) => (
        <Image
            source={focused ?require("../assets/icons/ic_home/active/a.png"):require("../assets/icons/ic_home/a.png")}
            style={{ width: 25, height: 25 }}
        />
    ),
};

const HistoryStack = createStackNavigator({
    History: HistoryScreen,
});

HistoryStack.navigationOptions = {
    tabBarLabel: 'History',
    tabBarIcon: ({ focused }) => (
        <Image
            source={focused ?require("../assets/icons/ic_history/active/a.png"):require("../assets/icons/ic_history/na.png")}
            style={{ width: 25, height: 25 }}
        />
    ),
};

const ContactStack = createStackNavigator({
    Contact: ContactScreen,
});

ContactStack.navigationOptions = {
    tabBarLabel: 'Contact',
    tabBarIcon: ({ focused }) => (
        <Image
            source={focused ?require("../assets/icons/ic_contact/active/a.png"):require("../assets/icons/ic_contact/na.png")}
            style={{ width: 25, height: 25 }}
        />
    ),
};

const AboutUsStack = createStackNavigator({
    Settings: AboutUsScreen,
});

AboutUsStack.navigationOptions = {
    tabBarLabel: 'About Us',
    tabBarIcon: ({ focused }) => (
        <Image
            source={focused ?require("../assets/icons/ic_aboutus/active/a.png"):require("../assets/icons/ic_aboutus/na.png")}
            style={{ width: 25, height: 25 }}
        />
    ),
};

const SettingsStack = createStackNavigator({
    Settings: SettingsScreen,
});

SettingsStack.navigationOptions = {
    tabBarLabel: 'Settings',
    tabBarIcon: ({ focused }) => (
        <Image
            source={focused ?require("../assets/icons/ic_settings/active/copy.png"):require("../assets/icons/ic_settings/na.png")}
            style={{ width: 25, height: 25 }}
        />
    ),
};

{/*<TabBarIcon*/}
{/*focused={focused}*/}
{/*name={Platform.OS === 'ios' ? `ios-options${focused ? '' : '-outline'}` : 'md-options'}*/}
{/*/>*/}
{/*),*/}

export default createBottomTabNavigator({
    SHomeStack,
    HistoryStack,
    ContactStack,
    AboutUsStack,
    SettingsStack,
});

// const styles = StyleSheet.create({
//     iconStyle: {
//         width: 25,
//         height: 25,
//         margin: 3,
//     },
// });