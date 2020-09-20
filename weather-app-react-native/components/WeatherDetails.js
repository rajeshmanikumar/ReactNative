import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import {colors} from '../utils/index'
import { FontAwesome5, MaterialCommunityIcons } from '@expo/vector-icons'

const {PRIMARY_COLOR,SECONDARY_COLOR,BORDER_COLOR} = colors

export default function WeatherDetails({currentWeather, unitsSystem}) {
    const {
        main: {feels_like,humidity, pressure},
        wind: {speed},
    } = currentWeather
    const windSpeed = unitsSystem === 'metric' ? `${Math.round(speed)} m/s` : `${Math.round(speed)} miles/h`

    return (
        <View style={styles.weatherDetails}>
            <View style={styles.weatherDeatilsRow}>
                <View style={{...styles.weatherDeatilsBox, borderRightWidth:1, borderRightCOlor:BORDER_COLOR}}>
                    <View style={styles.weatherDeatilsRow}>
                        <FontAwesome5 name='temperature-low' size={25} color={PRIMARY_COLOR} />
                        <View style={styles.weatherDeatilsItems}>
                            <Text>Feels Like:</Text>
                            <Text style={styles.textSecondary}>{feels_like} °</Text>
                        </View>
                    </View>
                </View>
                <View style={styles.weatherDeatilsBox}>
                    <View style={styles.weatherDeatilsRow}>
                        <MaterialCommunityIcons name='water' size={30} color={PRIMARY_COLOR} />
                        <View style={styles.weatherDeatilsItems}>
                            <Text>Humidity:</Text>
                            <Text style={styles.textSecondary}>{humidity} %</Text>
                        </View>
                    </View>
                </View>
            </View>
            <View style={{...styles.weatherDeatilsRow, borderTopWidth:1, borderTopColor:BORDER_COLOR}}>
                <View style={{...styles.weatherDeatilsBox, borderRightWidth:1, borderRightCOlor:BORDER_COLOR}}>
                    <View style={styles.weatherDeatilsRow}>
                        <MaterialCommunityIcons name='weather-windy' size={30} color={PRIMARY_COLOR} />
                        <View style={styles.weatherDeatilsItems}>
                            <Text>Wind Speed:</Text>
                            <Text style={styles.textSecondary}>{windSpeed}</Text>
                        </View>
                    </View>
                </View>
                <View style={styles.weatherDeatilsBox}>
                    <View style={styles.weatherDeatilsRow}>
                        <MaterialCommunityIcons name='speedometer' size={30} color={PRIMARY_COLOR} />
                        <View style={styles.weatherDeatilsItems}>
                            <Text>Presure:</Text>
                            <Text style={styles.textSecondary}>{pressure} hPa</Text>
                        </View>
                    </View>
                </View>
            </View>
            
        </View>
    )
}

const styles = StyleSheet.create({
    weatherDetails: {
        marginTop: 'auto',
        margin: 15,
        borderWidth:1,
        borderColor:BORDER_COLOR,
        borderRadius:10,
    },
    weatherDeatilsRow: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    weatherDeatilsBox: {
        flex: 1,
        padding: 20
    },
    weatherDeatilsItems: {
       alignItems:'flex-end',
       justifyContent: 'flex-end' 
    },
    textSecondary: {
        fontSize: 15,
        color: SECONDARY_COLOR,
        fontWeight: '700',
        margin: 7
    }
})