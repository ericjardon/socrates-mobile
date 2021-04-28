import React, { useState } from 'react'
import { View, Text, Button, TextInput } from 'react-native'
import s from '../style'

// Página que se muestra después de dar en Sellar mi voto.
// Aquí aparecen opciones para ver el hash, y para hacer submit del voto.
// Se envía al Back: {tel: , encryptedVote: , oneTimeCode:,}


export default function SealedBallot({ navigation }) {
    return (
        <View style={{ flex: 1, justifyContent: 'space-between' ,display: "flex",flexDirection: "column" ,alignItems: 'center', marginTop: 30}}>
            <Text style={{ textAlign:'center', fontSize:25}}>Sistema de Votacion Electoral</Text>
            <Text style={{ textAlign:'center', fontSize:15, height: 300, width: 350}}>Para verificar tu identidad necesitmaos 
            acceso a tu huella digital,un número teléfonico y tu clave de lector</Text>
          
               
  
                
         
            <View style={{ backgroundColor: '#87CEFA', margin: 15}}>
                <Button
                title="Aceptar"
                color= "white"
                title="Aceptar"
                onPress={() => navigation.navigate("CardID")} />
            </View>
        </View>
    )
}
