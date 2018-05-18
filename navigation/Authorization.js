import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';

import { ExpoLinksView } from '@expo/samples';

export default class LinksScreen extends React.Component {
    static navigationOptions = {
        title: 'Links',
    };

    render() {
        return (
            <View style={styles.container}>
                {/*<Text style={styles.getStartedText}>*/}
                    {/*Change this text and your app will automatically reload.*/}
                {/*</Text>*/}
                <Button
                    onPress={onPressLearnMore}
                    title="Learn More"
                    color="#841584"
                    accessibilityLabel="Learn more about this purple button"
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 15,
        backgroundColor: '#fff',
    },
});