import React from 'react';
import { ScrollView, StyleSheet,View, Button,AppRegistry,NavigatorIOS , Dimensions, TextInput,TouchableOpacity, Text} from 'react-native';
import MainTabNavigator from './MainTabNavigator';
import { ExpoLinksView } from '@expo/samples';
import PropTypes from 'prop-types';
import { createStackNavigator,StackNavigator } from 'react-navigation';



export default class Authorization extends React.Component {
    static navigationOptions = {
        title: '',
    };

    render() {
        const { navigate } = this.props.navigation;
        return (
            <View style={styles.container}>

                {/*<Text style={styles.getStartedText}>*/}
                    {/*Change this text and your app will automatically reload.*/}
                {/*</Text>*/}

                <Text style={styles.logoText}>
                    TALLINK SILJA LINE
                </Text>

                <View style={styles.inputView}>

                    <TextInput style={styles.topText}>
                        Fullname
                    </TextInput>
                </View>

                <View style={styles.inputView}>

                    <TextInput style={styles.topText}>
                        Personal number / Samordningsnummer
                    </TextInput>
                </View>

                <View style={styles.btnStyleClick}>
                    <TouchableOpacity onPress={() => navigate('Home')}>
                        <Text style={styles.text}>Register</Text>
                    </TouchableOpacity>

                </View>

            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 15,
        backgroundColor: '#fff',
        justifyContent: 'center'
    },
    inputView:{
        borderWidth: 0.5,
        borderRadius: 5,
        margin:10,
        width: Dimensions.get('window').width-20,
        height: 70,
    },
    topText:{
        margin:10,
        fontSize:16,
        opacity:0.6,
    },
    logoText:{
        fontSize:25,
        margin:10,
        color:'#02509f',
        textAlign: 'center',
        marginBottom:20,
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
    text:{
        fontSize:16,
        paddingLeft:10,
        paddingRight:10,
        textAlign:'center',
    },


});