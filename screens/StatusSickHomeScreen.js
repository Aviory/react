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

export default class StatusSickHomeScreen extends React.Component {
    static navigationOptions = {
        header: null,
    };

    onToggle(isOn){

    }
    render() {
        const { navigate } = this.props.navigation;
        return (
            <View style={styles.container}>
                <ScrollView>
                    <View>
                        <View style={styles.dateContainer}>
                            <View>
                                <Text style={styles.dateText}>Sick since</Text>
                            </View>
                        </View>
                        <View style={styles.dateContainer}>
                            <View>
                                <Text style={styles.dateDataText}>01 Feb 2018</Text>
                            </View>
                        </View>
                    </View>
                    <View style={styles.welcomeContainer}>

                        <View>
                            <Text>Change to:</Text>
                        </View>

                        <View style={styles.healthyContainer}>
                            <Image style={styles.imageHealthy} source={require("../assets/icons/ic_healthy/ic-healthy.png")}/>
                            <Button style={styles.sickBtn}
                                    title="Healthy"
                                    color={'#fff'}
                                    onPress={() => navigate('Home')}>

                            </Button>
                        </View>

                        <View style={styles.sickContainer}>
                            <Image style={styles.imageSick} source={require("../assets/icons/ic_sick/ic-sick.png")}/>
                            <Button style={styles.sickBtn}
                                    title="Continue sick"
                                    color={'#fff'}
                                    onPress={() => navigate('ReportSickContinue')}>

                            </Button>
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
        // flex: 1,
        // flexDirection: 'column',
        // justifyContent: 'space-around',
        backgroundColor: '#fff',
    },
    developmentModeText: {
        marginBottom: 20,
        color: 'rgba(0,0,0,0.4)',
        fontSize: 14,
        lineHeight: 19,
        textAlign: 'center',
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
    healthyContainer :{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 30,
        width: 158,
        height: 131,
        backgroundColor: '#3ac775',
    },

    sickBtn:{

    },
    imageSick: {
        width: 45,
        height: 45,
        margin: 3,
        backgroundColor: '#fd5858',
    },
    imageHealthy: {
        width: 45,
        height: 45,
        margin: 3,
        backgroundColor: '#3ac775',
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
    dateContainer:{
        width: Dimensions.get('window').width,
        flex:1,
        marginTop:15,
        flexDirection: 'row',
        display: 'flex',
        justifyContent: 'center',
    },
    dateText:{
        fontSize:16,
    },
});
