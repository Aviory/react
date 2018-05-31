import React from 'react';
import { ScrollView,Platform,TouchableOpacity, StyleSheet,View, Button,AppRegistry,NavigatorIOS , Dimensions, TextInput, Text,TouchableHighlight} from 'react-native';


export default class FragmentDialog extends React.Component {
    static navigationOptions = {
        header: null,
    };

    render() {
        const { navigate } = this.props.navigation;
        return (
            <View style={styles.container}>
                <View style={styles.dialogView}>
                    <View style={styles.dialogContainer}>
                        <View style={styles.textContainer}>
                            <Text style={styles.textBlack}>
                                I understand that I have to supply a document from my doctor with indication of my illness
                            </Text>
                        </View>
                        <View style={styles.btnContainer}>
                            <View style={styles.declineBtn}>
                                <TouchableOpacity onPress={() => navigate('Report')}>
                                    <Text style={styles.textBlack}>Decline</Text>
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
        backgroundColor: '#888888',
        justifyContent: 'center'
    },
    dialogView:{
        width: Dimensions.get('window').width-20,
        height: Dimensions.get('window').height/3.4,
        marginLeft:10,
        backgroundColor: '#fff',
        borderWidth: 0.5,
        borderRadius: 6,
        flexDirection: 'column',
        justifyContent: 'space-around',
    },
    dialogContainer:{
        width: Dimensions.get('window').width-20,
        // height: Dimensions.get('window').height/5.5,
        justifyContent: 'space-between',
    },
    btnContainer:{

        width: Dimensions.get('window').width-20,
        marginTop:15,
        flexDirection: 'row',
        justifyContent: 'space-around',
    },
    textContainer:{

    },
    text:{
        fontSize:16,
        paddingLeft:10,
        paddingRight:10,
        textAlign:'center',
        color:'#ffffff'
    },
    textBlack:{
        fontSize:18,
        paddingLeft:10,
        paddingRight:10,
        textAlign:'center',
        color:'#58585d'
    },
    acceptBtn:{
        width: Dimensions.get('window').width/2.5,
        height: 56,
        borderWidth: 0.5,
        borderRadius: 6,
        backgroundColor:'#537dff',
        justifyContent: 'center'
        // paddingTop:5,
    },
    declineBtn:{
        width: Dimensions.get('window').width/2.5,
        height: 56,
        borderWidth: 0.5,
        borderRadius: 6,
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
        borderRadius: 6,
        backgroundColor:'#537dff',
    },

});