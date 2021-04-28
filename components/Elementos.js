import React, { useState } from 'react'
import { View, Text, Button, TextInput } from 'react-native'

export default function Elementos({ navigation }) {
    // Para este punto se limpia la información local guardada en la aplicación:
    // el número de teléfono, el numero de credencial, 
    return (
        <View style={{ flex: 1, justifyContent: 'space-between' ,display: "flex",flexDirection: "column" ,alignItems: 'center', marginTop: 30}}>
            <Text style={{ textAlign:'center', fontSize:25}}>Sistema de Votacion Electoral</Text>
            <Text style={{ textAlign:'center', fontSize:15, height: 300, width: 350}}>Para verificar tu identidad necesitmaos 
            acceso a tu huella digital,un número teléfonico y tu clave de lector</Text>
          
               
  
                
         
            <View style={{ backgroundColor: '#87CEFA', margin: 15}}>
                <Button
                title="Aceptar"
                color= "white"
                onPress={() => navigation.navigate("CardID")} />
            </View>
        </View>
    )
}
