import React from 'react';
import { ScrollView, StyleSheet,View, Button,AppRegistry,NavigatorIOS , Dimensions, TextInput, Text,TouchableHighlight, Image} from 'react-native';


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
                             <Image style={styles.smallText} source={require("../assets/icons/ic_inform_succsf/mark.png")}/>
                        </View>
                        <View >
                            <Text style={styles.text}>
                                Information sent successfully
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
        borderWidth: 0.5,
        borderRadius: 5,

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

    },
    acceptBtn:{
        width: Dimensions.get('window').width-40,
        borderWidth: 0.5,
        borderRadius: 5,
        backgroundColor:'#02509f',
        paddingTop:5,
        marginTop:15,
        marginBottom:15,
        marginLeft:10,
    },
});