import React, { Component } from "react";
import { AsyncStorage, Button, View } from "react-native";

import { AUTH_STACK, PROFILE_SCREEN } from "../config/routes";
import styles from "./styles";

class HomeScreen extends Component {
    static navigationOptions = {
        title: "BeHappyWith.Me"
    };

    render() {
        return (
            <View style={styles.container}>
                <Button title="Perfil" onPress={this._showMoreApp} />
                <Button title="Conectar :)" onPress={this._signOutAsync} />
            </View>
        );
    }

    _showMoreApp = () => {
        this.props.navigation.navigate(PROFILE_SCREEN);
    };

    _signOutAsync = async () => {
        await AsyncStorage.clear();
        this.props.navigation.navigate(AUTH_STACK);
    };
}

export default HomeScreen;
