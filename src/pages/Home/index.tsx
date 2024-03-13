import React from "react"
import * as S from './styles';
import { Image, Text } from "react-native";

export const Home = () => {
    return (
        <S.Container
            colors={['#3A3A50', '#87CEEB']}
        >
            <S.ContainerTitle>
                <S.Moon
                    source={require('../../assets/moon.png')}
                />
                <S.Title>
                    LOBIS
                </S.Title>
                <S.WolfTitle
                    source={require('../../assets/wolfTitle.png')}
                    style={{height: 50}}
                />
                <S.Title>
                    MEM
                </S.Title>
            </S.ContainerTitle>

            <S.MenuContainer>
                <S.NemGameButton>
                    <Image
                        source={require('../../assets/handIcon.png')}
                        style={{marginRight: 12}}
                    />
                    <Text style={{fontSize: 24, color: 'white'}}>Novo Jogo</Text>
                </S.NemGameButton>
                <S.LobbyButton>
                    <Text style={{fontSize: 20, color: '#3A3A50'}}>Conectar a um lobby</Text>
                </S.LobbyButton>
            </S.MenuContainer>
            <Image
                source={require('../../assets/sun.png')}
                style={{position: 'absolute', bottom: 0}}
            />
        </S.Container>
    )
}