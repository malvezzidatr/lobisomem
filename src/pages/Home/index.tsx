import React, { useEffect } from "react"
import * as S from './styles';
import { Image, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { io } from "socket.io-client";

const socket = io('http://192.168.15.129:3333', {
  transports: ["websocket"],
});

export const Home = () => {
    const navigate = useNavigation();

    const generateLobby = () => {
        const caracteres = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        let codigo = '';
        const width = 9;
        
        for (let i = 0; i < width; i++) {
            const indiceAleatorio = Math.floor(Math.random() * caracteres.length);
            codigo += caracteres.charAt(indiceAleatorio);
        }
        
        return codigo;
    }

    const newGame = () => {
        const id = generateLobby()
        socket.emit('createLobby', id);
        navigate.navigate('Lobby', { adminName: id });
    }

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
                <S.NemGameButton onPress={newGame}>
                    <Image
                        source={require('../../assets/handIcon.png')}
                        style={{marginRight: 12}}
                    />
                    <Text style={{fontSize: 24, color: 'white'}}>Novo Jogo</Text>
                </S.NemGameButton>
                <S.LobbyButton onPress={() => navigate.navigate('ConnectToLobby')}>
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