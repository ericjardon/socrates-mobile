import React, { useState } from 'react'
import { View, Text, Button, Image, TouchableOpacity, Platform, Modal, Alert } from 'react-native'
import s from '../style'
import * as LocalAuthentication from 'expo-local-authentication'
import axios from 'axios'

// Al hacer submit, se muestra esta pantalla para hacer la autenticación del voto

export default function Auth({ navigation, route }) {
    const { phoneNum, voteDecision, confirmationNumber} = route.params;
    console.log("Auth received:", phoneNum, voteDecision, confirmationNumber);

    const [isModalVisible, setisModalVisible] = useState(true);

    const castVote = () => {
        console.log("Send POST request to Vote Collection Server...");
        const endpoint = 'https://us-south.functions.appdomain.cloud/api/v1/web/nopassword%40nuke.africa_dev/default/VotingProcess';
        const data = {
            phoneNum,
            voteDecision,
            confirmationNumber,
        }
        axios.post(endpoint, data).then(res => {
            console.log("Success:", res);
        }).catch(err => {
            console.log("Server Error:", err.message);
            return;
        })

        console.log("Proceed to confirmation");  
        navigation.navigate("Confirmation");   // pass alng the hash
    }

    const tryAuth = async () => {
        console.log("tryAuth called");

        // Has hardware ?
        LocalAuthentication.hasHardwareAsync().then(res => {
            console.log("Has hardware:", res);
        }).catch(err => {
            console.log("No hardware:", err);
            return;
        })
        // is Enrolled ?
        const isEnrolled = await LocalAuthentication.isEnrolledAsync();
        if (!isEnrolled) return;

        const { success, error } = await LocalAuthentication.authenticateAsync();
        if (success) {
            Alert.alert("Has sido autenticado exitosamente");
            // generate hash
            // Enviar objeto {cve, encryption, phone}
            // delete all route references and information
            // pass hash to next screen
            navigation.navigate("Confirmation", {phoneNum, voteDecision, confirmationNumber});
        } else {
            Alert.alert(" La autenticación falló. Intenta de nuevo o llama al 888 000");
        }
        setisModalVisible(false);
    }

    Platform.OS === "ios" && tryAuth();

    return (
        <View style={s.container}>
            <View style={s.titleContainer}>
                <Text style={s.title}>Auth screen</Text>
            </View>
            <View style={{ marginTop: '10%' }}>
                <Image
                    style={{ width: 220, height: 220 }}
                    source={require('../assets/fingerprint.png')}
                />
            </View>
            <View style={{ margin: '10%', paddingHorizontal: 10 }}>
                <TouchableOpacity
                    onPress={() => {
                        setisModalVisible(true);
                    }}>
                    <Text>INGRESAR HUELLA</Text>
                </TouchableOpacity>
            </View>
            <View>
                {
                    Platform.OS === 'android' && (
                        <Modal
                            animationType="slide"
                            transparent={true}
                            visible={isModalVisible}
                            onShow={tryAuth}>
                            <View style={s.modal}>
                                <Text style={{ color: '#ffff', textAlign: 'center', fontSize: 18 }}>
                                    Necesitamos autenticar que eres tú.{"\n"}
                Utiliza tu huella digital.</Text>
                                <TouchableOpacity
                                    onPress={() => {
                                        LocalAuthentication.cancelAuthenticate();
                                        setisModalVisible(false);
                                    }}>
                                    <Text style={{ color: 'red', textAlign: 'center' }}>Cancelar</Text>
                                </TouchableOpacity>
                            </View>
                        </Modal>
                    )
                }
            </View>

            <Button
                title="Siguiente"
                onPress={() => castVote()} />
        </View>
    )
}
