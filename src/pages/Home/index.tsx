import React from "react"
import * as S from './styles';
import { LinearGradient } from "expo-linear-gradient";
import { Image, Text, TouchableOpacity, View } from "react-native";

export const Home = () => {
    return (
        <LinearGradient
            colors={['#3A3A50', '#87CEEB']}
            style={{flex: 11, alignItems: 'center', justifyContent: 'space-around', paddingHorizontal: 32}}
        >
            <View style={{position: 'relative', flexDirection: 'row', alignItems: 'center', flex: 5}}>
                <Image
                    source={require('../../assets/moon.png')}
                    style={{position: 'absolute', right: -8, zIndex: 1}}
                />
                <S.Title>
                    LOBIS
                </S.Title>
                <Image
                    source={require('../../assets/wolfTitle.png')}
                    style={{height: 50}}
                />
                <S.Title>
                    MEM
                </S.Title>
            </View>

            <View style={{width: '100%', flex: 6}}>
                <TouchableOpacity style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'center', backgroundColor: '#3A3A50', width: '100%', height: 60, borderRadius: 10}}>
                    <Image
                        source={require('../../assets/handIcon.png')}
                        style={{marginRight: 12}}
                    />
                    <Text style={{fontSize: 24, color: 'white'}}>Novo Jogo</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'center', backgroundColor: '#FFF', width: '100%', height: 60, borderRadius: 10, marginTop: 22}}>
                    <Text style={{fontSize: 20, color: '#3A3A50'}}>Conectar a um lobby</Text>
                </TouchableOpacity>
            </View>
            <Image
                source={require('../../assets/sun.png')}
                style={{position: 'absolute', bottom: 0}}
            />
        </LinearGradient>
    )
}