import React from "react";
import * as S from './styles';
import { Image } from "react-native";

export const InitialLoading = () => {
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