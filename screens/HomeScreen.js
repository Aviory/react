import React, {Component} from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View, AppRegistry, TextInput,Switch ,Dimensions,Button
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
      const { navigate } = this.props.navigation;
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
                  underlineColorAndroid='rgba(0,0,0,0)'
                />
              </View>
              <View style={styles.inputView}>
                  <MonoText style={styles.topText}>
                      Department
                  </MonoText>
                <TextInput
                  style={styles.inputText}
                  underlineColorAndroid='rgba(0,0,0,0)'
                />
              </View>
              <View style={styles.inputView}>         
                  <MonoText style={styles.topText}>   
                      Reason
                  </MonoText>                         
                <TextInput                            
                  style={styles.inputText}
                  underlineColorAndroid='rgba(0,0,0,0)'
                />                                    
              </View>                                 

                  <View style={styles.toggleContainer}>
                      <View>
                        <Text style={styles.toggleText}>Send report to email</Text>
                      </View>
                      <ToggleSwitch onToggle={this.onToggle} style={styles.toggleBtn}  />
                  </View>
                  <View style={styles.toggleContainer}>
                        <Text style={styles.toggleText}>Injury at work</Text>
                        <ToggleSwitch  onToggle={this.onToggle} style={styles.toggleBtn}  />
                  </View>

               <TouchableOpacity onPress={() => navigate('Report')}
                                style={styles.sickContainer}>
                  <Image style={styles.imageSick} source={require("../assets/icons/ic_sick/ic-sick.png")}/>
                  <Text style={styles.imageText}>Sick</Text>
              </TouchableOpacity>


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

// const Component = Platform.select({
//     ios: () => <Button style={styles.sickBtn}
//                        title="Sick"
//                        color={'#fff'}
//                        backgroundColor={'#fd5858'}
//                        onPress={() => navigate('Report')}>
//     </Button>,
//     android: () => <Text>android</Text>,
// })();

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
    inputText:{
      marginLeft:10,
    },
    toggleContainer:{
        width:Dimensions.get('window').width-10,
       // flex:1,
       flexDirection: 'row',
        // alignContent: 'stretch'
       justifyContent: 'space-between'
    },
    toggleText:{
        marginLeft: 20,
         marginTop:10,
         // position: 'relative',
         // left:0,
        alignSelf:'flex-start',
    },toggleBtn:{
        // width: Dimensions.get('window').width-10,
        // position: 'relative',
        // right:0,
        // top:0,
        // paddingLeft:55,
         alignSelf: 'flex-end'  ,
         // justifyContent: 'center',
         // alignItems: 'center',

        // marginTop:80,
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
        borderRadius: 6,
        borderWidth:1,
        borderColor:'#cac8cf',
        borderStyle: 'solid',
        // flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 30,
         width: 158,
         height: 131,
        backgroundColor: '#fd5858',
    },
    sickBtn:{
        
        // backgroundColor: Platform.OS === 'ios' ? '#fd5858' : 'transparent',
        // color:Platform.OS === 'ios' ? '#888888' : '#fd5858',

    },
    imageSick: {
        width: 59,
        height: 59,
        marginBottom:13,
        marginTop:10,
        margin: 3,
        resizeMode:'contain'
    },
    imageText:{
        fontSize:20,
       color:'#ffffff'
    } ,
  topText:{
        margin:10,
        fontSize:12,
        opacity:0.6,
    },
    inputView:{
    borderRadius: 6,
    borderWidth:1,
    borderColor:'#cac8cf',
    borderStyle: 'solid',
      margin:20,
      width: Dimensions.get('window').width-40,
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
    color: '#888888',
  },
});
