import React from 'react';
import { SafeAreaView, View, Text, TextInput, StyleSheet } from 'react-native';

const Input = (props) => {
    return (
        <View >
            <View style={styles.container}>
                <TextInput
                    placeholder={props.holder}

                />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#eceff1',
        padding: 5,
        margin: 10,
        borderRadius: 10,
        marginVertical: 20,

    }
})

export {Input}