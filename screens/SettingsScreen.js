import React from 'react';
import {
    Image,
    Platform,
    ScrollView,
    StyleSheet,
    Text,TextInput,
    TouchableOpacity,
    View, AppRegistry,Dimensions,Button,
} from 'react-native';
import { ExpoConfigView } from '@expo/samples';
import {MonoText} from "../components/StyledText";

export default class SettingsScreen extends React.Component {
    static navigationOptions = {
        title: '',
    };
    onPressLearnMore(){

    }

    render() {
        /* Go ahead and delete ExpoConfigView and replace it with your
         * content, we just wanted to give you a quick view of your config */
        return (
            <View style={styles.container}>
                <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>

                    <Text style={styles.SettingsText}>
                        Settings
                    </Text>
                    <View style={styles.inputView}>
                        <MonoText style={styles.topText}>
                            Full name
                        </MonoText>
                        <TextInput
                            style={styles.inputText}
                        />
                    </View>
                    <View style={styles.inputView}>
                        <MonoText style={styles.topText}>
                            Personal number / Samordningsnammer
                        </MonoText>
                        <TextInput
                            style={styles.inputText}
                        />
                    </View>
                    <View style={styles.inputView}>
                        <MonoText style={styles.topText}>
                            Email
                        </MonoText>
                        <TextInput
                            style={styles.inputText}
                        />
                    </View>
                    <View style={styles.inputView}>
                        <MonoText style={styles.topText}>
                            Language
                        </MonoText>
                        <TextInput
                            style={styles.inputText}
                        />
                    </View>
                    <Button style={styles.btnStyle}
                            onPress={this.onPressLearnMore}
                            title="Save"
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
    SettingsText:{
        fontSize:24,
        margin:10,
        color:'#58585d'
    },
    inputText:{
        margin:10,
        fontSize:16,
    },
    btnStyle:{
        // align:'center',
        color:'#02509f',
        backgroundColor:'#02509f',
        borderWidth: 0.5,
        borderRadius: 2,
    }
});