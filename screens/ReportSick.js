import React, {Component} from 'react';
import {
    Image,
    Platform,
    ScrollView,
    StyleSheet,
    Text,Button,
    TouchableOpacity,
    View, AppRegistry, TextInput,Switch ,Dimensions
} from 'react-native';
import { WebBrowser } from 'expo';
import ToggleSwitch from 'toggle-switch-react-native';

import { MonoText } from '../components/StyledText';

export default class ReportSick extends React.Component {
    static navigationOptions = {
        header: null,
    };
    state={
        toggle:false,
        day1:false,
        day2:false,
        day3:false,
    }

    _onToggleState(id){
        if(id === "onboard"){

            const newState = !this.state.toggle;
            this.setState({toggle:newState})
        }if(id === "day1"){

            const newState = !this.state.day1;
            this.setState({day1:newState})
            if(newState){
                this.setState({day2:false})
                this.setState({day3:false})
            }
        }if(id === "day2"){

            const newState = !this.state.day2;
            this.setState({day2:newState})
            if(newState){
                this.setState({day1:false})
                this.setState({day3:false})
            }
        }if(id === "day3"){
            const newState = !this.state.day3;
            this.setState({day3:newState})
            if(newState){
                this.setState({day2:false})
                this.setState({day1:false})
            }
        }
    }
    render() {
        const { navigate } = this.props.navigation;
        // const {toggle} = this.state;
        const onboardValue = this.state.toggle?"#02509f":"#e8e8e8";
        const day1Value = this.state.day1?"#02509f":"#e8e8e8";
        const day2Value = this.state.day2?"#02509f":"#e8e8e8";
        const day3Value = this.state.day3?"#02509f":"#e8e8e8";
        return (
            <View style={styles.container}>
                <ScrollView>
                    <TouchableOpacity onPress={() => navigate('Home')}
                                      style={styles.textBtn}>
                        <Image style={styles.smallText} source={require("../assets/icons/img_close/ic-close.png")}/>
                        <Text>Report sick</Text>
                    </TouchableOpacity>

                    <View style={{borderWidth: 0.5,
                        borderRadius: 5,
                        backgroundColor:onboardValue,
                        margin:10,
                        width: Dimensions.get('window').width-20,
                        height: 60,
                        justifyContent: 'center'}} >
                        <TouchableOpacity onPress={() => this._onToggleState("onboard")}>
                            <Text style={styles.text}>Onboard</Text>
                        </TouchableOpacity>
                    </View>

                    <Text style={styles.smallText}>Text about onboard</Text>

                    <View style={styles.daysContainer}>
                        <TouchableOpacity onPress={() => this._onToggleState("day1")}
                                          style={{
                                              borderWidth: 0.5,
                                              borderRadius: 5,
                                              backgroundColor:day1Value,
                                              width: 90,
                                              height: 70,
                                              justifyContent: 'center',
                                          }}>
                                <Text style={styles.text}>Day 1</Text>
                        </TouchableOpacity>

                        <TouchableOpacity onPress={() => this._onToggleState("day2")}
                                          style={{
                                              borderWidth: 0.5,
                                              borderRadius: 5,
                                              backgroundColor:day2Value,
                                              width: 90,
                                              height: 70,
                                              justifyContent: 'center',
                                          }}>

                                <Text style={styles.text}>Day 2</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => this._onToggleState("day3")}
                                          style={{
                                              borderWidth: 0.5,
                                              borderRadius: 5,
                                              backgroundColor:day3Value,
                                              width: 90,
                                              height: 70,
                                              justifyContent: 'center',
                                          }}>
                                <Text style={styles.text}>Day 3</Text>
                        </TouchableOpacity>
                    </View>

                    <Text style={styles.smallText}>Text about 3 day</Text>

                    <View style={styles.btnStyle} >
                        <TouchableOpacity onPress={() => navigate('Dialog')}>
                            <Text style={styles.text}>More than 7 days</Text>
                        </TouchableOpacity>

                    </View>
                    <Text style={styles.smallText}>Text about 3 day</Text>

                    <View style={styles.dateContainer}>
                        <View>
                            <Text style={styles.dateText}>You want to register sick on</Text>
                        </View>
                    </View>
                    <View style={styles.dateContainer}>
                        <View>
                            <Text style={styles.dateDataText}>01 Feb 2018</Text>
                        </View>
                    </View>

                    <View style={styles.btnStyleClick}>
                        <TouchableOpacity onPress={() => navigate('Dialog')}>
                            <Text style={styles.text}>Accept</Text>
                        </TouchableOpacity>

                    </View>
                </ScrollView>
            </View>
        );
    }


}

const styles = StyleSheet.create({
    container: {
        paddingBottom:15,
        paddingTop:10,
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
        backgroundColor: '#fff',
    },
    btnStyle:{
        marginTop:10,
        borderWidth: 0.5,
        borderRadius: 5,
        backgroundColor:'#e8e8e8',
        margin:10,
        width: Dimensions.get('window').width-20,
        height: 60,
        justifyContent: 'center'
    },
    btnStyleClick:{
        borderWidth: 0.5,
        borderRadius: 5,
        backgroundColor:'#02509f',
        margin:10,
        width: Dimensions.get('window').width-20,
        height: 60,
        justifyContent: 'center'
    },
    daysContainer:{
        marginTop:30,
        flex:1,
        // marginLeft:15,
        flexDirection: 'row',
        // flexWrap: 'wrap',
        justifyContent: 'space-around',
        width: Dimensions.get('window').width,
        height: 70,
    },
    days:{
        borderWidth: 0.5,
        borderRadius: 5,
        backgroundColor:'#e8e8e8',
        width: 90,
        height: 70,
        justifyContent: 'center',
    },
    daysRow:{
        flexDirection: 'row',
        justifyContent: 'center',

    },
    textDay:{
        color:'#888888',
    },
    smallText:{
        margin:10,
        marginTop:15,

    },
    closeBtn:{
        margin:10,
        marginTop:15,
        fontSize: 20,
    },
    textBtn:{
        marginTop:15,
        width: Dimensions.get('window').width,
        flexDirection: 'row',
        alignItems: 'baseline',
    },
    dateContainer:{
        width: Dimensions.get('window').width,
        flex:1,
        flexDirection: 'row',
        display: 'flex',
        justifyContent: 'center',
    },
    dateText:{
        fontSize:16,
    },
    dateDataText:{
        fontSize:20,
        fontWeight: 'bold',
    },
    dateTextContainer:{


    },
    text:{
        fontSize:16,
        paddingLeft:10,
        paddingRight:10,
        textAlign:'center',

    },

});
