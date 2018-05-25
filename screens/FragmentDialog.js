import React from 'react';
import { ScrollView,Platform,TouchableOpacity, StyleSheet,View, Button,AppRegistry,NavigatorIOS , Dimensions, TextInput, Text,TouchableHighlight} from 'react-native';


export default class FragmentDialog extends React.Component {
    static navigationOptions = {
        title: '',
    };

    render() {
        const { navigate } = this.props.navigation;
        return (
            <View style={styles.container}>
                <View style={styles.dialogView}>
                    <View style={styles.dialogContainer}>
                        <Text style={styles.text}>
                            I understand that I have to supply a document from my doctor with indication of my illness
                        </Text>
                        <View style={styles.btnContainer}>
                            <View style={styles.declineBtn}>
                                <TouchableOpacity onPress={() => navigate('Report')}>
                                    <Text style={styles.text}>Decline</Text>
                                </TouchableOpacity>
                            </View>

                            <View style={styles.acceptBtn}>
                                <TouchableOpacity onPress={() => navigate('ResulfSuccs')}>
                                    <Text style={styles.text}>Accept</Text>
                                </TouchableOpacity>
                            </View>

                        </View>
                    </View>
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
    dialogView:{
        width: Dimensions.get('window').width-20,
        height: Dimensions.get('window').height/3,
        marginLeft:10,
        backgroundColor: '#fff',
        borderWidth: 0.5,
        borderRadius: 5,

        flexDirection: 'column',
        justifyContent: 'center',
    },
    dialogContainer:{
        width: Dimensions.get('window').width-20,
        height: Dimensions.get('window').height/5,

    },
    btnContainer:{
        flex:1,
        width: Dimensions.get('window').width-20,
        marginTop:10,
        flexDirection: 'row',
        justifyContent: 'space-around',
    },
    text:{
        fontSize:16,
        paddingLeft:10,
        paddingRight:10,
        textAlign:'center',
    },
    acceptBtn:{
        width: Dimensions.get('window').width/3,
        borderWidth: 0.5,
        borderRadius: 5,
        backgroundColor:'#02509f',
        justifyContent: 'center'
        // paddingTop:5,
    },
    declineBtn:{
        width: Dimensions.get('window').width/3,
        borderWidth: 0.5,
        borderRadius: 5,
        paddingTop:5,
        backgroundColor:'#dee0e2',
        justifyContent: 'center'
    },
    btnRow:{
        flexDirection: 'row',
        justifyContent: 'center',

    },
    buttonContainer: {
        width: Dimensions.get('window').width/3,
        borderWidth: 0.5,
        borderRadius: 5,
        backgroundColor:'#02509f',
    },

});