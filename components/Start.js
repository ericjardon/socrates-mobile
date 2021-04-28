import React, { useState, useEffect } from 'react'
import { Text, View, Button } from 'react-native'
import s from '../style'
import encrypt from '../encryptRSA'


export default function Start({ navigation }) {
    console.log("All good", encrypt);
    // navigation.navigate("Disclaimer")
    return (
        <View style={{ flex: 1, justifyContent: 'space-between' ,display: "flex",flexDirection: "column" ,alignItems: 'center', marginTop: 30}}>
            <Text style={{ textAlign:'center', fontSize:25}}>Bienvenido al sistema de Votacion Electoral</Text>
            <Text style={{ textAlign:'center', fontSize:15, height: 300, width: 350}}>Si estas listo para votar presiona "sigiente", 
            recuerda que debes tener a la mano tu credencial para botar</Text>
          
                <Image
                        style={{ width:200, height: 200}}
                        source={require('../assets/images/caja.png')}
                    />
  
                
            <View style={{ backgroundColor: '#87CEFA', margin: 15}}>
                <Button
                    
                    title="Siguiente"
                    color="white"
                onPress={() => navigation.navigate("CardID")} />
            </View>
        </View>
    )
}