import React from 'react';
import { ExpoConfigView } from '@expo/samples';
import {
    Image,
    Platform,
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View, AppRegistry
} from 'react-native';
export default class HistoryScreen extends React.Component {
    static navigationOptions = {
        title: '',
    };

    render() {
        /* Go ahead and delete ExpoConfigView and replace it with your
         * content, we just wanted to give you a quick view of your config */
        return (
            <View style={styles.container}>
                <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>

                    <Text style={styles.HistoryText}>
                        History
                    </Text>
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
    HistoryText:{
        fontSize:24,
        margin:10,
        color:'#58585d'
    }

});