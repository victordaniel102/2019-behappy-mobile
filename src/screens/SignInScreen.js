import React, { Component } from "react";
import { AsyncStorage, Button, View } from "react-native";

import { APP_STACK } from "../config/routes";
import styles from "./styles";

class SignInScreen extends Component {
    static navigationOptions = {
        title: "BeHappyWith.Me :: Login"
    };

    render() {
        return (
            <View style={styles.container}>
                <Button title="Sign in!" onPress={this._signInAsync} />
                <Button title="Sign up" />
                <Button title="Esqueci minha senha :-/" />
                <Button title="Continue disconectado" />
            </View>
        );
    }

    _signInAsync = async () => {
        await AsyncStorage.setItem("userToken", "abc");
        this.props.navigation.navigate(APP_STACK);
    };
}

export default SignInScreen;
