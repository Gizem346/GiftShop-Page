import React from 'react'
import { SafeAreaView, View, Text, Image, StyleSheet, Dimensions, ScrollView, Button} from 'react-native'
import { Input } from '../components/Input';
import { LoginButton } from '../components';
import { TouchableOpacity } from 'react-native-gesture-handler';


const Login = (props) => {
    const dimension = Dimensions.get('window');
    console.log(dimension)


    return (
        <SafeAreaView style={{flex: 1, backgroundColor: '#696d7d'}}>
            <ScrollView style={{flex: 1}}>
                <View style={{flex: 1}}>
                    <Image 
                        source={require('../assets/profileicon.png')}
                        style={styles.logoStyle}
                    />
                    
                    <Input holder = "E-mail address"/>
                    <Input holder = "Password"/>

                    <LoginButton />

                    <TouchableOpacity 
                        style={styles.goBack}
                        onPress= {() => props.navigation.goBack()}
                    >
                        <Text style={styles.text}>Go Back</Text>
                    </TouchableOpacity>

                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

export {Login}

const styles = StyleSheet.create({
    logoStyle: {
        resizeMode: 'contain',
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height * 0.10,
        tintColor: '#f4acb7',
        marginTop: 75,
        marginBottom: 75,
    },
    goBack: {
        backgroundColor: '#F67280',
        padding: 10,
        width: Dimensions.get('window').width / 2,
        alignSelf: 'center',
        borderRadius: 10,
        margin: 15,
    },
    text: {
        color: 'white',
        alignSelf: 'center',
        textAlign: 'center'
    }

})