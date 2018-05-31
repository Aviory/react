import React from 'react';
import { ScrollView, StyleSheet,View, Button,AppRegistry,NavigatorIOS , Dimensions, TextInput, Text,TouchableHighlight, Image} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';


export default class TestScreen extends React.Component {
    static navigationOptions = {
        title: '',
    };

    render() {
        return (
            <View style={styles.container}>
                <Button
                    title='BUTTON'
                />

            <View style={{marginTop:20}}>
                <Button
                    title="LOADING BUTTON"
                    loading
                    loadingProps={{ size: "large", color: "rgba(111, 202, 186, 1)" }}
                    titleStyle={{ fontWeight: "700" }}
                    buttonStyle={{
                        backgroundColor: "rgba(92, 99,216, 1)",
                        marginTop:15,
                        width: 200,
                        height: 45,
                        borderColor: "transparent",
                        borderWidth: 0,
                        borderRadius: 5
                    }}
                    containerStyle={{ marginTop: 20 }}
                />
                </View>
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