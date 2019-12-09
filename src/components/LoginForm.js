import React, { useState } from 'react';
import { StyleSheet, View, TextInput } from 'react-native'
import { Form, Button, Text, Spinner } from 'native-base';
import Ripple from 'react-native-material-ripple';
import { Actions } from 'react-native-router-flux';
import axios from 'axios';

import api from "../infrastructure/api";
import { login } from "../infrastructure/auth";

const styles = StyleSheet.create({
    input: {
        width: '100%',
        height: 45,
        borderRadius: 2,
        fontSize: 16,
        paddingLeft: 20,
        paddingRight: 5,
        backgroundColor: 'rgba(255, 255, 255, 1)',
        color: 'rgba(0, 0, 0, 0.7)',
        marginBottom: 15,
        elevation: 2,
    },
    rr: {
        padding: 10, 
        width: 45, 
        height: 45, 
        display: 'flex', 
        justifyContent: 'center', 
        alignItems: 'center'
    },
})

function LoginForm() {
    const [ user, setUser ] = useState('');
    const [ pass, setPass ] = useState('');
    const [ error, setError ] = useState('');
    const [ loading, setLoading ] = useState(false);

    const _submitLogin = async () => {
        setInterval(() => { setLoading(true) }, 200)
        console.log(user, pass);

        if (!user || !pass) {
            console.log('ERRO 1');
            setError("Por favor, preencha email e senha!!!");
        } else {
            try {
                const response = await api.post("/auth", {
                    auth: {
                        username: user,
                        password: pass
                    }
                });
                console.log(response);
                login(response.data.token);
            } catch (error) {
                console.log(error);
                setError("Por favor, verifique seu email e senha!!!");
            }
        }
    }

    return (
        <Form style={{padding: 20}}>
            <View style={{paddingRight: 13, paddingLeft: 13}}>
                <TextInput style={styles.input} onChangeText={(e) => { setUser(e)}} placeholder={'Usuário'} underlineColorAndroid='transparent' placeholderTextColor={'rgba(0, 0, 0, 0.5)'} />
                <TextInput style={styles.input} onChangeText={(e) => { setPass(e)}} placeholder={'Senha'} underlineColorAndroid='transparent' placeholderTextColor={'rgba(0, 0, 0, 0.5)'} secureTextEntry={true} />
            </View>
            <View style={{display: 'flex', justifyContent: 'center'}}>
                <View style={{paddingLeft: 14, paddingRight: 14, paddingTop: 10}}>
                        <Button disabled={loading == false ? false : true} style={{backgroundColor: '#2c80b9', elevation: 2, justifyContent: 'center'}}>
                            {
                                loading == false ?
                                <Ripple style={[styles.rr, { width: '100%' }]} onPress={_submitLogin}>
                                    <View style={{width: '100%', justifyContent: 'center', alignItems: 'center'}}>
                                        <Text style={{color:'#fff'}}>Entrar</Text>
                                    </View>
                                </Ripple>
                                :
                                <Spinner size={25} color={'#FFF'} />
                            }
                        </Button>
                </View>
            </View>
            
        </Form>
    );
}

export default LoginForm;