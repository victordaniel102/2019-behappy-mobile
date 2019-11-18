import React, { Component } from "react";
import { AsyncStorage, Button, StatusBar, View } from "react-native";

import { AUTH_STACK } from "../config/routes";
import styles from "./styles";

class ProfileScreen extends React.Component {
    static navigationOptions = {
        title: "BeHappyWith.Me :: Perfil"
    };

    render() {
        return (
            <View style={styles.container}>
                <Button title="I'm done, sign me out" onPress={this._signOutAsync} />
                <StatusBar barStyle="default" />
            </View>
        );
    }

    _signOutAsync = async () => {
        await AsyncStorage.clear();
        this.props.navigation.navigate(AUTH_STACK);
    };
}

export default ProfileScreen;
