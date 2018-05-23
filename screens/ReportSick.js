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
            <View style={styles.textBtn}>
                <Button style={styles.smallText}
                        title="Report sick"
                        color={'#888888'}
                        onPress={() => navigate('Home')}>
                </Button>
            </View>
                <View style={styles.btnStyle}>
                    <Button
                        onPress={() => navigate('Home')}
                        title="Onboard"
                        color="#fff"
                        accessibilityLabel="Learn more about this purple button"
                    />
                </View>
                <Text style={styles.smallText}>Text about onboard</Text>
                <View style={styles.daysContainer}>
                    <View style={styles.days}>
                        <Text style={styles.textDay}>Day 1</Text></View>
                    <View style={styles.days}>
                        <Text style={styles.textDay}>Day 2</Text></View>
                    <View style={styles.days}>
                        <Text style={styles.textDay}>Day 3</Text></View>
                </View>

                <Text style={styles.smallText}>Text about 3 day</Text>

                <View style={styles.btnStyle}>
                    <Button
                        // onPress={() => navigate('Home')}
                        title="More than 7 days"
                        color="#fff"
                        accessibilityLabel="Learn more about this purple button"
                    />
                </View>
            </View>
        );
    }


}

const styles = StyleSheet.create({
    container: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
        backgroundColor: '#fff',
    },
    btnStyle:{
        marginTop:30,
        borderWidth: 0.5,
        borderRadius: 5,
        backgroundColor:'#02509f',
        margin:10,
        width: Dimensions.get('window').width-20,
        height: 70,
        justifyContent: 'center'
    },
    daysContainer:{
        marginTop:30,
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: Dimensions.get('window').width-20,
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
    textDay:{

    },
    smallText:{
        margin:10,
        marginTop:15,
    },
    textBtn:{
        marginTop:15,
        width: Dimensions.get('window').width,
    }

});
