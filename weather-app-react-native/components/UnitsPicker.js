import React from 'react'
import { View, Text, StyleSheet, Platform } from 'react-native'
import { Picker } from '@react-native-community/picker'

export default function UnitsPicker({unitsSystem,setUnitsSystem}) {
    return (
        <View style={styles.unitSystem}>
            {/*  mode = 'dropdown' works only for Android itemStyle works for only ios */}
            <Picker 
                selectedValue={unitsSystem} 
                onValueChange={(item) => setUnitsSystem(item)} 
                mode='dropdown' 
                itemStyle={{fontSize:12}}>
                <Picker.Item label="C°" value="metric" />
                <Picker.Item label="F°" value="imperial" />
            </Picker>
        </View>
    )
}

const styles = StyleSheet.create({ 
    unitSystem: {
        position: 'absolute',
        ...Platform.select({
            ios: {
                top:-30,
            },
            android: {
                top: 30,
            }
        }),
        height: 50,
        width: 100
    } 
})
