import React from 'react';
import { ExpoConfigView } from '@expo/samples';
import {
    Image,
    Platform,
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View, AppRegistry, T
} from 'react-native';
export default class AboutUsScreen extends React.Component {
    static navigationOptions = {
        title: 'About Us',
    };

    render() {
        /* Go ahead and delete ExpoConfigView and replace it with your
         * content, we just wanted to give you a quick view of your config */
        return (
            <View style={styles.container}>
                <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
                    <Text style={styles.logoText}>
                        TALLINK SILJA LINE
                    </Text>
                <Text style={styles.aboutUsText}>
                    About us
                </Text>
                <Text style={styles.maintText}>
                    With so many different ways today to find information online, it can sometimes be hard to know where to go to first. I want to look at the major and most effective ways to find information online.   The biggest and most commonly used method is to use a search engine such as : Google, Yahoo, or Msn. All three of these search engines offer similar features.

                    Text search, Image search, Local search, Product search, are a few of the services they offer. It used to be only a few years ago where Google dominated the Search Engine market. Due largely to the fact that their search technology was the most advanced. Because of the huge investment other companies have put into their search technology, it’s getting harder and harder every day to say which one is really the best.

                    With this in mind I think it comes down more now to which company do you prefer or which layout you like the most. Another method used to find information is through what is called a Web Directory. Web directories will usually either be relative or general:

                    Relative – A relative web directory will contain information and links to websites that are all to do with one topic. An example would be a Weight Loss directory that contains only information and links to sites that have something to do with Weight Loss.

                    General – A general web directory is a site that will contain links and information to do with all types of categories. It will usually be arranged topically to allow ease of use in finding exactly what you want. The biggest and one of the most used directories is dmoz.org, which contains links and information to thousands of different sites, all arranged into categories.

                    I would recommend checking out a few of these sites, and really trying them out for yourself to see which one will be suit your needs. I’ve found that each site can be used most effectively in different situations. Happy information finding!

                    Feel free to reprint this article as long as you keep the following caption and author biography in tact with all hyperlinks.
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
    maintText:{
        margin:10,
        fontSize:16,
    },
    aboutUsText:{
        fontSize:24,
        margin:10,
        color:'#58585d'
    },
    logoText:{
        fontSize:25,
        margin:10,
        color:'#02509f',
        textAlign: 'center',
    }
});