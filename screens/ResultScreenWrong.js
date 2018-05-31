import React from 'react';
import { Platform, ScrollView,TouchableOpacity, StyleSheet,View, Button,AppRegistry,NavigatorIOS , Dimensions, TextInput, Text,TouchableHighlight, Image} from 'react-native';


export default class ResultScreenWrong extends React.Component {
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
                            <Image style={styles.smallText} source={require("../assets/icons/ic_inform_wrong/wrong.png")}/>
                        </View>
                        <View >
                            <Text style={styles.textBlack}>
                                Something went wrong, please try again
                            </Text>
                        </View>
                        <View style={styles.acceptBtn}>
                            <Button
                                title="OK"
                                color={'#888888'}
                                onPress={() => navigate('HomeSick')}>
                            </Button>
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
        height: Dimensions.get('window').height/2,
        marginLeft:10,
        backgroundColor: '#fff',
        borderRadius: 6,
        borderWidth:1,
        borderColor:'#cac8cf',
        borderStyle: 'solid',

        flexDirection: 'column',
        justifyContent: 'center',
    },
    dialogContainer:{
        width: Dimensions.get('window').width-20,
        height: Dimensions.get('window').height/2-20,
        flex:1,
        flexDirection: 'column',
        justifyContent: 'space-around',
    },
    imageContainer:{
        flex:1,
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop:15,
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
        color:'#ffffff'

    }, textBlack:{
        fontSize:16,
        paddingLeft:10,
        paddingRight:10,
        textAlign:'center',
    },

    acceptBtn:{
        width: Dimensions.get('window').width-40,
        borderRadius: 6,
        borderWidth:1,
        borderColor:'#cac8cf',
        borderStyle: 'solid',
        backgroundColor:'#537dff',
        paddingTop:5,
        marginTop:15,
        marginBottom:15,
        marginLeft:10,
    },
});