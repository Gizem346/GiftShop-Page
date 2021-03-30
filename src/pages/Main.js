import React from 'react'
import { SafeAreaView, Text, View, Image, StyleSheet, Dimensions, TouchableOpacity } from 'react-native';
import {LoginButton} from '../components/LoginButton';


const Main = (props) => {
    return (
        <SafeAreaView  style={{flex: 1, backgroundColor: '#f4acb7'}}>
            <View style={{flex: 1}}>
                <Image 
                    source={require('../assets/giftt.png')}
                    style={styles.mainLogo}
                />
                <Text style={styles.text}>Welcome to GiftShop</Text>
               
                <TouchableOpacity 
                    style={styles.container}
                    onPress= {() => props.navigation.navigate('Login')}
                >
                    <Text style={styles.buttonText}>Start</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )

}

export {Main}

const styles = StyleSheet.create({
    mainLogo: {
        resizeMode: 'contain',
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height * 0.25,
        tintColor: '#F67280',
        marginTop: 75,
    },
    text: {
        fontSize: 35,
        fontFamily: 'cursive',
        alignSelf: 'center',
        margin: 50,
        color: 'white'
    },
    container: {
        backgroundColor: '#F67280',
        padding: 10,
        width: Dimensions.get('window').width / 2,
        alignSelf: 'center',
        borderRadius: 10,
    },
    buttonText: {
        color: 'white',
        alignSelf: 'center',
        textAlign: 'center'
    }
})