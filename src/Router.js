import React from 'react'
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


import {Input} from './components';
import {Login} from './pages/Login';
import {Main} from './pages/Main';

const Stack = createStackNavigator();

const Router = () => {
    
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Main" screenOptions={{headerShown: false, gestureEnabled: true}} >
                <Stack.Screen name="Main" component={Main} />
                <Stack.Screen name="Login" component={Login}/>
            </Stack.Navigator>
        </NavigationContainer>
    )
}


export default Router;

