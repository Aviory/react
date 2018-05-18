import React, {Component} from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View, AppRegistry, TextInput,Switch ,Dimensions
} from 'react-native';
import { WebBrowser } from 'expo';
import ToggleSwitch from 'toggle-switch-react-native';

import { MonoText } from '../components/StyledText';

export default class HomeScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };

    onToggle(isOn){

    }
  render() {
    return (
      <View style={styles.container}>
        <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
          <View style={styles.welcomeContainer}>
              <View style={styles.inputView}>
                  <MonoText style={styles.topText}>
                      Ferry
                  </MonoText>
                <TextInput
                  style={styles.inputText}
                />
              </View>
              <View style={styles.inputView}>
                  <MonoText style={styles.topText}>
                      Department
                  </MonoText>
                <TextInput
                  style={styles.inputText}
                />
              </View>
              <View style={styles.inputView}>         
                  <MonoText style={styles.topText}>   
                      Reason
                  </MonoText>                         
                <TextInput                            
                  style={styles.inputText}            
                />                                    
              </View>                                 
              <View>
                  {/*<Text style={styles.toggleText}>Send report to email</Text>*/}
                  <ToggleSwitch onToggle={this.onToggle} style={styles.toggleBtn} label="Send report to email" />

                    {/*<Text style={styles.toggleText}>Injury at work</Text>*/}
                  <ToggleSwitch  onToggle={this.onToggle} style={styles.toggleBtn} label="Injury at work" />
              </View>

              <View style={styles.sickContainer}>
                  <Image style={styles.imageSick} source={require("../assets/icons/ic_sick/ic-sick.png")}/>
                  <Text style={styles.imageText}>Sick</Text>
              </View>

          </View>
          {/*<View style={styles.getStartedContainer}>*/}
            {/*{this._maybeRenderDevelopmentModeWarning()}*/}
          {/*</View>*/}

          {/*<View style={styles.helpContainer}>*/}
            {/*<TouchableOpacity onPress={this._handleHelpPress} style={styles.helpLink}>*/}
              {/*<Text style={styles.helpLinkText}>Help, it didn’t automatically reload!</Text>*/}
            {/*</TouchableOpacity>*/}
          {/*</View>*/}
        </ScrollView>

        {/*<View style={styles.tabBarInfoContainer}>*/}
          {/*<Text style={styles.tabBarInfoText}>This is a tab bar. You can edit it in:</Text>*/}

          {/*<View style={[styles.codeHighlightContainer, styles.navigationFilename]}>*/}
            {/*<MonoText style={styles.codeHighlightText}>navigation/MainTabNavigator.js</MonoText>*/}
          {/*</View>*/}
        {/*</View>*/}
      </View>
    );
  }


  _maybeRenderDevelopmentModeWarning() {
    if (__DEV__) {
      const learnMoreButton = (
        <Text onPress={this._handleLearnMorePress} style={styles.helpLinkText}>
          Learn more
        </Text>
      );

      return (
        <Text style={styles.developmentModeText}>
          Development mode is enabled, your app will be slower but you can use useful development
          tools. {learnMoreButton}
        </Text>
      );
    } else {
      return (
        <Text style={styles.developmentModeText}>
          You are not in development mode, your app will run at full speed.
        </Text>
      );
    }
  }

  _handleLearnMorePress = () => {
    WebBrowser.openBrowserAsync('https://docs.expo.io/versions/latest/guides/development-mode');
  };

  _handleHelpPress = () => {
    WebBrowser.openBrowserAsync(
      'https://docs.expo.io/versions/latest/guides/up-and-running.html#can-t-see-your-changes'
    );
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  developmentModeText: {
    marginBottom: 20,
    color: 'rgba(0,0,0,0.4)',
    fontSize: 14,
    lineHeight: 19,
    textAlign: 'center',
  },
    toggleText:{
        marginLeft: 20,

    },toggleBtn:{

        marginLeft: 50,
        marginTop:50,
    },
    MainContainer :{

        justifyContent: 'center',
        alignItems: 'center',
        flex:1,
        margin: 10

    },
  contentContainer: {
    paddingTop: 30,
  },
  welcomeContainer: {
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 20,
  },
    sickContainer :{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 30,
         width: 158,
         height: 131,
        backgroundColor: '#fd5858',
    },
    imageSick: {
        width: 25,
        height: 25,
        margin: 3,
        backgroundColor: '#fd5858',
    },
    imageText:{
      marginTop:15,
       color:'#ffffff'
    } ,
  welcomeImage: {
    width: 150,
    height: 80,
    marginTop: 3,
    marginLeft: -10,
  },
  topText:{
        margin:10,
        fontSize:12,
        opacity:0.6,
    },
    inputView:{
      borderWidth: 0.5,
      borderRadius: 5,
      margin:10,
      width: Dimensions.get('window').width-20,
      height: 70,
    } ,
  // tabBarInfoContainer: {
  //   position: 'absolute',
  //   bottom: 0,
  //   left: 0,
  //   right: 0,
  //   ...Platform.select({
  //     ios: {
  //       shadowColor: 'black',
  //       shadowOffset: { height: -3 },
  //       shadowOpacity: 0.1,
  //       shadowRadius: 3,
  //     },
  //     android: {
  //       elevation: 20,
  //     },
  //   }),
  //   alignItems: 'center',
  //   backgroundColor: '#fbfbfb',
  //   paddingVertical: 20,
  // },
  helpLinkText: {
    fontSize: 14,
    color: '#2e78b7',
  },
});
