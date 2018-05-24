import React from 'react';
import { ScrollView, StyleSheet,View, Button,AppRegistry,NavigatorIOS , Dimensions, TextInput, Text,TouchableHighlight, Image} from 'react-native';


export default class TestScreen extends React.Component {
    static navigationOptions = {
        title: '',
    };

    render() {
        return (
            <View style={styles.container}>

            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
        paddingTop: 15,
        backgroundColor: '#888888',
        justifyContent: 'center'
    },

});