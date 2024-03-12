import React from "react"
import * as S from './styles';
import { LinearGradient } from "expo-linear-gradient";
import { Image, View } from "react-native";

export const Home = () => {
    return (
        <LinearGradient
            colors={['#3A3A50', '#87CEEB']}
            style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}
        >
            <View style={{position: 'relative', flexDirection: 'row', alignItems: 'center'}}>
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
        </LinearGradient>
    )
}