import React from 'react';
import { TouchableOpacity, Text, StyleSheet, Dimensions } from 'react-native';

const LoginButton = (props) => {
    return (
        <TouchableOpacity 
            style={styles.container}
            onPress= {() => props.navigation.navigate('Login')}
        >
            <Text style={styles.text}>Login</Text>
        </TouchableOpacity>

        // <TouchableOpacity>

        // </TouchableOpacity>
    )
}

export {LoginButton}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#F67280',
        padding: 10,
        width: Dimensions.get('window').width / 2,
        alignSelf: 'center',
        borderRadius: 10,
    },
    text: {
        color: 'white',
        alignSelf: 'center',
        textAlign: 'center'
    }
})