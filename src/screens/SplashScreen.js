import React, { Component } from "react";
import { ActivityIndicator, AsyncStorage, StatusBar, View } from "react-native";

import { APP_STACK, AUTH_STACK } from "../config/routes";

import styles from "./styles";

class SplashScreen extends React.Component {
    static navigationOptions = {
        title: "Welcome to the BeHappyWithMe!"
    };

    constructor() {
        super();
        this.initAsync();
    }

    // Fetch the token from storage then navigate to our appropriate place
    initAsync = async () => {
        const userToken = await AsyncStorage.getItem("userToken");
        console.log(userToken);

        // This will switch to the App screen or Auth screen and this loading
        // screen will be unmounted and thrown away.
        this.props.navigation.navigate(userToken ? APP_STACK : AUTH_STACK);
    };

    // Render any loading content that you like here
    render() {
        return (
            <View style={styles.container}>
                <ActivityIndicator />
                <StatusBar barStyle="default" />
            </View>
        );
    }
}

export default SplashScreen;
