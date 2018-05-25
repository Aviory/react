import React from 'react';
import {
    Image,
    Platform,
    ScrollView,
    StyleSheet,
    Text,TextInput,
    TouchableOpacity,
    View, AppRegistry, Button,Dimensions
} from 'react-native';
import { ExpoConfigView } from '@expo/samples';
import {MonoText} from "../components/StyledText";
import ToggleSwitch from 'toggle-switch-react-native';

export default class ContactScreen extends React.Component {
    static navigationOptions = {
        title: '',
    };

    onToggle(isOn){

    }
    onPressLearnMore(){

    }

    render() {
        /* Go ahead and delete ExpoConfigView and replace it with your
         * content, we just wanted to give you a quick view of your config */
        return (
            <View style={styles.container}>
                <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>

                    <Text style={styles.ContactText}>
                        Contact
                    </Text>
                    <View style={styles.inputView}>
                        <MonoText style={styles.topText}>
                            Message
                        </MonoText>
                        <TextInput style={styles.inputText}>


                        </TextInput>
                    </View>

                    <View style={styles.toggleContainer}>
                        <View>
                            <Text style={styles.toggleText}>Receive status report</Text>
                        </View>
                        <ToggleSwitch onToggle={this.onToggle} style={styles.toggleBtn}  />
                    </View>

                    {/*<ToggleSwitch  onToggle={this.onToggle} style={styles.toggleBtn} label="Receive status report" />*/}

                    <Button style={styles.btnStyle}
                            onPress={this.onPressLearnMore}
                            title="Submit"
                            accessibilityLabel="click this"
                    />

                </ScrollView>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    inputView:{
        borderWidth: 0.5,
        borderRadius: 2,
        margin:10,
        width: Dimensions.get('window').width-20,
        height: Dimensions.get('window').height/2
    },
    ContactText:{
        fontSize:24,
        margin:10,
        color:'#58585d'
    },

    inputText:{
        margin:10,
        fontSize:16,
    },
    topText:{
        margin:10,
        fontSize:12,
        opacity:0.6,
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
    },
        btnStyle:{
        marginTop:10,
        // align:'center',
        color:'#02509f',
        backgroundColor:'#02509f',
        borderWidth: 0.5,
        borderRadius: 2,
    }
});