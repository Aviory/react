import React from 'react';
import { ScrollView, StyleSheet,View, Button,AppRegistry,NavigatorIOS , Dimensions, TextInput, Text} from 'react-native';


export default class FragmentDialog extends React.Component {
    static navigationOptions = {
        title: '',
    };

    render() {
        // const { navigate } = this.props.navigation;
        return (
            <View style={styles.container}>
                <View>

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
        backgroundColor: '#fff',
        justifyContent: 'center'
    },
});