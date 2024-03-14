import React, { useEffect } from "react";
import * as S from './styles';
import { Image } from "react-native";
import { useNavigation } from "@react-navigation/native";

export const InitialLoading = () => {
    const navigate = useNavigation();

    useEffect(() => {
        setTimeout(() => {
            navigate.navigate('Home');
        }, 4000)
    }, [])

    return (
        <S.Container>
            <Image
                style={{
                    height: 150,
                    width: 150
                }}
                source={require('../../assets/wolf-20fps.gif')}
            />
        </S.Container>
    )
}