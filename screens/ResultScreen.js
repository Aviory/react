import React from 'react';
import { Platform,TouchableOpacity, ScrollView, StyleSheet,View, Button,AppRegistry,NavigatorIOS , Dimensions, TextInput, Text,TouchableHighlight, Image} from 'react-native';


export default class ResultScreen extends React.Component {
    static navigationOptions = {
        title: '',
    };

    render() {
        const { navigate } = this.props.navigation;
        return (
            <View style={styles.container}>
                <View style={styles.dialogView}>
                    <View style={styles.dialogContainer}>
                        <View style={styles.imageContainer}>
                             <Image style={styles.image} source={require("../assets/icons/ic_inform_succsf/mark.png")}/>
                        </View>
                        <View style={{marginTop:15}}>
                            <Text style={styles.textInfo}>
                                Information sent successfully
                            </Text>
                        </View>
                        <View style={styles.btnRow}>
                                <TouchableOpacity onPress={() => navigate('HomeSick')}
                                                  style={styles.btnStyleClick}>
                                    <Text style={styles.text}>OK</Text>
                                </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
        paddingTop: 15,
        backgroundColor: '#888888',
        justifyContent: 'center'
    },
    dialogView:{
        width: Dimensions.get('window').width-39,
        height: 327,
        marginLeft:20,
        marginRight:19,
        backgroundColor: '#fff',
        borderColor:'#cac8cf',
        borderStyle: 'solid',
        borderRadius: 6,
        borderWidth:1,
        flexDirection: 'row',
        justifyContent: 'center',
    },
    dialogContainer:{
        width: Dimensions.get('window').width-38,
        height: 316,
        flexDirection: 'column',
        justifyContent: 'space-around',

    },
    imageContainer:{

        flexDirection: 'row',
        justifyContent: 'center',
        marginTop:20,
    },
    image:{
        width:129,
        height:129,
    },
    textInfo: {
        fontSize: 24,
        paddingLeft: 10,
        paddingRight: 10,

        marginBottom:15,
        textAlign: 'center',
    },
    text:{
        fontSize:20,
        paddingLeft:10,
        paddingRight:10,
        color:'#ffffff',
        textAlign:'center',
        // fontFamily: 'Roboto',
    },
    btnStyleClick:{
        borderRadius: 6,
        borderWidth:1,
        borderColor:'#cac8cf',
        borderStyle: 'solid',
        backgroundColor:'#537dff',
        width: Dimensions.get('window').width-70,
        height: 56,
        marginBottom:20,
        justifyContent: 'center'
    },
    btnRow:{
        flexDirection: 'row',
        justifyContent: 'center',
    },
});