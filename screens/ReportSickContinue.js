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

export default class ReportSickContinue extends React.Component {
    static navigationOptions = {
        header: null,
    };

    onToggle(){

    }
    render() {
        const { navigate } = this.props.navigation;
        return (
            <View style={styles.container}>
                <ScrollView>
                    <View style={styles.textBtn}>
                        <Image style={styles.smallText} source={require("../assets/icons/img_close/ic-close.png")}
                               onPress={() => navigate('Home')}/>
                        <Button style={styles.closeBtn}
                                title="Report continue sick "
                                color={'#888888'}
                                onPress={() => navigate('Home')}>
                        </Button>
                    </View>

                    <Text style={styles.smallText}>Text about onboard</Text>
                    <View style={styles.daysContainer}>
                        <View style={styles.days}>
                            <Text style={styles.textDay}>Day 4</Text></View>
                        <View style={styles.days}>
                            <Text style={styles.textDay}>Day 5</Text></View>
                        <View style={styles.days}>
                            <Text style={styles.textDay}>Day 6</Text></View>
                        <View style={styles.days}>
                            <Text style={styles.textDay}>Day 7</Text></View>
                    </View>

                    <Text style={styles.smallText}>Text day 4-7 </Text>

                    <View style={styles.btnStyle}>
                        <Button
                            onPress={() => navigate('Home')}
                            title="More than 7 days"
                            color="#888888"
                        />
                    </View>
                    <Text style={styles.smallText}>Text about more than > 7/Text>

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
                        <Button
                            onPress={() => navigate('Dialog')}
                            title="Accept"
                            color="#fff"
                        />
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
        marginTop:30,
        borderWidth: 0.5,
        borderRadius: 5,
        backgroundColor:'#e8e8e8',
        margin:10,
        width: Dimensions.get('window').width-20,
        height: 70,
        justifyContent: 'center'
    },
    btnStyleClick:{
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


    }

});
