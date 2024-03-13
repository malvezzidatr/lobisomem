import React, { useEffect, useState } from "react";
import * as S from './styles';
import { Text, View } from "react-native";
import * as Clipboard from 'expo-clipboard';
import io from 'socket.io-client';

interface Message {
    name: string;
    text: string;
}

interface Payload {
    name: string;
    message: string;
}

const socket = io('http://192.168.15.129:3333', {
  transports: ["websocket"],
});

export const Lobby = () => {
    const [lobbyID, setLobbyID] = useState<string>('');
    const [showToast, setShowToast] = useState<boolean>(false);


    const copyCode = async () => {
        await Clipboard.setStringAsync(lobbyID);
        setShowToast(true)
        setTimeout(() => {
            setShowToast(false);
        }, 2000)
    }

    useEffect(() => {
        socket.emit('createLobby');
        socket.on('lobbyCreated', (lobbyID: string) => {
            setLobbyID(lobbyID);
        })
    }, [])

    return (
            <S.Container>
                <S.ContainerId>
                    <S.Text>O id do seu lobby é:</S.Text>
                    <S.ContainerWithId onPress={copyCode}>
                        <S.Id>{lobbyID}</S.Id>
                    </S.ContainerWithId>
                    <S.ShareContainer>
                        <S.CopyButton onPress={copyCode}><Text>Copiar código</Text></S.CopyButton>
                        <S.ShareButton><Text>Share</Text></S.ShareButton>
                    </S.ShareContainer>
                </S.ContainerId>
                {
                    showToast &&
                    <S.ClipboardToast>
                        <Text style={{color: 'white'}}>Copiado para a área de transferência.</Text>
                    </S.ClipboardToast>
                }
            </S.Container>
            
    )
}