import React, { useState } from 'react'
import { View, Text, Button, Modal, TouchableOpacity } from 'react-native'
import s from '../style'


export default function Confirmation({ navigation }) {
    // Para este punto se limpia la información local guardada en la aplicación:
    // el número de teléfono, el numero de credencial, 
    const [isModalVisible, setisModalVisible] = useState(false);
    return (
        <View style={s.container}>
            <View style={s.titleContainer}>
                <Text style={s.title}>Gracias por votar.</Text>
            </View>
            <View style={{ paddingHorizontal: 8, marginVertical: '10%' }}>
                <Text style={{ textAlign: 'center', fontSize: 20 }}>
                    Si ingresaste tu celular, en breve recibirás el SMS
                    con el código secreto que apareció en tu boleta, indicando que tu
            elección se emitió correctamente.{"\n\n"}
            Para una mayor confianza de que tu voto cuenta,
            puedes visualizar <Text style={{ fontWeight: 'bold' }}>la firma única de tu voto</Text>.
            Copia esta firma e ingresa al
            <Text style={{ color: '#3a87fd', textDecorationLine: "underline" }}> Boletín Público de Votos </Text>
            para confirmar
            que tu voto realmente fue registrado para ser contado.{"\n\n"}
            El boletín se actualiza cada hora. Si después de una hora no encuentras tu firma,
            o el código recibido por SMS NO ES EL CORRECTO, llama al <Text style={{ fontWeight: 'bold' }}>888 000</Text></Text>
            </View>

            <View style={{ marginVertical: '10%' }}>
                <TouchableOpacity
                    onPress={() => {
                        setisModalVisible(true);
                    }}>
                    <Text>Ver la firma (hash) del voto realizado</Text>
                </TouchableOpacity>
            </View>
            <Modal
                animationType="slide"
                transparent={true}
                visible={isModalVisible}
            >
                <View style={s.modal}>
                    <Text style={{ color: '#ffff' }}>
                        e0d123e5f316bef78bfdf5a008837577
                    </Text>
                    <TouchableOpacity
                        onPress={() => {
                            setisModalVisible(false);
                        }}>
                        <Text style={{ color: 'red', textAlign: 'center' }}>Cerrar</Text>
                    </TouchableOpacity>
                </View>
            </Modal>

            <Button
                style={{ position: 'absolute', bottom: '10%', }}
                title="Cerrar y terminar"
            />
        </View>
    )
}
