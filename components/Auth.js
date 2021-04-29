import React, { useState } from 'react'
import { View, Text, Button, Image, TouchableOpacity, Platform, Modal, Alert } from 'react-native'
import s from '../style'
import * as LocalAuthentication from 'expo-local-authentication'
import PhoneNumber from './PhoneNumber'

// Al hacer submit, se muestra esta pantalla para hacer la autenticación del voto

export default function Auth({ navigation, route }) {
    //const { cve, phone, encryption } = route.params;

    const [isModalVisible, setisModalVisible] = useState(true);

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
            navigation.navigate("Confirmation")
        } else {
            Alert.alert(" La autenticación falló. Intenta de nuevo o llama al 888 000");
        }
        setisModalVisible(false);
    }

    Platform.OS === "ios" && authenticate();

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
                onPress={() => navigation.navigate("Confirmation")} />
        </View>
    )
}
