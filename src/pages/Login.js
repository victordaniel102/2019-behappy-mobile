import React from 'react';
import { View, Text, StyleSheet, StatusBar, Image } from 'react-native';
import LoginForm from '../components/LoginForm.js';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#EFEFEF',
        justifyContent: 'center',
    },
    topText: {
        justifyContent: 'center',
        alignItems: 'center'
    }
});

function Login() {
    return (
        <View style={styles.container}>
            <StatusBar hidden/>
            <View style={styles.topText}>
                <Image source={require('../../assets/imgs/logo.png')} />
            </View>
            <View style={{paddingTop: 20}}>
                <LoginForm/>
            </View>
        </View>
    )
}

export default Login;